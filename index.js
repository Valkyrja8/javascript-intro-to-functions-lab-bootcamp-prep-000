//Shout "Hello!"
function shout(string){
  return string.toUpperCase()
}

//Whisper "Hello!"
function whisper(string){
  return string.toLowerCase()
}

//logShout logs argument in all caps
function logShout(string){
  console.log(string.toUpperCase())
}
logShout("hello!")

//logWhisper logs argument in all lower case
function logWhisper(string){
  console.log(string.toLowerCase())
}
logWhisper("HELLO!")

//sayHiToGrandma(string) returns "I can't hear you!" if `string` is lowercase

var uppercase = "HELLO!"
string === string.toUpperCase() // true
 
var lowercase = 'hello!'
lowercase.toLowerCase() === lowercase // true
 
var mixedCase = 'Hi there!'
mixedCase.toLowerCase() === mixedCase // false
mixedCase.toUpperCase() === mixedCase // false

function sayHiToGrandma(string){
  if (string.toLowerCase()) { 
    return("I can't hear you!")}
    else if (string.toUpperCase()){
      return("YES INDEED!")}
}
sayHiToGrandma('hello')
sayHiToGrandma('HELLO')

  
