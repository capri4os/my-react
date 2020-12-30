import React from 'react';

import Message from './Message.jsx';
// import Example from './Example';
import MessageList from './MessageList';

export default class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            // text: 'Some text from state',
            // timeout: null,
            messages: ['Hello!', 'How are you?', "I'm fine."],
            interval: null
        };
    }
    // { 'author': 'Me', 'message': Hello!' },
    // { 'author': 'Me', 'message': 'How are you!' },
    // { 'author': 'Me', 'message': "I'm fine." }

    componentWillMount (){
        console.log('componentWillMount');
    }

    componentDidMount(){
        console.log('componentDidMount');
        // const timeout = setTimeout(
        //     () => {
        //         this.setState({text: this.state.text + ' Updated'});
        //     },
        //     20000
        // );
        const interval = setInterval(
            () => {
                this.setState({messages: [...this.state.messages, 'How are you?']});
                setTimeout(
                    () => this.setState({messages: [...this.state.messages, "Leave me alone, I'm robo!"]}),
                    3000
                );
            },
            6000
        );
        // this.setState({timeout});
        this.setState({interval});
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
        // if (this.state.messages.length % 2 === 1) {
        //     setTimeout( () => 
        //     this.setState(
        //         {messages: [...this.state.messages, "Leave me alone, I'm robo!"]}
        //     ), 1000
        // )
        // }
        // const interval = setInterval(
        //     () => {
        //         this.setState({messages: [...this.state.messages, 'How are you?']});
        //         setTimeout(
        //             () => this.setState({messages: [...this.state.messages, 'I do not answer you. I am robot']}),
        //             1000
        //         );
        //     },
        //     2000
        // );
        // this.setState({interval});
        // this.setState({timeout});
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
        // clearTimeout(this.state.timeout);
        clearInterval(this.state.interval);
        // this.setState({timeout: null});
        this.setState({interval: null});
    }

    handleClick = () => {
        this.setState({messages: [...this.state.messages, 'And so on']});
    };

    render() {
        console.log('render');
        return <main>
            <MessageList messages={this.state.messages}/>
            <Message text={this.state.text}/>
            {/* <Example /> */}
            <button onClick={ this.handleClick }>Send message</button>
        </main>;
    }
}