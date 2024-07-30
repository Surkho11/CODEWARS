'use strict';

/*
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.
*/

function areYouPlayingBanjo(name) {
  // Implement me
  return name[0].toUpperCase() === 'R'
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}

console.log(areYouPlayingBanjo('Rick')); // "Rick plays banjo"
console.log(areYouPlayingBanjo('randy')); // "randy plays banjo"
console.log(areYouPlayingBanjo('Bob')); // "Bob does not play banjo"
console.log(areYouPlayingBanjo('Alice')); // "Alice does not play banjo"
