import React from 'react';
import {Posts} from './../api/posts.js';
import PropTypes from 'prop-types';

export default class Post extends React.Component {

  render() {
    return (
        <div key={this.props.post._id} className='item'>
          <p>
             {' '}<button onClick={() => Posts.update({_id: this.props.post._id}, {$inc: {votes: 1}})}>+1</button>
             {' '}<button onClick={() => Posts.update({_id: this.props.post._id}, {$inc: {votes: -1}})}>-1</button>
             {' '}{this.props.post.content}
          </p>
          <p>
            {' '}This post has {this.props.post.votes} vote[s]
          </p>
        </div>
    )
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
};
