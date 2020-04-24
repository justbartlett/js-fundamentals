// each does not return anything
// map returns an array everytime

// _.map([123], function(v,i,list) {console.log(v)})

const weapons = ['candlestick', 'lead pipe', 'revolver']

const makeBroken = function(item) {
  return `broken $(item)`
}

_.map(weapons, makeBroken)

// map vs each

function CreateSuspectObjects(name) {
  return {
    name: name,
    color: name.split(' ')[1],
    speak() { console.log(`my name is {this.name}`) }
  }
}

var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White']

var suspectsList = _.map(suspects, function(name) {
  return CreateSuspectObjects(name);
})

// map returns an array
// they are similar bc they iterate through a list

