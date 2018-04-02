import React, { Component } from 'react';
import Stupid from "../components/Stupid"


export default class Smart extends Component {
    state = {
        bitch: [{
            name: 'Billy',
            boobiesSize: '2',
            age: '17',
            image: 'https://i.scdn.co/image/2dbea135d586526a94f1eedb115d372127957d48'
        },
            {
                name: 'Jackie',
                boobiesSize: '3',
                age: '18',
                image: 'https://i.imgur.com/K5sYOXP.jpg'
            },
            {
                name: 'Jessy',
                boobiesSize: '2',
                age: '22',
                image: 'https://i.ytimg.com/vi/ldLomIOV6F8/hqdefault.jpg'
            },
            {
                name: 'Jeysonia',
                boobiesSize: '1',
                age: '26',
                image: 'http://memeshappen.com/media/created/2017/09/when-you-dont-show-me-your-boobies.jpg'
            },
            {
                name: 'Jlo',
                boobiesSize: '5',
                age: '33',
                image: 'http://s.quickmeme.com/img/62/62f6a261f71d0859705e6d1449e01d97c45a28df5a1056afa9412859eacd841c.jpg'
            }

        ]

    };


    render() {
        return (
            <div>
                {this.state.bitch.map(bitch => {
                    return (
                        <Stupid name={bitch.name}
                                boobiesSize={bitch.boobiesSize}
                                age={bitch.age}
                                image={bitch.image}
                        />
                    )
                })}

            </div>
        )
    }
}






