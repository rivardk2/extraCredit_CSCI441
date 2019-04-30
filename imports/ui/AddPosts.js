import React from 'react';
import {Posts} from './../api/posts.js';

export default class AddPosts extends React.Component {
  processFormDataFunction(event){
    event.preventDefault();
    let postContent = event.target.formInputNameAttribute.value;
    if (postContent){
      event.target.formInputNameAttribute.value = '';

      Posts.insert({
        content: postContent,
        votes: 0,
      });

      Posts.find({}, {sort: {votes: -1}});
    }
  }

  render(){
    return (
      <div>
        { }
        <form onSubmit={this.processFormDataFunction.bind(this)}>
          <input type='text' name='formInputNameAttribute' placeholder='Type here...' />
          <button>Post</button>
        </form>
      </div>
    )
  }

};
