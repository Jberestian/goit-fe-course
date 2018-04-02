 // let fruit = {
    // isGood: true
// };
// let apple ={
    // isGreen: true
// };

// apple.__proto__=fruit;

// console.log(apple.isGreen);
// console.log(apple.isGreen);


// function Human(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
    // this.fullName = function() {
    //     return this.firstName + " " + this.lastName;
    // }
// }


// function Human(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
//
//
// Human.prototype.fullName = function () {
//     return `${this.firstName} ${this.lastName}`;};
//
//
// let person1 = new Human("Jack", "Shepard");
// let person2 = new Human("Emgir", "Var Emreis");
//
// console.log(person1);
// console.log(person2);
// console.log(person1.fullName());
// console.log(person2.fullName());
//
//
// person2.fullName = function () {
//     return `${this.lastName} ${this.firstName}`
// };
// console.log(person2.fullName());
// console.log(person1.fullName());



 // function Human(name) {
 //     this.name = name;
 //     this.friends = [];
 // }
 //
 //
 // Human.prototype.friends = ['Ann','Jack'];
 //
 // Human.prototype.showName = function () {
 //     alert(this.name);
 // };
 //
 // let person1 = new Human('Jon');
 // let peron2 = new Human('Mick');
 //
 // person1.friends.push('Pizduk');

 // console.log(person1.friends);

 // console.log(peron2.friends);




 // function Animal(name) {
 //     this.name = name;
 //     this.speed = 0;
 // }
 //
 // Animal.prototype.run = function(speed) {
 //     this.speed += speed;
 //     alert( this.name + ' бежит, скорость ' + this.speed );
 // };
 //
 // Animal.prototype.stop = function() {
 //     this.speed = 0;
 //     alert( this.name + ' стоит' );
 // };
 //
 // function Rabbit(name, age) {
 //     this.name = name;
 //     this.speed = 0;
 //     this.age = age;
 // }
 // Rabbit.prototype = Object.create(Animal.prototype);
 // Rabbit.prototype.constructor = Rabbit;
 //
 // Rabbit.prototype.jump = function() {
 //     this.speed++;
 //     alert( this.name + ' прыгает' );
 // };
 //
 // Rabbit.prototype.showAge = function () {
 //     if (this.age > 10) {
 //         alert('Жостке мясо')
 //     } else {
 //         alert('Можна їсти');
 //         this.jump();
 //     }
 // };
 //
 // // Rabbit.prototype.run2 = function() {
 // //     вызвать метод родителя, передав ему текущие аргументы
 // // Animal.prototype.run.apply(this, arguments);
 // // this.jump();
 // // };
 //
 // var rabbit1 = new Rabbit('Кроль',10);
 // var rabbit2 = new Rabbit('Осел',12);
 // var rabbit3 = new Rabbit('Самец',8);
 //
 // // rabbit.run(5);
 // // rabbit.jump();
 // // rabbit.run2(10);
 // rabbit1.showAge();
 // rabbit2.showAge();
 // rabbit3.showAge();



// CAR GAME//

function Car(carX, carY, speed, img,) {
    this.carX = carX;
    this.carY = carY;
    this.speed = speed;
    this.img = img;
}

let BMW = new Car(0, 50, 80, 'img/BMW.png');
let Audi = new Car(0, 200, 2, 'img/Audi.png');
let Chevrolet = new Car(0, 300, 30, 'img/Chevrolet.png');

 console.log(BMW);
 console.log(Audi);
 console.log(Chevrolet);

Car.prototype.drowCar = function(){
    let container = document.querySelector('.container')
    container.innerHTML += `<img style="top: ${this.carY}px; left: ${this.carX}px" src="${this.img}" class="carss">`;
    let img = document.querySelector('img');
    // img.style.top = `${this.carY}px`;
    // img.style.left = `${this.carX}px`;
    console.log(img);
};

Car.prototype.moveCarRight = function () {
  this.carX += this.speed;
  // this.drowCar();
  let imgSrc = document.querySelector(`[src="${this.img}"]`);
  imgSrc.style.left = this.carX + 'px';

};

 Car.prototype.moveCarUp = function () {
     this.carY -= this.speed;
     // this.drowCar();
     let imgSrc = document.querySelector(`[src="${this.img}"]`);
     imgSrc.style.top = this.carY + 'px';
 };

 Car.prototype.moveCarLeft = function () {
     this.carX -= this.speed;
     // this.drowCar();
     let imgSrc = document.querySelector(`[src="${this.img}"]`);
     imgSrc.style.left = this.carX + 'px';

 };

 Car.prototype.moveCarDown = function () {
     this.carY += this.speed;
     // this.drowCar();
     let imgSrc = document.querySelector(`[src="${this.img}"]`);
     imgSrc.style.top = this.carY + 'px';

 };

function interval() {
    setInterval(function () {
        BMW.moveCarRight();
        Audi.moveCarRight();
        Chevrolet.moveCarRight();
    },1000/60)
}
// interval();

window.addEventListener("keypress", function () {
        if(event.keyCode === 100) {
            BMW.moveCarRight()
        }else if(event.keyCode === 97){
            BMW.moveCarLeft()
         }else if(event.keyCode === 119){
            BMW.moveCarUp()
        }else if(event.keyCode === 115){
            BMW.moveCarDown()
    }
});

BMW.drowCar();
Audi.drowCar();
Chevrolet.drowCar();
BMW.moveCarRight();
Audi.moveCarRight();
Chevrolet.moveCarRight();





window.addEventListener('keypress',function () {
     console.log(event);
 });




























