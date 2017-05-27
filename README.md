# Algorithm in Javascript
## Git
[Git Algorithm](https://github.com/lyhy/algorithm2017)

## Leetcode

### Setup

```
npm i
cd leetcode
```

### Sync latest question list

Save [Recent leetcode question list](https://leetcode.com/problemset/algorithms/)into questions.htm
*Question list synced on 2017-05*

### Load all questions with description and init default empty solution

```js
./bin/loadall
```

### Load individual question

```
npm i

# pass the problem url as an argument
./bin/loadone.js https://leetcode.com/problems/combination-sum/
```

which will create folder `/leetcode/js/combinationSum` with two files.
```
➜  leetcode git:(master) ✗ tree js/combinationSum
js/combinationSum
├── README.md  # contains problem description and link to the problem
└── combination-sum.md # leetcode default empty solution in javascript
```

### update result in leetcode/QUESTIONS.md

```
cd leetcode
./bin/updateresult.js
```

### Run test
```
cd leetcode
//All
jest test
//One
jest 3sum.test.js
//save result
jest  --json  --jsonOutputFile=json_test_result.json --onlyChanged
```

## LICENSE
MIT
