/*
filter is a function that takes an array and a callback
returns a new array that will only contain the values that return true from the callback

*/

const _ = {}

// _.filter = function(arr, cb) {
//   // create a new array
//   const storage = []
//   // loop through the array
//   for (let i = 0; i < arr.length; i++) {
//     // check if the cb returns true
//     if (cb(arr[i], i, arr) === true) {  // value, index, list
//        // if returns true push the item into the array
//       storage.push(arr[i])
//     }
//   }
//   // return arr
//   return storage
// }

_.each = function(list, callback) {
  if (Array.isArray(list)) {
    // loop through array
    for (var i = 0; i < list.length; i++) {
      // call the callback with a list item
      callback(list[i], i, list) // value, index, list
    }
  } else {
    // loop through object
    // call the callback with a list item
    for (var key in list) {
      callback(list[key], key, list)
    }
  }
}

_.map = function(list, callback) {
  var storage = [];
  _.each(list, function(value, i, list) {
    storage.push(callback(value, i, list))
  })
  return storage
}

_.filter = function(arr, cb) {
  // create a new array
  const storage = []
  // loop through the array
  _.each(arr, function(item, i, list) {
    if (cb(item, i, list)) storage.push(item)
  })
  // return arr
  return storage
}

const videoData = [
  {
    name: 'Miss Scarlet',
    present: true,
    rooms: [
      {kitchen: false},
      {ballroom: false},
      {conservatory: false},
      {'dining room': false},
      {'billiard room': false},
      {library: false}
    ]
  },
  {
    name: 'Mrs. White',
    present: false,
    rooms: [
      {kitchen: false},
      {ballroom: false},
      {conservatory: false},
      {'dining room': false},
      {'billiard room': false},
      {library: false}
    ]
  },
  {
    name: 'Reverend Green',
    present: true,
    rooms: [
      {kitchen: false},
      {ballroom: false},
      {conservatory: false},
      {'dining room': false},
      {'billiard room': false},
      {library: false}
    ]
  },
  {
    name: 'Colonel Mustard',
    present: true,
    rooms: [
      {kitchen: false},
      {ballroom: false},
      {conservatory: false},
      {'dining room': false},
      {'billiard room': false},
      {library: false}
    ]
  }
]

const suspects = _.filter(videoData, function(suspectObject) {
  return suspectObject.present
})

const suspectsName = _.map(suspects, suspect => {
  return suspect.name
})


// functions
// either change data or share it not both
// a side effect is anything that reaches beyond the curley brackets of a function
// e.g. console.log .log is a side effect, .hide() - anything on the dom will be a side effect

const add = function (a, b) {
  b = b || 2
  console.log(arguments)
  return a + b
}
add(3)

// arguments array like objects
const constructArr = function() {
  const arr = Array.prototype.slice.call(arguments) // take an array like object and turn it into an array
  // referencing the slice method that comes with arrays
  // its passing it the arguments pseudo array as the context
  // as a result it turns and array like object into an array array
  arr.push('the billiards room')
  return arr.join(' ')
}
constructArr('was', 'it', 'in')

// turn arguments pseudo array into an actual array with Array.from in es6

const constructArr = function() {
  const arr = Array.from(arguments)
  arr.push('the billiards room')
  return arr.join(' ')
}
constructArr('was','it','in')

const from = arr => {
  return Array.prototype.slice.call(arr)
}

// functions are also objects!
const add = function(a,b) {
  return a + b 
}
add.example = 'testing 123!'