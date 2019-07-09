import React from 'react';
import ReactDOM from 'react-dom';
import  './style.css';
//import App from './validation.jsx';
//import App from './child.jsx';
//import App from './App.jsx';
//import App from './todoApp.jsx';
//import App from './remarkable';
import App from './ex';



ReactDOM.render(<App />, document.getElementById('root'));

/*ReactDOM.render(<App headerProp = "Header from props..." contentProp = "Content
from props..."/>, document.getElementById('root'));*/

/*function ListItem(props) {
    // Correct! There is no need to specify the key here:
    return <li>{props.item}</li>;
}

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        // Correct! Key should be specified inside the array.
        <ListItem key={number.toString()}
                  item={number} />

    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
);*/

/*///////////////////*/
function Blog(props){

     const sidebar = (
         <ul>
             {props.posts.map((post) =>
              <li key={post.id}>
                  {post.title}
              </li>
             )}
         </ul>
     );
     const content = (
             props.posts.map((post) =>
                 <div key={post.id}>
                     <h3>{post.title}</h3>
                     <p>{post.content}</p>
                 </div>
             )
     );
    return(
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    );
}

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
/*
ReactDOM.render(
 <Blog posts={posts}/>,
    document.getElementById('root')
);*/
