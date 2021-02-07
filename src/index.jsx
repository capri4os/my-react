import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';

// fetch(
//         '/api/chats.json'
// ).then(response => response.json()).then(response => console.log('response', response)).catch(err => console.log('err', err));

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);