import React from 'react';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {addChat} from '../store/actions/chat';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {List, ListItem} from 'material-ui/List';
import {TextField} from 'material-ui';
import ActionInfo from 'material-ui/svg-icons/action/info';
import AddIcon from 'material-ui/svg-icons/content/add' ;

import '../styles/ChatList.css';

class ChatList extends React.Component {
    static propTypes = {
        chats: PropTypes.array,
        addChat: PropTypes.func.isRequired,
    };

    static defaultProps = {
        chats: [],
        addChat: '',
    };

    // handleChange = (event) => {
    //     this.setState ({ [event.target.name]: event.target.value });
    //     } ;
    
    // handleKeyUp = (event) => {
    //         if (event.keyCode === 13 ) { // Enter
    //         this.handleAddChat();
    //         }
    //     };

    handleAddChat = () => {
            if (this.state.input.length > 0) {
            this.props.addChat(this.state.input);
            this.setState({input: '' });
        }   
    };

    render () {
        return <div className={'chat-list'}>
            <List>
                <Link to='/chat/1'><ListItem primaryText="Chat 1" rightIcon={<ActionInfo />} /></Link>
                <Link to='/chat/2'><ListItem primaryText="Chat 2" rightIcon={<ActionInfo />} /></Link>
                <Link to='/chat/3'><ListItem primaryText="Chat 3" rightIcon={<ActionInfo />} /></Link>
                <Link to='/chat/4'><ListItem primaryText="Chat 4" rightIcon={<ActionInfo />} /></Link>

              <ListItem
              key='Add new chat'
              leftIcon={ <AddIcon /> }
              onClick={ this.handleAddChat }
              style={{ height: '60px'}}
                children= {<TextField
                    key='TextField'
                    fullWidth
                    name='input'
                    hintText='Add new chat'
                    onChange={ this.handleChange }
                    value={ this.state.input }
                    onKeyUp={ this.handleKeyUp }
            />}
        />
    </List>
        </div>
    }
}

const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats,
    });

const mapDispatchToProps = dispatch => bindActionCreators ({ addChat } ,
    dispatch) ;

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);