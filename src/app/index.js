import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
    render(){
        <h1>Hello world</h1>
    }
}

render(<App/>, document.getElementById('app'));