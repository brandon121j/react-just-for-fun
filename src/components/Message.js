import React, { Component } from 'react';

export default class Message extends Component {
    render() {
        console.log(this.props);
    
        return (
            <div>
                Hello {this.props.name}, {this.props.message}
                <br/>
                <MessageChild num={this.props.num}/>
            </div>
        )
    }
};

export default Message;