'use strict';


// DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, just like you see in the newspaper.

// But for a change, let"s do that for each and every word of the given String. Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.

// *should work also on Leading and Trailing Spaces and caps.

// "apple"            => "Apple"
// "apple of banana"  => "Apple of Banana"
// "one   space"      => "One   Space"
// " sp  ace WALK   " => "   Space Walk   " 
// Note: you will be provided atleast one word and should take string as input and return string as output.


const dropCap = function(n) {
    return n.split(' ')
                .map(word => word.length > 2 ? word[0].toUpperCase() + word.slice(1).toLowerCase(): word)
                .join(' ');
}


console.log(dropCap("apple"));
console.log(dropCap("apple of banana"));
console.log(dropCap("one   space"));
console.log(dropCap(" sp  ace WALK   "));