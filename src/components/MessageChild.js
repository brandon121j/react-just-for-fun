import React, { Component } from 'react';

export default class MessageChild extends Component {
    render() {
        return (
            <div>
                My favorite number is #{this.props.num}
            </div>
        )
    }
};

export default MessageChild;