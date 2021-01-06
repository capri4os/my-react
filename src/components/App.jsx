import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Message from './Message.jsx';
// import Example from './Example';
import Header from './Header'
import ChatList from './ChatList'
import MessageList from './MessageList';
import SendMessage from './SendMessage';
import Messages from './pages/Messages';

import '../styles/App.css';

export default class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            messages: [],
            interval: null
        };
    }

    // componentWillMount (){
    //     console.log('componentWillMount');
    // }

    // componentDidMount(){
    //     console.log('componentDidMount');
    // }

    componentDidUpdate(){
        // console.log('componentDidUpdate');
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
        // console.log('componentWillUnmount');
        clearTimeout(this.state.timeout);
        // clearInterval(this.state.interval);
        this.setState({timeout: null});
        // this.setState({interval: null});
    }

    render() {
        return <MuiThemeProvider>
            <main>
                <BrowserRouter>
                <Header />
                <div className='chats'><ChatList />
                <div className='current-chat'>
                {/* <MessageList messages={this.state.messages}/> */}
                {/* <Message text={this.state.text}/> */}
                {/* <Example /> */}
                {/* <SendMessage send={this.send}/> */}
                </div>
                </div>
                <nav>
                    <Link to='/chat/1'>Чат 1 </Link>
                    <Link to='/chat/2'>Чат 2 </Link>
                </nav>
                    <Switch>
                        <Route exact path="/" component={Messages}/>
                        <Route path="/chat/:chatId" render={obj => <Messages chatId={obj.match.params.chatId}/>}/>
                        {/* <Route path="/chat/2"><Messages chatId={2}/></Route> */}
                    </Switch>
                </BrowserRouter>
            </main> 
        </MuiThemeProvider>;
    }
}