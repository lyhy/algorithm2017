#! /usr/bin/env node
'use strict';
const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const camelCase = require('camelcase');
const mkdirp = require('mkdirp');
const url = require('url');
const path = require('path');
const chalk = require('chalk');
var config = require('./leetcodeconfig.js');

//var evalWithinContext = function(context, code)
//{
//    (function(code) { eval(code); }).apply(context, [code]);
//};
var createProblem = (problemUrl)=>{
    request.get(problemUrl, (err, response, body) => {
        if(err){
            console.log('Load ' + problemUrl + ' failed.');
            return;
        }else {
            console.log('Creating question for ' + problemUrl);
        }

        const $ = cheerio.load(body);

        const title = $('title').text().split('|')[0];

        //get default code
        var jsHtml;
        var variableName = 'pageData';
        var scriptList = $('script');
        let jsObj;
        for(let i = 0; i < scriptList.length; i++){
            jsObj = scriptList[i];
            if(jsObj.children && jsObj.children.length && jsObj.children[0].data && jsObj.children[0].data.indexOf(variableName) != -1){
                jsHtml = jsObj.children[0].data;
                break;
            }
        }

        if(jsHtml) jsHtml = '(function(){' + jsHtml + ';return pageData;}())';
        let pageData = eval(jsHtml);
        if(!pageData)return;
        let codeArray = pageData.codeDefinition;
        let defaultCode;
        codeArray.forEach((codeObj)=>{
            if(codeObj.value.toLowerCase() === config.codeLanguage){
                defaultCode = codeObj.defaultCode;
            }
        });
        //if(defaultCode)console.log(defaultCode);
        //get default code end

        let content = $('meta[name=description]').attr('content');

        // problem slug, such as `combination-sum`
        const slug = url.parse(problemUrl).pathname.split('/')[2];
        const dirPath = path.resolve('js', camelCase(slug));
        content = content.replace(/(\r\n|\r|\n)/gm, '\n');

        mkdirp(dirPath, function () {
            const fileContent = `## ${title}\n` + `link: <${problemUrl}>\n` + `${content}`;

            createFile(path.resolve(dirPath,'README.md'), fileContent);
            //write default code, skip if file already exist
            defaultCode = defaultCode || '';
            createFile(path.resolve(dirPath,`${slug}.js`), defaultCode);
        });
    });
}

// create file with content only when file is not exists
function createFile(f, content) {
    fs.access(f, (err) => {
        const relativePath = chalk.green(path.relative(__dirname + '/../', f));
        if (err) {
            fs.writeFileSync(f, content);
            console.log(`Create:\n\t ${relativePath}`);
            return;
        }

        console.log(`${chalk.red.bold('File already exists:')}\n\t ${relativePath}`);
    })
}
const problemUrl = process.argv[2];

problemUrl && createProblem(problemUrl);

var obj = {
    createProblem: createProblem
};

module.exports = obj;


