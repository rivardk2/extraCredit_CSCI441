import React from 'react';
import PropTypes from 'prop-types';
import TitleBar from './TitleBar.js';
import AddPosts from './AddPosts.js';
import PostList from './PostList.js';


export default class PostApp extends React.Component {
  render(){
   return (
     <div>
        { }
        <TitleBar title={this.props.passedPropTitle}/>
        <div className="wrapper">
          { }
          <AddPosts />
          { }
          <PostList  posts={this.props.passedPropPosts}/>
        </div>
     </div>

    );
  }
};

PostApp.propTypes = {
  passedPropPosts: PropTypes.array.isRequired
};
