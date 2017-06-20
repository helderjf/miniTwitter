import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor'

import NewPostForm from './newPostForm.jsx';
import PostList from './postList.jsx';
import { Twits } from '../../api/twits.js'
import AccountsUIWrapper from './accountsUIWrapper.jsx';

class App extends Component {
    render() {
        return (
            <div>
                <header>
                    <AccountsUIWrapper />
                    <br />
                    <h1>Mini Twitter</h1>
                </header>
                <NewPostForm />
                <PostList currentUser={this.props.currentUser} twits={this.props.twits} />
            </div>
        );
    }
}


export default createContainer(() => {
    Meteor.subscribe('twits');
    return {
        twits : Twits.find({}, {sort:{createdAt:-1}}).fetch(),
        currentUser: Meteor.user()
    }
}, App);