// currying
// currying is when you create a function that can later be called multiple times with different arguments
// _.curry(func, [arity=func.length])
// it allows you to break up arguments passed by the number of arguments

var abc = function (a, b, c) {
  return [a, b, c]
}
var curried = _.curry(abc)

curried (1)(2)(3);
// => [1,2,3]

curried(1, 2)(3);
//=> [1,2,3]

// currying waits until you have all the arguments. it has a copy of the function saved in its inner internals

// composing
// when you take two functions and combine them

const consider = (name) => {
  return `I think it could be .. ${name}`
}
const exclaim = (statement) => {
  return `${statement.toUpperCase()}!`
}

const blame = _.compose(consider, exclaim)

blame('you')

// => 'I think it could be... YOU!'

// advanced scope
const myAlert = () => {
  const x = 'Help. I think I found a clue!'
  let count = 0
  const alerter = () => {
    alert(`${x} ${++count}`)
  }
  return alerter
  // setTimeout(alerter, 1000)
  // console.log('what happens first? this log or the alert?')
}
// myAlert()
const funcAlert = myAlert()
const funcAlert2 = myAlert()
funcAlert()

// => Help I think I found a clue 1

funcAlert()
// => Help I think I found a clue 2

funcAlert2()
// => Help I think I found a clue 1
// (different spots in memory funcAlert and funcAlert2)

const newClue = (name) => {
  const length = name.length;

  return (weapon) => {
    let clue = length + weapon.length;
    return !!(clue % 1);
  }
}

const didGreenDoItWithA = newClue('Green')

didGreenDoItWithA('candlestick') // => false


function countClues() {
  var n = 0
  return {
    count: function() { return n++ },
    reset: function() { return n = 0 }
  }
}

counter = countClues()
counter2 = countClues()

counter.count()
counter.reset()

counter2.count() 
counter2.count()
counter2.reset()

// when we call the count fucntion it retains access to the parent scope and will increment it each time


// closure - when a function is inside of a function that creates scope isoation
// a closure happens when you put two functions inside of a function
// and you can take advantage of that by returning a function
// that retains access to its parent function even after it has been executed

// closure recipe
function checkscope() {             // create your parent function
  var innerVal = "local scope";     // define some variables in the parent's local scope
  function innerFunc() {            // define a function inside the parent function we call this the child
    return innerVar
  }
  return innerFunc                  // return that function from inside the parent function
}

// execution
var scope = "global scope";
function checkscope() {
  var scope = "local scope";
  function innerFunc() {
    return scope;
  }
  return innerFunc;
}
var test = checkscope();  // run parent function and save to a variable. this variable will hold whatever that function RETURNS
test;     // optional: check what that variable holds as its value )Hint: it should be the inner function)
test();   // run the inner function


// gotcha
// even though who is visibly after it still is found in the parent scope and executes
const findSomeone = () => {
  const speak = () => {
    console.log(who);
  }
  let who = 'Why hello there, Professor Plum!';
  return speak;
}

const somoneSpeak = findSomeone()
someoneSpeak
/*
  () => { console.log(who)}
*/

someoneSpeak() // => Why hello there, Prof Plum!

//  use a closure to hide away functionality that you dont want people to mess with
// for a timer a consumer should only have access to the time they shouldn't have access to the increase method
const makeTimer = () => {
  let elapsed = 0;
  const stopwatch = () => { return elapsed }
  const increase = () => elapsed++
  setInterval(increase, 1000) // call increase function every second
  return stopwatch
}
let timer = makeTimer()
timer()


var abc = function(a,b) {
  return [a,b]
}
var curried = _.curry(abc)
curried(1)(2)

const curry = (fn) => {
  return (arg) => {
    return (arg2) => {
      return fn(arg, arg2)
    }
  }
}



const consider = (name) => {
  return `I think it could be .. ${name}`
}
const exclaim = (statement) => {
  return `${statement.toUpperCase()}!`
}

const blame = _.compose(consider, exclaim)

blame('you')

const compose = (fn, fn2) => {
  return (arg) => {
    const result = fn2(arg)
    return fn(result)
  }
}