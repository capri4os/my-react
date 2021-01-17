import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';

import '../styles/ChatList.css';

export default class ChatList extends React.Component {
    static propTypes = {
        chats: PropTypes.array
    };

    static defaultProps = {
        chats: []
    };

    render () {
        return <div className={'chat-list'}>
            <List>
                <Link to='/chat/1'><ListItem primaryText="Chat 1" rightIcon={<ActionInfo />} /></Link>
                <Link to='/chat/2'><ListItem primaryText="Chat 2" rightIcon={<ActionInfo />} /></Link>
                <Link to='/chat/3'><ListItem primaryText="Chat 3" rightIcon={<ActionInfo />} /></Link>
                <Link to='/chat/4'><ListItem primaryText="Chat 4" rightIcon={<ActionInfo />} /></Link>
    </List>
        </div>
    }
}