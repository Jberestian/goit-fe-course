let search = 'http://localhost:3000/users/';
// let del = '/${id}';

function getUsers() {
    fetch(search)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })

}
getUsers();

let word = /^[a-zA-Z]{2,}$/;
let num = /^[0-9]+/;

let name = document.querySelector('#name');
let score = document.querySelector('#score');
let btn = document.querySelector('#btn');

btn.addEventListener('click', function () {
    if(num.test(score.value)&&(word.test(name.value))){
        console.log('ok');
        addUsers({
            name: name.value,
            score: score.value
        })
    } else if ((num.test(score.value)&&(word.test(name.value)))===false){
        console.log('go home');
    }
    else if (num.test(score.value) === false){
        console.log('invalide score');
    } else if (word.test(name.value) === false){
        console.log('invalide name');
    }

    event.preventDefault();
    console.log(num.test(score.value));
    console.log(word.test(name.value));
});



function addUsers(data) {
    fetch(search, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

let id2 = document.querySelector('#delet');
let btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', function () {
dell();
});

function dell(del) {
    fetch(search+`${id2.value}`,{
        method: 'Delete'
    })
}
