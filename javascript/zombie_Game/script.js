function Zombie(speed, life, tychka, img) {
    this.speed = speed;
    this.life = life;
    this.tychka = tychka;
    this.img = img;
}

Zombie.prototype = Object.create(Pers.prototype); //Присвоение, кто чей пездюк
Zombie.prototype.constructor = Zombie;


function Hunter(speed, life, tychka, img) {
    this.speed = speed;
    this.life = life;
    this.tychka = tychka;
    this.img = img;
}

Hunter.prototype = Object.create(Pers.prototype);  //Присвоение, кто чей пездюк
Hunter.prototype.constructor = Hunter;

function Pers() {

}


// Zombie.prototype.draw = function () {
//     let container = document.querySelector('.container');
//     container.innerHTML += `<img class="zombie__img" src=${this.img} >`
// };

Pers.prototype.draw = function () {
    let container = document.querySelector('.container');
    container.innerHTML += `<img class="zombie__img" src=${this.img} >`
};

let zombieGusGus = new Zombie(5, 100, 100, 'https://media.giphy.com/media/Be0YVQAdVdm4E/giphy.gif');

let zombieFrank = new Zombie(10, 100, 100,'https://vignette.wikia.nocookie.net/plantsvszombies/images/2/2a/Broken_zombie.gif/revision/latest?cb=20150629031104');


let hunter = new Hunter(15, 100, 100, 'http://forum.hellroom.ru/img/hero_idlerun02.gif');

zombieFrank.draw();
zombieGusGus.draw();
hunter.draw();