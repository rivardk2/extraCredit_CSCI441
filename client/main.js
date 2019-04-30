import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Posts} from './../imports/api/posts.js';
import {Tracker} from 'meteor/tracker';
import PostApp from './../imports/ui/PostApp.js';

Meteor.startup(() => {
  Tracker.autorun(() => {
    let dbPosts = Posts.find({ },
      {sort: {votes: -1}}
    ).fetch();

    let title = 'Welcome to my extra credit project';
    let footerTitle = 'Extra credit please';
    ReactDOM.render(<PostApp passedPropTitle={title} passedPropPosts={dbPosts}/>, document.getElementById('content'));

  });

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

});
