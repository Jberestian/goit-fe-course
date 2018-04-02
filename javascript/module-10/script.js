//
// let time = setInterval(function () {
//     console.log('call');
// }, 2000);
//
// let test = document.querySelector('#test');
// test.addEventListener('click', function () {
//     clearInterval(stop);
// });
//
// // localStorage.setItem('Date', '14.02.18' );
// //
// // let date = localStorage.getItem('Date');
// // console.log(date);
// //
// // localStorage.removeItem('Date');
//
//
// let dog = {
//     name: 'Mango',
//     age:  25,
//     isLive: true
// };
//
// localStorage.setItem('Dog', JSON.stringify(dog));
//
// // localStorage.removeItem('Dog');
// //
// // let result = localStorage.getItem('Dog');
// // let converte = JSON.parse(result);
// // console.log(result);
// // console.log(converte);
//
// let stop = setInterval(function () {
//
//     let now = new Date();
//     console.log('Today',now);
//     let year = now.getFullYear();
//     console.log('Year',year);
//     let day = now.getDay();
//     console.log('day',day);
//     let month = now.getMonth();
//     console.log('month',month);
//     let second = now.getSeconds();
//     console.log('second',second);
//     let hours = now.getHours();
//     console.log('hours',hours);
//
// }, 2000);


// create timer

let number = [1,2,3,4,5,6,7,8,9,10];
console.log(number[Math.floor(Math.random() * number.length)]);

let deadline = new Date(2018,2,8,10,0,);
console.log(deadline);




// setInterval(function () {
//     let dateNow = new Date();
//     console.log(dateNow);
//
//     let diff = deadline - dateNow;
//     console.log(diff);
//
//     let sec = Math.floor(diff / 1000);
//     console.log(sec);
//
//     let secLeft = sec % 60;
//     console.log('sec',secLeft);
//
//     let min = Math.floor( sec/ 60);
//     console.log(min);
//
//     let minLeft = min % 60;
//     console.log('min',minLeft);
//
//     let hour = Math.floor(min / 60);
//     console.log(hour);
//
//     let hourLeft = hour % 24;
//     console.log('hour',hourLeft);
//
//     let day = Math.floor(hour / 24);
//     console.log('day',day);
//
//
//     let days = document.querySelector('.days');
//     days.textContent = (day < 10) ? '0' + day : day;
//
//     let hours = document.querySelector('.hours');
//     hours.textContent = (hourLeft < 10) ? '0' + hourLeft : hourLeft;
//
//     let minutes = document.querySelector('.minutes');
//     minutes.textContent = (minLeft < 10) ? '0' + minLeft : minLeft;
//
//     let seconds = document.querySelector('.seconds');
//     seconds.textContent = (secLeft < 10) ? '0' + secLeft : secLeft;
// }, 1000);



function timer() {
    let dateNow = new Date();
    let diff = deadline - dateNow;
    let sec = Math.floor(diff / 1000);
    let min = Math.floor( sec/ 60);
    let hour = Math.floor(min / 60);
    let day = Math.floor(hour / 24);
    sec = sec % 60;
    min = min % 60;
    hour = hour % 24;

    document.querySelector('.seconds').textContent = (sec < 10) ? '0' + sec :sec;
    document.querySelector('.minutes').textContent = (min < 10) ? '0' + min :min;
    document.querySelector('.hours').textContent = (hour < 10) ? '0' + hour :hour;
    document.querySelector('.days').textContent = (day < 10) ? '0' + day :day;

}
setInterval(timer, 1000);




// let test new Promise ((resolve, reject) => {
//     setTimeout(() =>{
//         resolve('success!');
//     }, 2000);
// });

const promice2 = new Promise(function (resolve,reject) {
    setTimeout(function () {
        resolve('test2')
    },1000)
});

promice2.then(function (data) {
    console.log(data);
    return data;
})
    .then(function (str) {
        return str.split('');
    })
    .then(function (arr) {
        return arr.reverse().join('');
    })
    .then(function (result) {
        console.log(result);
    });



























