import React from 'react';
import PropTypes from 'prop-types';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import '../styles/Header.css';

export default class Header extends React.Component {
    static propTypes = {
        heading: PropTypes.string
    };

    static defaultProps = {
        heading: '_TextToMe_'
    };

    render () {
        return <header className={'header'}>
    <h1 className='header-heading'>{this.props.heading}</h1>
        </header>
    }
}