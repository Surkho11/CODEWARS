'use strict';

/*
Dave has a lot of data he is required to apply filters to, which are simple enough, but he wants a shorter way of doing so.

He wants the following functions to work as expected:

even    // [1,2,3,4,5].even() should return [2,4]
odd     // [1,2,3,4,5].odd() should return [1,3,5]
under   // [1,2,3,4,5].under(4) should return [1,2,3]
over    // [1,2,3,4,5].over(4) should return [5]
inRange // [1,2,3,4,5].inRange(1,3) should return [1,2,3]
They should also work when used together, for example:

[1,2,18,19,20,21,22,30,40,50,100].even().inRange(18,30) // should return [18, 20, 22, 30]
And finally the filters should only accept integer values from an array, for example:

["a", 1, "b", 300, "x", "q", 63, 122, 181, "z", 0.83, 0.11].even() // sho
*/

Array.prototype.even = function() {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (typeof this[i] === 'number' && Math.floor(this[i]) === this[i] && this[i] % 2 === 0) {
      result.push(this[i]);
    }
  }
  return result;
};

Array.prototype.odd = function() {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (typeof this[i] === 'number' && Math.floor(this[i]) === this[i] && this[i] % 2 === 1) {
      result.push(this[i]);
    }
  }
  return result;
};

Array.prototype.under = function(x) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (
      typeof this[i] === 'number' &&
      Math.floor(this[i]) === this[i] && this[i] < x)
     {
      result.push(this[i]);
    }
  }

  return result;
};

Array.prototype.over = function(x) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (
      typeof this[i] === 'number' &&
      Math.floor(this[i]) === this[i] && this[i] > x)
     {
      result.push(this[i]);
    }
  }

  return result;
};

Array.prototype.inRange = function(min, max) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (
      typeof this[i] === 'number' &&
      Math.floor(this[i]) === this[i] && this[i] >= min && this[i] <= max)
     {
      result.push(this[i]);
    }
  }

  return result;
};