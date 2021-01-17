import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import {Provider} from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Message from './Message.jsx';
import Header from './Header'
import ChatList from './ChatList'
import MessageList from './MessageList';
import SendMessage from './SendMessage';
import Messages from './pages/Messages';
import initStore from '../store';

import '../styles/App.css';

export default class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            messages: [],
            interval: null
        };
    }

    componentDidUpdate(){
        console.log(this.state.messages.length, this.state.messages.length % 2);
        if(this.state.messages.length % 2 > 0){
            const timeout = setTimeout(
                () => {
                    this.setState({messages: [...this.state.messages, {message: "Leave me alone, I'm robo!", author: 'robot'}]});
                    this.setState({timeout});
                },
                10000
            );
        }
    }

    componentWillUnmount(){
        clearTimeout(this.state.timeout);
        this.setState({timeout: null});
    }

    render() {
        return <MuiThemeProvider>
            <main>
                <Provider store={initStore()}>
                    <BrowserRouter>
                    <Header />
                    <div className='chats'>
                        <ChatList />
                        <div className='current-chat'>
                        <Switch>
                            <Route exact path="/" component={Messages}/>
                            <Route path="/chat/:chatId" render={obj => <Messages chatId={obj.match.params.chatId}/>}/>
                        </Switch>
                        </div>
                    </div>
                    </BrowserRouter>
                </Provider>
            </main> 
        </MuiThemeProvider>;
    }
}