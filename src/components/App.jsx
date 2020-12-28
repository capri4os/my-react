import React from 'react';

import Message from './Message.jsx';
import Example from './Example';
import MessageList from './MessageList';

export default class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            text: 'Some text from state',
            timeout: null,
            messages: ['Hello!', 'Hello 2!', 'How are you?'],
            interval: null
        };
    }

    componentDidMount(){
        console.log('componentDidMount');
        const timeout = setTimeout(
            () => {
                this.setState({text: this.state.text + ' Updated'});
            },
            2000
        );
        const interval = setInterval(
            () => {
                this.setState({messages: [...this.state.messages, 'How are you?']});
                setTimeout(
                    () => this.setState({messages: [...this.state.messages, 'I do not answer you. I am robot']}),
                    1000
                );
            },
            2000
        );
        this.setState({timeout});
        this.setState({interval});
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
    }

    componentWillUnmount(){
        clearTimeout(this.state.timeout);
        clearInterval(this.state.interval);
        this.setState({timeout: null});
        this.setState({interval: null});
    }

    render() {
        console.log('render');
        return <main>
            <MessageList messages={this.state.messages}/>
            <Message text={this.state.text}/>
            <Example />
        </main>;
    }
}