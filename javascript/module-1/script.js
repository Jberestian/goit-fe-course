// var name = '10';
// console.log ( name );

'use strict'


// alert('hello world');
// alert('hello dick');
// alert('hello pick');

// console.log('hi baby');

//
// var a = 5;
// var b = 10;
// var c= a + b;
// // alert( a + b );
//
// console.log('vsr c' ,c);
// console.log('var a' , a);
// console.log('обед');



// var  requst = prompt('enter your age', '55');
// console.log(requst);
//
// var conf = confirm('');
// console.log(conf);

//
//
// var x = 128;
// var y = 5;
// var result = x % y;
// console.log(result);


//
// var a = 5;
// var b = 10;
// console.log(a > b);
//
// var x = 5;
// var y = 10;
// var res2 = x == y;
// console.log(res2);

// var num = 3;
// alert(num);
//
// var a = 10;
// var b = 2;
//
// var name = prompt();
// alert("ваше имя" + name);
//
// //
// // var sec = 1;
// // var min = sec * 60;
// // var hour = min * 60;
// // var day = hour * 24;
// // var month = day * 30;
// //
// // console.log(sec, min, hour, day, month);
//
//
// var hour = 16;
// var min = 50;
// var sec = 22;
// console.log(hour + ":"  + min + ':' + sec);
//
// var star = 'Hello World'
// console.log(star);
//
// var str1 = 'Hello';
// var tsr2 = 'World!';
// console.log((str1 + ' ' + tsr2));

// var name = prompt("Enter name");
// var lastname = prompt("Enter Last name");
// var age = prompt("Enter age");
// var country = prompt("What country are you from?");
// var money = prompt("where your money?");

// moneyconsole.log('my name ' + name + ' my last name is ' + lastname + ' my age is ' +  age + ' i am from ' + country + ' i hide my money ' + money);
//
// console.log(`my name ${name} last name ${lastname} my age is ${age} i am from ${country} i hide my money ${money}`);

//
// let catName = prompt('Enter cat');
// let catColor  = prompt('Enter color');
// let numberLegs = prompt('Enter number');
//
// console.log(`My cat name is ${catName} his color ${catColor} and he has ${numberLegs} legs`);


// let string = 'Lorem ipsum dolor sit amet, amet sed eu ac cursus tortor, ante semper vestibulum est';
// console.log(string[1]);
// console.log(string[4]);
// console.log(string[14]);
// console.log(string[24]);
// console.log(string[25]);
//
// let string1 = 'а, б, в, г, ґ, д, е, є, ж, з, и, і, ї, й, к, л, м, н, о, п, р, с, т, у, ф, х, ц, ч, ш, щ, ь, ю, я';
// console.log(string1.indexOf('й'));


let text = 'Lorem ipsum dolor sit amet, amet sed eu ac cursus tortor, ante semper vestibulum est';
let amount = text.length;
console.log(text.length);

// console.log(text[amount]);
//
// console.log(text.toLowerCase());
//
// console.log(text.split('s'));

console.log(text.substring(6, 11));
console.log(text.substr(6, 5));

let word = 'Hello';
// console.log(word.substring(1,2));
// console.log(word.substr(1,1));
//
// console.log(word.charAt(0));

let word2 = 'world';
let word3 = '!';
let space = ' ';

console.log(word + ' ' + word2 + ' ' + word3);

console.log(`${word} ${word2} ${word3}`);

console.log(word.concat(space, word2, word3));

console.log(text.startsWith('lorem'));

console.log(text.endsWith('lorem'));

console.log(word.includes('H'));

console.log(text.indexOf('d'));

console.log(word.repeat(5));



let str = 'adcbe';
console.log(`${str[0]} ${str[2]} ${str[4]}`);

let num = '12345';
let num1 = (+num.substring(0,1));
let num2 = (+num.substring(1,2));
let num3 = (+num.substring(2,3));
let num4 = (+num.substring(3,4));
let num5 = (+num.substring(4));

console.log(num1 + num2 + num3 + num4 + num5);
console.log(num1 - num2 - num3 - num4 - num5);
console.log(num1 * num2 * num3 * num4 * num5);
console.log(num1 / num2 / num3 / num4 / num5);

let text = 'js';
console.log(text.toUpperCase());

let text1 = 'js';
console.log(text1.toLowerCase());

let text3 = 'Я вчу javascript';
console.log(text3.length);

let text4 =  'Я вчу javascript';
let text5 = text4.substring(2,5);
let text6 = text4.substring(6);
console.log(text5 + text6);

let text7 =  'Я вчу javascript';
console.log(text7.indexOf('вчу'));

let text8 =  'Я вчу javascript';
console.log(text8.split(' '));

let text9 = 'Hello world welocome to the universe';
console.log(text9.endsWith('universe'));

let text10 = 'Я вчу javascript';
console.log(text10.includes('javascript'));
console.log(text10.includes('css'));


and module 1

