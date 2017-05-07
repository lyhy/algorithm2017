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

const problemUrl = __dirname + '/' + config.questionListFile;

//request.get(problemUrl, (err, response, body) => {
fs.readFile(problemUrl, (err, body) => {
    const $ = cheerio.load(body);
    let questions = $('.reactable-data a');
    console.log('Found ' + questions.length + ' questions');

    for(let i = 0; i < questions.length; i++){
        let questionUrl = questions[i].attribs.href + '/';
        if(questionUrl.indexOf('/problems') !== -1){
            console.log('Retrieving ' + questionUrl);
            loadone.createProblem(questionUrl);
        }
    }

});