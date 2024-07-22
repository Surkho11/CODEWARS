'use strict';

const obj = {
    city: 'Manchester',
    popular: true,
    age: 2000
}

for (const key in obj) {
    if (obj[key] !== 2000) {
        delete obj[key]
    }
}

console.log(obj);