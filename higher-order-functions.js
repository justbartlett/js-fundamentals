// higher order functions 
// takes a function as an input (argument)
// returns a function as the output

// callbacks
const ifElse = (condition, isTrue, isFalse) => {
  return condition ? isTrue() : isFalse();
}
const logTrue = () => {console.log(true);};
const logFalse = () => {console.log(false);};
ifElse(true, logTrue, logFalse);

// passing arguments
var increment = function(n) { return n + 1}
var square = function(n) { return n * n }
var doMathSoIDontHaveTo = function (n, func) {return func(n)}
doMathSoIDontHaveTo(5, square); // 25
doMathSoIDontHaveTo(4, increment); //5

// es6
const increment = n => n + 1
const square = n => n * n
const doMathSoIDontHaveTo = (n, func) => func(n)

// passing a function to a function then calling it with arguments
const ifElse = (condition, isTrue, isFalse, param) => {
  return condition ? isTrue(param) : isFalse(param)
}
ifElse(true, fn1, fn2, 'Hi!')

const ifElse = (condition, isTrue, isFalse, ...args) => {
  console.log(ars) // ['Hi!', 'Bye', 'Hola']
  return condition ? isTrue(...args) : isFalse(...args)
}
ifElse(true, fn1, fn2, 'Hi!', 'Bye', 'Hola')
// how was this done pre es6?
// figure out the arguments object and convert it to an array and use apply
