$('.modal').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '4%', // Starting top style attribute
        endingTop: '10%', // Ending top style attribute
        ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.

        },

    }
);


//objects

let input = document.createElement('input');
let btn = document.createElement('a');
let cloud = document.createElement('i');
let gallery = document.createElement('div');
let docFrag = document.createDocumentFragment();

//
let container = document.querySelector('.container');
let pictures = document.querySelector('#pictures')
let video = document.querySelector('#video')


//add classes
btn.classList.add('waves-effect', 'waves-light', 'btn');
btn.textContent = 'BUTTON';
cloud.classList.add('material-icons', 'left');
cloud.textContent = 'cloud';
gallery.classList.add('gallery');



//put in
container.append(input);
container.append(btn);
btn.append(cloud);
container.append(gallery);

//request
const endPoint = 'https://pixabay.com/api/?key=';
const endPointVideo = 'https://pixabay.com/api/videos/?key=';
const apiKey = '7985885-d9ba141b4ce017599a5dbc073';
const question =  function () {
    return input.value;
};


function request(quest) {
    fetch(endPoint+apiKey+`&q=${quest}&per_page=33`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let string = '';
            for (let i = 0; i < data.hits.length; i++){
                string += `<img src="${data.hits[i].webformatURL}">`
            }
            gallery.innerHTML = string;
        })
}

pictures.addEventListener('click', function () {
    request(question())
});

function requestVideo(quest) {
    fetch(endPointVideo+apiKey+`&q=${quest}&per_page=10`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let string = '';
            for (let i = 0; i < data.hits.length; i++){
                string += `<video src="${data.hits[i].videos.small.url}" autoplay></video>`
            }
            gallery.innerHTML = string;
        })
}

video.addEventListener('click', function () {
    requestVideo(question())
});


//
// fetch(endPoint+apiKey+'&category=nature&order=popular&per_page=50')
// .then(function (response) {
//
//    return response.json();
// })
//     .then(function (data) {
//         console.log(data);
//         // let img =   document.createElement('img');
//         // img.setAttribute('src', data.hits[0].webformatURL);
//         // gallery.append(img);
//         let string = '';
//         for (let i = 0; i < data.hits.length; i++){
//         //     let img = document.createElement('img');
//         //     img.setAttribute('src', data.hits[i].webformatURL);
//         //     gallery.append(img);
//             string += `<img src="${data.hits[i].webformatURL}">`
//         }
//         gallery.innerHTML = string;
//     })


let random = [1, 2, 3, 4, 5, 6 ,7 ,8 ,9, 10];
for(i)