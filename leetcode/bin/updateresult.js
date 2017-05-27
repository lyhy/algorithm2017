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
var loadone = require('./loadone.js');
var jsonTestResult = require('../json_test_result');
var slugMap = {};
//var result
//console.log(testResult.testResults.length);
const problemUrl = config.questionListApi;

request.get({url:problemUrl, json: true}, (err, response, body) => {
    let questions = body.stat_status_pairs;
    let levelStr = ['', 'easy', 'medium', 'hard'];

    questions.sort((a, b)=>{
        return a.stat.question_id - b.stat.question_id;
    });
    var updateTime = new Date();
    var total = questions.length;
    var blocked = questions.reduce((acc, val)=>{
        return val.paid_only ? ++acc : acc;
    }, 0);
    var testResult = jsonTestResult.testResults;
    var resolved = testResult.reduce((acc, val)=>{
        var name = val.name;
        var names = name.split('/');
        var slugName = names[names.length -1].replace('.test.js', '');
        slugMap[slugName] = val.name;
        return val.status === 'passed' ? ++acc : acc;
    }, 0);

    const dirPath = path.resolve('./');
    var fileContent = `# Leetcode Solutions with JavaScript

Update time: ${updateTime}

I have solved **${resolved} / ${total}** problems while **${blocked}** problems are still locked.

(Notes: :blue_book: means you need to buy a book from Leetcode)

| # | Title | Source Code | Explanation | Difficulty |
|:---:|:---:|:---:|:---:|:---:|
`;
//| 557 | [Reverse Words in a String III](https://leetcode.com/problems/reverse-words-in-a-string-iii/) | | | Easy |`;
    questions.forEach((item)=>{
        let questionLink = config.questionLinkPrefix + item.stat.question__title_slug + '/';
        let sourceCode = slugMap[item.stat.question__title_slug] || '';
        let questionText = `| ${item.stat.question_id} | [${item.stat.question__title_slug}](${questionLink}) |${sourceCode} | | ${levelStr[item.difficulty.level]} |\n`;
        //console.log(item.stat.question_id + ':'+item.stat.question__title_slug + '-' + levelStr[item.difficulty.level]);
        fileContent += questionText;
    })

    createFile(path.resolve(dirPath,'QUESTIONS.md'), fileContent);

});

// create/update file with content only
function createFile(f, content) {
    fs.access(f, (err) => {
        const relativePath = chalk.green(path.relative(__dirname + '/../', f));
        if (err) {
            fs.writeFileSync(f, content);
            console.log(`Create:\n\t ${relativePath}`);
            return;
        }else {
            fs.writeFileSync(f, content);
            console.log(`Update:\n\t ${relativePath}`);
            return;
        }
    })
}