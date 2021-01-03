import React from 'react';
import PropTypes from 'prop-types';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';

import '../styles/ChatList.css';

export default class ChatList extends React.Component {
    static propTypes = {
        chats: PropTypes.array
    };

    static defaultProps = {
        chats: []
    };

    render () {
        return <List />
    }
}