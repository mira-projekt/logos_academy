// null, undefined
// let str1 = 'str';
// let str2 = "str";
// let str3 = `str`;

// 'use strict';

// let str = 'Hello world';
// console.log(str);
// property
// console.log('String.length', str.length);

// charAt
// console.log('String.charAt()', str.charAt(0));
// console.log('String.charAt()', str.charAt(10)); // ''
// console.log('String[]', str[0]);
// console.log('String[]', str[10]);

// str[0] = 'Q';
// console.log(str);
// str.charAt(0) = "Q";
// console.log(str);

// toUpperCase, toLowerCase
// console.log('String.toUpperCase()', str.toUpperCase());
// console.log('String.toLowerCase()', str.toLowerCase());

/* 
let myName = prompt('write your name');
// ivan, IVAN, IVan => Ivan;
let newName = myName.charAt(0).toUpperCase();
for(let i=1; i<myName.length; i++){
    newName += myName.charAt(i).toLowerCase();
}
console.log(newName);
*/

// indexOf, lastIndexOf
// console.log('String.indexOf()', str.indexOf('e'));
// console.log('String.indexOf()', str.indexOf('o'));
// console.log('String.indexOf()', str.indexOf('q'));
// console.log('String.indexOf()', str.indexOf('l'));
// console.log('String.indexOf()', str.indexOf('l',5));
// console.log('String.indexOf()', str.indexOf('l',10));
// console.log('String.indexOf()', str.indexOf('world',0));

// let myStr = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, accusamus.';
// for(let i=0; i<myStr.length; i++){
//     // if(myStr.charAt(i)=='e'){
//     //     console.log(i)
//     // }
//     console.log(myStr.indexOf('e',i))
// }
// let start = 0;
// let find = '';
// while (true) {
//     let position = myStr.indexOf('it', start);
//     if (position === -1) break;
//     find += position + ' ';
//     start = position + 1;
// }
// console.log(find);

// console.log('String.indexOf()', str.indexOf('l'));
// console.log('String.lastIndexOf()', str.lastIndexOf('l'));

// includes add es6 
// console.log('String.includes()', str.includes('l'));
// console.log('String.includes()', str.includes('l',5));
// console.log('String.includes()', str.includes('q'));

// let str4 = 'Javascript';
// console.log(str4)

// substring
// console.log('String.substring(4)', str4.substring(4));
// console.log('String.substring(4,7)', str4.substring(4,7));
// console.log('String.substring(4,-2)', str4.substring(4,-2));
// console.log('String.substring(4,0)', str4.substring(4,0));
// console.log('String.substring(0,4)', str4.substring(0,4));

// substr
// console.log('String.substr(4)', str4.substr(4));
// console.log('String.substr(4,2)', str4.substr(4,2));
// console.log('String.substr(4,-2)', str4.substr(4,-2));
// console.log('String.substr(-4,2)', str4.substr(-4,2));

// slice
// console.log('String.slice(4)', str4.slice(4));
// console.log('String.slice(4,7)', str4.slice(4,7));
// console.log('String.slice(4,-2)', str4.slice(4,-2));
// console.log('String.slice(-4,-2)', str4.slice(-4,-2));
// console.log('String.slice(-2,-4)', str4.slice(-2,-4));

// let str5 = 'HTML CSS JS';
// console.log(str5);
// console.log('String.split()', str5.split(' '));
// console.log('String.split()', str5.split('CSS'));
// console.log('String.split()', str5.split(''));
// console.log('String.split()', str5.split());
// console.log('String.split()', str5.split(' ', 2));

// RegExp = split, replace, search, match

// let str6 = 'I love Java and Java the best';
// console.log(str6);
// console.log(str6.replace('Java', 'JS'));

// es6 repeat
// let str7 = 'Arsenal';
// console.log(str7.repeat(4));

// let str = new String('Ivan');
// console.log(str);
// console.log(str.toString());

// let st2 = String('Petro');
// console.log(st2);

// old methods geterate tag
// let str = 'Hello world';
// console.log(str);
// console.log(str.anchor());
// console.log(str.big());
// console.log(str.blink());
// console.log(str.bold());
// console.log(str.fixed());
// console.log(str.fontcolor('red'));
// console.log(str.fontsize('22px'));
// console.log(str.italics());
// console.log(str.link('https://www.google.com'));
// console.log(str.small());
// console.log(str.strike());
// console.log(str.sub());
// console.log(str.sup());
// console.log(str.substr());

// let str1 = 'Hello';
// let str2 = ' world';
// // let res = str1 + str2;
// let res = str1.concat(str2, str2);
// console.log(res);

// let str = ' Javascript ';
// console.log(str, str.length);
// str = str.trim();
// console.log(str, str.length);

// es9 trimStart trimEnd
// str = str.trimStart();
// console.log(str, str.length);

// str = str.trimEnd();
// console.log(str, str.length);

// let str = new String('some');
// console.log(str);

// let str = '4141000022331456';
// let last4 = str.slice(-4);
// console.log(last4);
// console.log(last4.padStart(16, '*'))
// console.log(last4.padEnd(16, '*'))

// console.log('H', 'H'.charCodeAt(0))
// console.log('h', 'h'.charCodeAt(0))
// console.log('72', String.fromCharCode(72))
// console.log('104', String.fromCharCode(104))
