'use strict';

/*
Create a function called reverse for the String prototype that will allow the following functionality:

"String".reverse();// => returns "gnirtS"
"Super awesome string".reverse();// => returns "gnirts emosewa repuS"
*/

String.prototype.reverse = function() {
  return this.split('')
    .reverse()
    .join('');
};
