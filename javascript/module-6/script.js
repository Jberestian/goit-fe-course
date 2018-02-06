const keyTrainer = {};        // creat pustui obj
keyTrainer.chars = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'] ;
keyTrainer.charCount = '';
keyTrainer.checkPositiveInteger = function (num)
if (num > 0 && Number.isInteg
    return true;
}       else {
    return false;
}

};
keyTrainer.setCharCount = function () {
    let chatAmount = +prompt('Enter amou
    if (keyTrainer.checkPositiveInteger(chatAmou
        this.charCount = chatAmount;
}       else{
    this.setCharCount();
}
};
keyTrainer.setCharCount();
console.log(keyTrainer);


keyTrainer.task = [];
keyTrainer.createTask = function () {                                                   // 4
    for (let i = 0; i < this.charCount; i++) {
        this.task.push(this.chars[Math.floor(Math.random()*this.chars.length)]);
    }

};
keyTrainer.setCharCount();
keyTrainer.createTask();
console.log(keyTrainer);

keyTrainer.userError = 0;
keyTrainer.starTask = function () {
    let string = this.task.join('');
    this.userImput = prompt(`Enter this string ${string}`).split('');           // 5
    console.log(string);
};

keyTrainer.checkError = function () {
    for (let i = 0; i < this.userImput.length; i++)    {
        if (this.userImput[i] === this.task[i]){
            continue;
        }            else {
            this.userError++;
        }
    }
    alert(`You make ${this.userError} mistakes`);
};
keyTrainer.run = function () {
    this.setCharCount();
    this.createTask();
    this.starTask();
    this.checkError();
}
keyTrainer.run();