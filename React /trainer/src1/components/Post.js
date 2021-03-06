import ReactDOM from "react-dom";
import React from 'react';

import Duck from "./duck.jpg";
// import Like from "./like.svg";


const Post = (props) => {
    return (
        <div className={props.className}>
            <h1 className='post__header'>{props.header}</h1>
            <p className='post__content'>{props.children}</p>
            <div className='post__likes'>
                {/*<img src={like} className='likeImg'/>*/}
                <span>{props.likes}</span>
                <button onClick={props.clickHandler} >Like</button>

            </div>
        </div>
    )
};

// class Post extends Component {
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         return (
//             <div className={this.props.className}>
//                 <h1 className='post__header'>{this.props.header}</h1>
//                 <p className='post__content'>{this.props.children}</p>
//                 <div className='post__likes'>
//                     {/*<img src={like} className='likeImg'/>*/}
//                     <span>{this.props.likes}</span>
//                     <button onClick={this.props.clickHandler} >Like</button>
//                 </div>
//             </div>
//         )
//     }
// }


export default Post;