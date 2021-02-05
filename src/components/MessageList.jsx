import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators} from 'redux';
import connect from 'react-redux/es/connect/connect';

import Message from './Message';

import '../styles/MessageList.css';

class MessageList extends React.Component {
    static propTypes = {
        messages: PropTypes.array
    };

    static defaultProps = {
        messages: []
    };

    render() {
        return <div className={'messages'}>
            { this.props.messages.map(({message, author}, id) => <><Message message={message} author={author} key={`message_${id}`}/><br/></>) }
        </div>;
    }
}

const mapStateToProps = ({ chatReducer }) => ({
    chats : chatReducer.chats,
    }) ;

const mapDispatchToProps = dispatch => bindActionCreators ({}, dispatch);

export default connect(mapStateToProps)(MessageList);
