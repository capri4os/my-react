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
            // interval: null
        };
    }

    componentDidMount(){
        // console.log('componentDidMount');
        // const timeout = setTimeout(
        //     () => {
        //         this.setState({text: this.state.text + ' Updated'});
        //     },
        //     20000
        // );
        // const interval = setInterval(
        //     () => {
        //         this.setState({messages: [...this.state.messages, 'How are you?']});
        //         setTimeout(
        //             () => this.setState({messages: [...this.state.messages, 'I do not answer you. I am robot']}),
        //             10000
        //         );
        //     },
        //     20000
        // );
        // this.setState({timeout});
        // this.setState({interval});
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
        if (this.state.messages.length % 2 === 1) {
            setTimeout( () => 
            this.setState(
                {messages: [...this.state.messages, "Leave me alone, I'm robo!"]}
            ), 1000
        )
        }
    }

    componentWillUnmount(){
        // clearTimeout(this.state.timeout);
        // clearInterval(this.state.interval);
        // this.setState({timeout: null});
        // this.setState({interval: null});
    }

    render() {
        console.log('render');
        return <main>
            <MessageList messages={this.state.messages}/>
            <Message text={this.state.text}/>
            {/* <Example /> */}
        </main>;
    }
}