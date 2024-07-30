'use strict';

/*
Being a bald man myself, I know the feeling of needing to keep it clean shaven. Nothing worse that a stray hair waving in the wind.

You will be given a string(x). Clean shaved head is shown as "-" and stray hairs are shown as "/". Your task is to check the head for stray hairs and get rid of them.

You should return the original string, but with any stray hairs removed. Keep count ot them though, as there is a second element you need to return:

0 hairs --> "Clean!"
1 hair --> "Unicorn!"
2 hairs --> "Homer!"
3-5 hairs --> "Careless!"
>5 hairs --> "Hobo!"

So for this head: "------/------" you shoud return:

["-------------", "Unicorn"]
*/

function bald(x) {
  let sum = x.split('').filter((item) => item !== '-').length;
  return sum === 0
    ? [x.replace(/\//g, '-'), 'Clean!']
    : sum === 1
    ? [x.replace(/\//g, '-'), 'Unicorn!']
    : sum === 2
    ? [x.replace(/\//g, '-'), 'Homer!']
    : sum <= 5
    ? [x.replace(/\//g, '-'), 'Careless!']
    : [x.replace(/\//g, '-'), 'Hobo!'];
}

console.log(bald('/---------'));