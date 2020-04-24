// _.reduce(collection, [iteratee = _.identity], [accumulator])

// Arguments
// collection (Array|Object) : The collection to iterate over
// [iteratee = _.identity] (Function) : The function invoked per iteration
// [accumulator] (*): The initial value

// Returns
// (*): Returns the accumulated value

// reduce always returns one function

_.reduce([1, 2], function(sum, n) {
  return sum + n;
}, 0)
// => 3

_.reduce({'a':1, 'b':2, 'c':1}, function(result, value, key) {
  (result[value] || (result[value] = [])).push(key); // collecting all of the keys that have the same value
  // result[value] checks is this value in our object already (result is the empty object initially)
  // (result[value] = []) initialize result value to be an empty array and push the key
  return result;
}, {}) // initializing an empty object
// => {'1': ['a', 'c'], '2':['b']}




const reduce = function(list, cb, initial) {
  // loop through the list
  let memo = initial
  // what happens when the fist value becomes the initial value
  for(let i=0; i < list.length; i++) {
    if(i === 0 && memo === undefined) {
      memo = list[0]
    } else {
      memo = cb(list[i], memo)
    }
  }
  return memo;
    // call the callback cb with arr[i], prev/initial
    // save the return value
  // return result
}

reduce([1,2,3], (v, sum) => v + sum)

const newDevelopment = [
  {
      name: 'Miss Scarlet',
      present: true,
      rooms: [
          {kitchen: false},
          {ballroom: false},
          {conservatory: true},
          {'dining room': true},
          {'billiard room': false},
          {library: true}
      ]
  },
  {
      name: 'Reverend Green',
      present: true,
      rooms: [
          {kitchen: true},
          {ballroom: false},
          {conservatory: false},
          {'dining room': false},
          {'billiard room': true},
          {library: false}
      ]
  },
  {
      name: 'Colonel Mustard',
      present: true,
      rooms: [
          {kitchen: false},
          {ballroom: false},
          {conservatory: true},
          {'dining room': false},
          {'billiard room': true},
          {library: false}
      ]
  },
  {
      name: 'Professor Plum',
      present: true,
      rooms: [
          {kitchen: true},
          {ballroom: false},
          {conservatory: false},
          {'dining room': true},
          {'billiard room': false},
          {library: false}
      ]
  }
];

// which room our suspects were not in

const notInRoom = (suspect) => {
  // return an array of all the falses
  const emptyRooms = reduce(suspect.rooms, (room, memo, []) => {
    if (room === false) {
      memo.push(room)
    }
    return memo
  }, [])
  return emptyRooms
};

notInRooms = _.map(newDevelopment, notInRoom)

_.intersection(...notInRooms)

// return array of rooms 
// ['living room', 'bathroom']