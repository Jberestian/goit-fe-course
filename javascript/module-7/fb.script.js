var app = {
    users: [
        {
            private: {
                login: 'mangozedog',
                mail: 'mango@mail.dev',
                pass: '111',
                phone: '111-12-12'
            },
            public: {
                name: 'Mango',
                joinDate: 2017,
                location: 'Canada',
                profilePic: 'img/mango.jpg',
                friendsCount: 30,
                about: 'About Mango lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dicta laboriosam nisi odio quam qui similique velit vitae. Architecto consequatur quas sapiente suscipit. A deleniti dicta, incidunt maxime quibusdam quidem.',
                images: ['img/mango-1.jpg', 'img/mango-2.jpg', 'img/mango-3.jpg'],
                posts: ['first post', 'second post', 'third post', 'fourth post']
            }
        },

        {
            private: {
                login: 'coolguy123',
                mail: 'coolguy123@mail.dev',
                pass: '12345',
                phone: '120-00-12'
            },
            public: {
                name: 'Chelsey',
                joinDate: 2013,
                location: 'Zambia',
                profilePic: 'http://lorempixel.com/200/200/sports/5',
                friendsCount: 80,
                about: 'About Chelsey lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dicta laboriosam nisi odio quam qui similique velit vitae. Architecto consequatur quas sapiente suscipit. A deleniti dicta, incidunt maxime quibusdam quidem.',
                images: ['http://lorempixel.com/400/200/people', 'http://lorempixel.com/400/200/business', 'http://lorempixel.com/400/200/city'],
                posts: ['first post', 'second post', 'third post', 'fourth post']
            }
        }
    ],
    select: ["mangozedog", "coolguy123", "hacker"]
}


//selectors

let root = document.querySelector('#root');



//crate elements

let block = document.createElement('div');
let select = document.createElement('select');
for (let i = 0; i < app.select.length; i++ ){
    let option = document.createElement('option');
    option.setAttribute('value', app.select[i]);
    option.textContent = app.select[i];
    select.append(option);
};
let button = document.createElement('button');

//add class and atr

block.classList.add('app-ctrls');
select.classList.add('app-ctrls__select');
select.setAttribute('name', 'login');
button.classList.add('app-ctrls__btn');

//added text content

button.textContent = 'Show Profile';

//function

function getValue() {
    let s = document.querySelector('select');
    console.log(s.value);
    for (let i = 0; i < app.users.length; i++){
        if(app.users[i].private.login  === s.value) {
            console.log('yes');
            return 'true';
        }

        }
    console.log('false');
    return 'false';

}

//paste elements

block.append(select);
root.append(block);
block.append(button);

//events

button.addEventListener('click', getValue);

