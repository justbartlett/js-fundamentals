const _ = {};

_.map = function(list, callback) {
  // create an empty array to store 
  var storage = [];
  // check if array - assuming is array
  // looping

  // functional programmers dont like loops we like functions instead
  // for (var i=0; i < list.length; i++) {
  //   storage.push(callback(list[i], i, list))
  //   // callback (element)
  //   // push it to our array
  // }

  _.each(list, function(value, i, list) {
    storage.push(callback(value, i, list))
  })
    
  // return []
  return storage
}

_.map([1,2,3], function(val) {return val +1})

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

_.each(['sally', 'georgie', 'porgie'], function(name, i, list) {
  if (list[i + 1]) {
    console.log(name, 'is younger than', list[i+1])
  }else {
    console.log(name, 'is the oldest')
  }
})

// each does not return something

