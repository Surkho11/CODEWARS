'use strict';

/*
Вам будет предоставлен массив объектов, представляющих данные о разработчиках, которые зарегистрировались для участия в следующей встрече по программированию, которую вы организуете.

Дан следующий входной массив:

var list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
];
напишите функцию, которая при выполнении findAdmin(list1, 'JavaScript')возвращает только разработчиков JavaScript, являющихся администраторами GitHub:

[
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' }
]
Примечания:

Первоначальный порядок должен быть сохранен.
Если на заданном языке нет разработчиков-администраторов GitHub, то возвращается пустой массив [].
Входной массив всегда будет допустимым и отформатированным, как в примере выше.
Строки, указывающие, является ли кто-то администратором GitHub, всегда будут отформатированы как 'yes'и 'no'(все в нижнем регистре).
Строки, представляющие заданный язык, всегда будут отформатированы одинаково (например, 'JavaScript'всегда будут отформатированы с использованием заглавных букв «J» и «S»).




Эта ката является частью серии Coding Meetup , которая включает в себя ряд коротких и простых в использовании ката, которые были разработаны для того, чтобы помочь освоить использование функций высшего порядка. В JavaScript это включает такие методы, как: forEach, filter, map, reduce, some, every, find, findIndex. Конечно, возможны и другие подходы к решению ката.
*/

const list1 = [
  {
    firstName: 'Harry',
    lastName: 'K.',
    country: 'Brazil',
    continent: 'Americas',
    age: 22,
    language: 'JavaScript',
    githubAdmin: 'yes',
  },
  {
    firstName: 'Kseniya',
    lastName: 'T.',
    country: 'Belarus',
    continent: 'Europe',
    age: 49,
    language: 'Ruby',
    githubAdmin: 'no',
  },
  {
    firstName: 'Jing',
    lastName: 'X.',
    country: 'China',
    continent: 'Asia',
    age: 34,
    language: 'JavaScript',
    githubAdmin: 'yes',
  },
  {
    firstName: 'Piotr',
    lastName: 'B.',
    country: 'Poland',
    continent: 'Europe',
    age: 128,
    language: 'JavaScript',
    githubAdmin: 'no',
  },
];

function findAdmin(list, lang) {
    return list.filter(value => {
      const { language, githubAdmin } = value;
      // Возвращаем true, если язык совпадает и пользователь администратор
      return language === lang && githubAdmin === 'yes';
    });
}
  

console.log(findAdmin(list1, 'JavaScript'));
