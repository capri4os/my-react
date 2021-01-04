import React from 'react';
import PropTypes from 'prop-types';

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
      <ListItem primaryText="Chat 1" rightIcon={<ActionInfo />} />
      <ListItem primaryText="Chat 2" rightIcon={<ActionInfo />} />
      <ListItem primaryText="Chat 3" rightIcon={<ActionInfo />} />
      <ListItem primaryText="Chat 4" rightIcon={<ActionInfo />} />
    </List>
        </div>
    }
}