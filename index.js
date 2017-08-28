const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

//destructively adds element to end of array
function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
};

//destructively adds element to beginning of array
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
};

//destructively removes last element from array
function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
};

//destructively removes first element from array
function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
};

//adds element to end of array
function appendKitten(name){
  var newKittens = [...kittens, name]
  return newKittens
};

//adds element to beginning of array
function prependKitten(name){
  var newKittens = [name, ...kittens]
  return newKittens
};

//removes last kitten
function removeLastKitten(){
  return kittens.slice(0, kittens.length-1)
};

//removes first kitten
function removeFirstKitten(){
  return kittens.slice(1)
};
