import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import Livestamp from 'react-livestamp';
import moment from 'moment';
import AutoupdateTime from 'react-autoupdate-time';




export default class Post extends Component {


    like() {
        Meteor.call('twits.likeTwit', this.props.twit._id);
    }

    delete() {
        Meteor.call('twits.deleteTwit', this.props.twit._id);
    }

    render() {
        let likeCount = 0;
        if (this.props.twit.likes) {
            likeCount = this.props.twit.likes.length;
        }
        let user = this.props.currentUser._id;
        return (
            <li>
                {this.props.twit.username} - <AutoupdateTime value={this.props.twit.createdAt} interval = '500'/>
                <br />
                <span><span className='twitText'>{this.props.twit.text}</span> - {likeCount} likes</span>
                <button onClick={this.like.bind(this)}>Like</button>
                {user == this.props.twit.user ?
                    <button className='delete' onClick={this.delete.bind(this)}>Delete</button>
                    : ''
                }
            </li>
        );
    }
}