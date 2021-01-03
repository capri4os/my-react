import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Message from './Message.jsx';
// import Example from './Example';
import MessageList from './MessageList';
import SendMessage from './SendMessage';
import Header from './Header'
import ChatList from './ChatList'

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
                2000
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

    send = objMsg => {
        this.setState({messages: [...this.state.messages, objMsg]});
    };

    render() {
        return <MuiThemeProvider>
            <main>
                <Header />
                <ChatList />
                <MessageList messages={this.state.messages}/>
                {/* <Message text={this.state.text}/> */}
                {/* <Example /> */}
                <SendMessage send={this.send}/>
            </main> 
        </MuiThemeProvider>;
    }
}