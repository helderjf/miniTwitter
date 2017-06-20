import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Post from './post.jsx';



export default class PostList extends Component {


    renderTasks() {
        return (
            this.props.twits.map((twit) => {
                return <Post key={twit._id} currentUser={this.props.currentUser} twit={twit} />
            })
        );
    }

    render() {
        return (
            <div>
                <br />
                <h2>What's Happening...</h2>
                <ul>
                    {this.renderTasks()}
                </ul>
            </div>
        );
    }
}



function mapStateToProps(state){
    return (
        {
            twits: state.twits
        }
        );
}


function matchDispatchToProps(dispatch){
    return (bindActionCreators({},dispatch));
}


// export default connect(mapStateToProps, matchDispatchToProps)(PostList);


