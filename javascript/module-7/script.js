// let container = document.querySelector('.box');
// console.log(container);
//
// let html = container.innerHTML;
//
// let title = document.querySelector('.article-title');
// let text = title.textContent;
//
// console.log(text);
// console.log(title);


// let container = document.querySelector('.box');
// let classes = container.classList;
// console.log(classes);
//
// let picture = document.querySelector('.picture');
// console.log(picture.setAttribute('alt', 'big picture'));
// let par = document.querySelector('p');
// const heading = document.createElement('h1');
// // console.log(heading);
// heading.textContent = 'Ракета клепана';
// heading.classList.add('title');
// console.log(heading);
//
// let container = document.querySelector('.box');
// container.insertBefore(heading, par);

////////////////////   start gallery//////////////////////////////
//
// const imgUrls = ['https://source.unsplash.com/PC_lbSSxCZE/800x600','https://source.unsplash.com/lVmR1YaBGG4/800x600','https://source.unsplash.com/5KvPQc1Uklk/800x600','https://source.unsplash.com/GtYFwFrFbMA/800x600','https://source.unsplash.com/Igct8iZucFI/800x600','https://source.unsplash.com/M01DfkOqz7I/800x600','https://source.unsplash.com/MoI_cHNcSK8/800x600','https://source.unsplash.com/M0WbGFRTXqU/800x600','https://source.unsplash.com/s48nn4NtlZ4/800x600','https://source.unsplash.com/E4944K_4SvI/800x600','https://source.unsplash.com/F5Dxy9i8bxc/800x600','https://source.unsplash.com/iPum7Ket2jo/800x600'
// ];
//
// let galleryContainer = document.querySelector('.gallery');
//
// let title = document.createElement('h1');
// title.textContent = ':fire: This Gallery Is Lit :fire:';
// galleryContainer.prepend(title);
//
// let gallery = document.createElement('div');
// gallery.classList.add('gallery-grid');
// galleryContainer.append(gallery);

// let pictureContainer = document.createElement('div');
// gallery.append(pictureContainer);
//
// let image = document.createElement('img');
// image.setAttribute('src', imgUrls[0]);
// pictureContainer.append(image);
//
// let img = document.createElement('div');
// gallery.append(img);
//
// let image2 = document.createElement('img');
// image2.setAttribute('src', imgUrls[1]);
// img.setAttribute('alt', 'Picture');
// img.append(image2);
//
// let img2 = document.createElement('div');
// gallery.append(img2);
//
// let image3 = document.createElement('img');
// image3.setAttribute('src', imgUrls[2]);
// img2.setAttribute('alt', 'Picture');
// img2.append(image3);

// let newGallery = imgUrls.map(function (item) {
//     let newDiv = document.createElement('div');
//     gallery.append(newDiv);
//     let newImg = document.createElement('img');
//     newImg.setAttribute('src', item);
//     newImg.setAttribute('alt', 'Picture');
//     newDiv.append(newImg);
// });

// let frag = document.createDocumentFragment();
// for (let i =0;  i < imgUrls.length; i++){
//     let newDiv = document.createElement('div');
//     frag.append(newDiv);
//     let newImg = document.createElement('img');
//     newImg.setAttribute('src', imgUrls[i]);
//     newImg.setAttribute('alt', 'Picture');
//     newDiv.append(newImg);
// }
//
// gallery.append(frag);

// end of gallery   //////////////

// start new site

const frankiInfo = {
    content: "Swing dancer extraordinaire Frankie Manning was a leading dancer at Harlem's legendary Savoy Ballroom where, in the mid-1930s, he revolutionized the course of the lindy hop with his innovations, including the lindy air step and synchronized ensemble lindy routine. As a featured dancer and chief choreographer for the spectacular Whitey's Lindy Hoppers, he performed in numerous films (including Hellzapoppin'), and entertained on stages around the world with jazz greats Ethel Waters, Count Basie, Duke Ellington, Ella Fitzgerald, and Cab Calloway. Upon the demise of the Swing Era, Frankie took a job in the Post Office, where he worked for thirty years until his rediscovery by a new generation of swing dance enthusiasts in the mid-1980s. From then on he was in constant demand and motion, teaching, choreographing, and performing globally. He won a 1989 Tony Award for his choreography in Black and Blue, and served as a consultant for and performed in Spike Lee's Malcolm X. Frankie's activities have been chronicled in hundreds of articles (including features in GQ and People) and dozens of news programs (including a profile on ABC's 20/20). Frankie passed away in 2009, but his memory and legacy are being carried on by swing dancers around the world.",
    frankieTimeline: {
        "1914" : "Born on May 26 in Jacksonville, Florida."
        ,"1926" : "Savoy Ballroom opens at Lenox Avenue and 140th Street in Harlem."
        ,"1933" : "First ventures to Savoy Ballroom."
        ,"1934" : "Invited by Herbert \"Whitey\" White to join elite group of Savoy Lindy hoppers."
        ,"1935" : ["Introduces the first Lindy air step, over-the-back.", "Introduces \"stops\" and synchronized ensemble lindy routines."]
        ,"1936" : "Whyte's Hopping Maniacs appear in downtown reopening of the Cotton Club."
        ,"1937" : "Whitey's Lindy Hoppers appear in A Day at the Races (uncredited)."
        ,"1938" : "Whitey's Hopping Maniacs appear in Radio City Revels (uncredited)."
        ,"1939" : "Arthur White's Lindy Hoppers appear in Keep Punching."
        ,"1941" : "Congeroo Dancers appear in Hellzapoppin'."
        ,"1942" : "Whitey's Lindy Hoppers appear in Hot Chocolate (\"Cottontail\") with Duke Ellington."
        ,"1943" : "Inducted into Army. Serves in New Guinea, the Philippines, and Japan."
        ,"1947" : "FM's new group, the Congaroo Dancers, debuts at Roxy Theatre."
        ,"1948" : "Four Congaroos appear in Killer Diller."
        ,"1955" : ["Disbands the Congaroo Dancers.", "Goes to work for the U.S. Postal Service."]
        ,"1958" : "Savoy Ballroom closes."
        ,"1986" : "Begins teaching career by agreeing to work with Erin Stevens and Steven Mitchell."
        ,"1987" : "Retires from the post office."
        ,"1989" : "Wins Tony Award for Best Choreography for Black and Blue with Cholly Atkins, Henry{ LeTang, and Fayard Nicholas."
        ,"1992" : ["Serves as consultant/performer in Spike Lee's film Malcolm X.", "Serves as assistant choreographer/performer with Norma Miller in Debbie Allen's\" Stompin' at the Savoy."]
        ,"1994" : "Receives NEA Choreographers' Fellowship."
        ,"1999" : "Performs in PBS special, Swinging' with Duke, featuring the Lincoln CenterJazz Orchestra with Wynton Marsalis."
        ,"2000" : "Receives NEA National Heritage Fellowship."
        ,"2001" : "Appears in Ken Burns's documentary, Jazz."
        ,"2007" : "Frankie Manning: Ambassador of Lindy Hop is published."
        ,"2009" : "Frankie Manning passes away."
    },
    img: 'http://www.frankiemanning.com/photos/frankie-full.jpg',
    title: 'Frankie Manning',
    subTitle: 'the ambassador of swing',
    timeLine: 'Timeline',

};

//Данная инструкция создает новые елементы

function create(type, className, atr, atrValue, text, location) {
    let newNode = document.createElement(type);
    newNode.classList.add(className);
    newNode.setAttribute(atr, atrValue);
    newNode.textContent = text;
    location.append(newNode);
    return newNode;
}

let newDiv = document.querySelector('#app');
let container = create('div', 'content', null, null, null, newDiv);

let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');

btn1.addEventListener('click', function () {
    create('h1', null, 'id', 'Title', frankiInfo.title, container);
});
btn2.addEventListener('click', function () {
    create('h2', null, 'id', 'Subhead', frankiInfo.subTitle, container);
});
btn3.addEventListener('click', function () {
    create('img', null, 'id', 'headerImage', null, container);
    document.querySelector('#headerImage').setAttribute('src', frankiInfo.img);
});


// create('h1', null, 'id', 'Title', frankiInfo.title, container);
// create('h2', null, 'id', 'Subhead', frankiInfo.subTitle, container);
// create('img', null, 'id', 'headerImage', null, container);
// let img = document.querySelector('#headerImage');
// img.setAttribute('src', frankiInfo.img);
// let section = create('section', null, null, null, null, container);
// let article = create('article', null, null, null, null, section);
// create('p', null, null, null, frankiInfo.content, article);
// create('h2', null, 'id', 'Timeline', frankiInfo.timeLine, container);
// let ul = create('ul', null, null, null, null, container);
// let DocFrag = document.createDocumentFragment();
//
// for(let key in frankiInfo.frankieTimeline){
//     create('li', null, null, null, `${key}    ${frankiInfo.frankieTimeline[key]}`, DocFrag);
// }
// ul.append(DocFrag);


// // create elements

// let newContact = document.createElement('div');
// let newTitle = document.createElement('h1');
// let newTitle2 = document.createElement('h2');
// let newImg = document.createElement('img');
// let section = document.createElement('section');
// let article = document.createElement('article');
// let newPar = document.createElement('p');
// let newTitle3 = document.createElement('h2');
// let newUl = document.createElement('ul');
// let newLi = document.createElement('li');
// let dokFrag = document.createDocumentFragment();

// for(let key in frankiInfo.frankieTimeline ){
//     let newLi = document.createElement('li');
//     newLi.textContent = `${key}     ${frankiInfo.frankieTimeline[key]}`;
//     dokFrag.append(newLi);
// };


// //add classes and atr


// newContact.classList.add('content');
// newTitle.setAttribute('id', 'Title');
// newTitle2.setAttribute('id', 'Subhead');
// newImg.setAttribute('id', 'headerImage');
// newImg.setAttribute('src', frankiInfo.img);
// newTitle3.setAttribute('id', 'Timeline');



// //add text


// newTitle.textContent = frankiInfo.title;
// newTitle2.textContent = frankiInfo.subTitle;
// newPar.textContent = frankiInfo.content;
// newTitle3.textContent = frankiInfo.timeLine;



// //paste elements


// newDiv.append(newContact);
// newContact.append(newTitle);
// newContact.append(newTitle2);
// newContact.append(newImg);
// section.append(article);
// newContact.append(section);
// article.append(newPar);
// newContact.append(newTitle3);
// newContact.append(newUl);
// newUl.append(dokFrag);























 
















