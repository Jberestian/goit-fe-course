// const keyTrainer = {};        // creat pustui object
// keyTrainer.chars = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'] ;
// keyTrainer.charCount = '';
// keyTrainer.checkPositiveInteger = function (num) {
// if (num > 0 && Number.isInteger()
//     return true;
// }     else {
//     return false;
// };
//
// keyTrainer.setCharCount = function () {
//     let chatAmount = +prompt('Enter amou
//     if (keyTrainer.checkPositiveInteger(chatAmou
//         this.charCount = chatAmount;
// }       else{
//     this.setCharCount();
// }
// };
// keyTrainer.setCharCount();
// console.log(keyTrainer);
//
//
// keyTrainer.task = [];
// keyTrainer.createTask = function () {                                                   // 4
//     for (let i = 0; i < this.charCount; i++) {
//         this.task.push(this.chars[Math.floor(Math.random()*this.chars.length)]);
//     }
//
// };
// keyTrainer.setCharCount();
// keyTrainer.createTask();
// console.log(keyTrainer);
//
// keyTrainer.userError = 0;
// keyTrainer.starTask = function () {
//     let string = this.task.join('');
//     this.userImput = prompt(`Enter this string ${string}`).split('');           // 5
//     console.log(string);
// };
//
// keyTrainer.checkError = function () {
//     for (let i = 0; i < this.userImput.length; i++)    {
//         if (this.userImput[i] === this.task[i]){
//             continue;
//         }            else {
//             this.userError++;
//         }
//     }
//     alert(`You make ${this.userError} mistakes`);
// };
// keyTrainer.run = function () {
//     this.setCharCount();
//     this.createTask();
//     this.starTask();
//     this.checkError();
// }
// keyTrainer.run();


// function rot13(text) {
//     let word = text.split('');
//     console.log(word);
//     let word2 = word.map(function (item) {
//         return item.charCodeAt();
//     });
//     console.log(word2);
//     let word3 = word2.map(function (item) {
//         if (item >= 65 && item <= 77) {
//             return item + 13;
//         }
//
//         else if ( item >= 78 && item <= 90){
//             return item -13;
//         }
//         else{
//             return item;
//         }
//     });
//
//     console.log(word3);
//     let word4 = word3.map(function (item) {
//         return String.fromCharCode(item);
//
//     });
//     console.log(word4);
//     let word5 = word4.join('');
//     console.log(word5);
// }
//
// rot13('SERR CVMMN!"');
//
//
// function abc(num) {
//    return num * num + (num - 1) * (num - 1);
//
// };
//
// console.log(abc(3));




// function qwe(a, b, c){
// console.log(a);
// console.log(b);
// console.log(c);
//     let d = b * b - 4 * a * c;
//     let x4 = Math.sqrt(d);
//     let x1 = (-b + x4) / (2 * a);
//     let x2 = (-b - x4) / (2 * a);
//
//     console.log(d);
//     console.log(x4);
//
//
// console.log(x1);
// console.log(x2);
// console.log(x4);
//
//
//     if
// (a * x1 * x1 + b * x1 + c === 0) {
//     alert('sos')
// } else if (a * x2 * x2 + b * x2 + c === 0) {
//     alert('sos2')
// }
// else {
//     alert('qwer')
// }
// };
//
//
// qwe (2, 30, 4);

// function qwe(a, b, c) {
//
//     let d = b * b - 4 * a * c;
//
//     if (d >= 0) {
//         let x4 = Math.sqrt(d);
//         let x1 = (-b + x4) / (2 * a);
//         let x2 = (-b - x4) / (2 * a);
//
//
//         // console.log(d);
//         // console.log(x4);
//         console.log(`Первый корень ${x1.toFixed(2)}`);
//         console.log(`Второй корень ${x2.toFixed(2)}`);
//     }
//
//     else {console.log('Дескрименант меньше нуля')}
//
// };
//
// qwe (2, 30, 4);
