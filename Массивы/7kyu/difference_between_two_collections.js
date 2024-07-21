'use strict';

// Find the difference between two collections. The difference means that either the character is present in one collection or it is present in other, but not in both. Return a sorted list with the difference.

// The collections can contain any character and can contain duplicates.

// Example
// A = [a, a, t, e, f, i, j]

// B = [t, g, g, i, k, f]

// difference = [a, e, g, j, k]

const arr1 = ['a', 'a', 't', 'e', 'f', 'i', 'j'];
const arr2 = ['t', 'g', 'g', 'i', 'k', 'f']

function diff(a, b){
    const result = [];

    for (let i = 0; i <a.length; i++) {
        if (!b.includes(a[i])) {
            result.push(a[i])
        }
    }

    for (let j = 0; j <b.length; j++) {
        if (!a.includes(b[j])) {
            result.push(b[j])
        }
    }

    return [...new Set(result)].sort()
}

console.log(diff(arr1, arr2));