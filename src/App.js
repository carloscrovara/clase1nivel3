import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const agent = require('superagent-promise')(require('superagent'), Promise);

class App extends Component {
  state = {
    posts: [],
  }
  handleClick = () => {
  	agent
  		.get('http://localhost:3000/api.json')
  		.then((res) => {
         const body = res.body
         this.setState({
            posts:body.items
         })
    }) 
 } 		
  render() {
    const titles = this.state.posts.map((post) => <Post key={post.id} post={post} />) 
    return (
      <div className="App">
        <button onClick={this.handleClick}>
          Boton!
        </button>
        <div>
          {titles}
        </div>
      </div>
    );
  }
}
  const Post = ({post}) => (
    <div>
      <img src={post.owner.avatar} alt=""/>
      <h1>{post.title}</h1> 
    </div>
  )


export default App;