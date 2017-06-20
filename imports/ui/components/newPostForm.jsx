import React, { Component } from 'react';
import {Meteor} from 'meteor/meteor';

export default class NewPostForm extends Component {


    handleSubmit(event){
        event.preventDefault();
        // debugger;
        const text = this.refs.twitText.value.trim();

        Meteor.call('twits.publishTwit',text);


        this.refs.twitText.value ='';
    }



    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <span>
                <span></span>
                    <strong>What's happening?</strong>
                    <input
                        ref='twitText'
                        type='textArea'
                    />
                    <button onClick={this.handleSubmit.bind(this)}>Twitt</button>
                </span>
            </form>
        );
    }
}