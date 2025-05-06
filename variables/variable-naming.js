/* ==================== Only Starts with letter, dollar sign($), underscore(_) =============== */

var test = 10;
console.log(test); // 10

var _test = 10;
console.log(_test); // 10

var $test = 10;
console.log($test); // 10

// var 1test = 10;
// var *test = 10;


/* ================= Can include letters (a-z, A-Z), digits (0-9), dollar signs ($), and underscores (_) ======== */

var test_1_$ = 10;
console.log(test_1_$);

// var test2$_test3#test = 10;



/* ============= Cannot use reserved words like: 'function', 'var', 'if', 'else', etc ============== */

// var function ='200';
// let if = 50;



/* ==================== Case-sensitive =================== */

var a = 'a';
var A = 'b';
var text = 'c';
var TEXT = 'd';

console.log(a);
console.log(A);
console.log(text);
console.log(TEXT);

var test = true;
// console.log(Test); // Test is not defined

