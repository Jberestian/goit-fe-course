// let a = ["https://image.freepik.com/free-photo/cute-cat-picture_1122-449.jpg", "http://kb4images.com/images/picture/37509081-picture.jpg", "http://i.telegraph.co.uk/multimedia/archive/03597/POTD_chick_3597497k.jpg",
//     "http://cdn.newsapi.com.au/image/v1/9fdbf585d17c95f7a31ccacdb6466af9"];
//
// let container = document.querySelector('.box');
// console.log(container);
// let str = "";
// for (let i=0; i<a.length; i++){
//     str +=`<img src=${a[i]} class="gallery_img">`;
// }
// container.innerHTML = str;
//
// let container2 = document.querySelector('.box2');
// let str2 ="";
// for (let i=0; i<a.length; i++){
//     str2 +=`<img src=${a[i]} class="gallery_img_second">`
// }
//
// container2.innerHTML = str2;

// function add (a,b) {
//     return a+b
// }
//
// add(5,10);
// console.log(add(-22,40));
// console.log(add(5,10)+22+1);
//
// function minus(a,b) {
//     return a-b
// }
// let substr = minus (1000,356)
// console.log(substr);

// const outerString = 'меня видно внутри и снаружи';
// function showMessage() {
//     const innerString = 'меня видно внутри';
//     console.log(outerString);
//     console.log(innerString);
// console.log(thirdString);
//     function show() {
//         const thirdString = 'я тут';
//         console.log('show ',outerString);
//         console.log('show ',innerString);
//         console.log('show ',thirdString);
//     }
//     show();
// }
// showMessage();
// console.log(outerString);
// console.log(innerString);

// function add(a = 5, b = 10) {
//     return a + b;
// }
//
// let res1 = add();
// let res2 = add(100, 200);
//
// console.log(res1);
// console.log(res2);
//
// function add(a,b) {
//     return a + b;
// }
//
// const add2 = (x, y) => {
//     return x + y
// };
//
// const add3 = (x, y) => x + y;
//
// console.log(add(5, 10));
// console.log(add2(5,20));
// console.log(add3(22,33));

// function add(a,b) {
//     console.log(arguments);
//     let arr = Array.from(arguments);
//     console.log(arr);
//     return a + b;
// }
// add (2,3,4);
// add (5,6);


// let arr = [0, 2, 4];
// let arr2 = [];
// for (let i = 0; i < arr.length; i++){
//     arr2.push(arr[i] + 2);
// }
// console.log(arr2);


//map!!!!!!!!!!!!! ВОзвращает массив

// let arr2 = arr.map(function (item) {
//     return item + 2;                    ///ES5///
// });
//
// console.log(arr2);

// let arr3 = arr.map(item=> item + 3);      ///ES6///
// console.log(arr3);

//
// const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];


// let helloPeople = people.map( function (item) {
//    return `Hello ${item}`;
// }) ;
//
// console.log(helloPeople);

// let helloPeople = people.map(item => `Hello ${item}`);
// console.log(helloPeople);

// let helloPeple = people.map((item) =>{
//     return 'Hello ' + item;
// });
//
// console.log(helloPeple);

// const numbers = [1,2,6,9,12];

// let numbers2 = numbers.map(function (num, index) {
//     return num + index;
// });
//
// console.log(numbers2);

// let numbers2 = numbers.map((num, index) => {return num + index});
// console.log(numbers2);

// let numbers5 = numbers.map((num, index) =>{
//     return num + index;
// });
// console.log(numbers5);


// const numbers4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let even = numbers4.filter(function (item) {
//     return  item % 2 ===0;
// });
//
// console.log(even);
//
// let add = numbers4.filter(item => item % 2 !==0);
// console.log(add);


// const login  = ['Einstein', 'Newton', 'Galilei', 'Copernicus'];
//
// let findLogin = login.find(function (item) {
//     return item === 'Newton'
// });
//
// console.log(findLogin);
//
// let newtonfind = login.find(item => item === 'Newton1');
// console.log(newtonfind);


// const hoursWorkPeerWeeek = [9, 8, 8, 8, 10, 5];
//
// let perWeek = hoursWorkPeerWeeek.reduce((acum, next) => acum + next);
// console.log(perWeek);

//
// let price = [15000, 10000, 8000, 9000, 32000, 5000, 10000, 172000];
//
// let priceUp = price.reduce((acum, next) => acum + next);
//
// console.log(priceUp/27,8);


// const money = [100, 500, 300, 250];
// let go = money.every(item => item >=100);
// console.log(go);

// let money2 = [100, 500, 300, 250];
// const go2 = money2.some(item => item >=600);
// console.log(go2);

// let money3 = [4, 2, 5, 1, 3];
// money3.sort(function (a, b) {
//     return a > b ? 1 : -1;
// });
// console.log(money3);


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// let result = arr.filter(item => item % 2 ===0).map (item => item *item).reduce((acum, item)=> acum + item);
// console.log(result);
//
// let a = function (a) {
//     return a - b / c;
// }

// let week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
//
// // let day = function day (a) {
// //     return week [a - 1];
// // };
// // console.log(day (6));
//
// let day = (item => week (item - 1));
// console.log(day(2));


// function getDigitsSum(a) {
//     let b = a + '';
//     let c = b.split('');
//     let d = c.map(function (item) {
//         return + item
//     })
//     let z = d.reduce(function (acum, item) {
//         return acum + item;
//     })
//     return z;
// }
//
//
// console.log(getDigitsSum(2018));

// 1)Створити масів зі всіма роками від 1-2018 включно;
// 2)фільтруємо створений масив за допомогою ф-ї getDigitsSum;
//
// let container =[];
// for (let i = 1; i <2019; i++){
//     container.push(i);
// }
// let filtered = container.filter(function (item) {
//     return getDigitsSum(item) === 13;
// });
// console.log(filtered);

//

// const clients = ["mary", "ANN", "BoB"];
// const clientsArr = clients.map(function (item) {
//     return item[0].toUpperCase() + item.slice(1).toLowerCase();
//
// });
// console.log(clientsArr);


// let mass = [2, 3, 4, 5];
// function findEvery(massive,number) {
//     return massive.every(function (massiveelement) {
//         return massiveelement >= number;
//     });
// }
//     console.log(findEvery(mass,1));

// let mass = [123, 233, 443];
// function multiplyBy(massive, number) {
//     return massive.map(function (massiveElement) {
//         return massiveElement * number;
//     })
// };
// console.log(multiplyBy(mass, 16));

// function rgb(red, green, blue) {
//     return `rgb(${red}, ${green}, ${blue});`
// };
// console.log(rgb(23, 255, 34));

// var arr = [5, 6, 7, 8, 9];
// let mass = arr.map(function (item) {
//     return item * item;
// });
//
// console.log(mass);

// var arr = [5, 6, -7, 8, 9];
// let result = arr.every(function (item) {
//     return item >=0;
// });
//
// console.log(result);








