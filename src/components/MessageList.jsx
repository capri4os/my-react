import React from 'react';
import PropTypes from 'prop-types';

import Message from './Message';

export default class MessageList extends React.Component {
    static propTypes = {
        messages: PropTypes.array
    };

    static defaultProps = {
        messages: []
    };

    render() {
        return <div>
            { this.props.messages.map((value, id) => <><Message text={value} key={`message_${id}`}/><br/></>) }
        </div>;
    }
}