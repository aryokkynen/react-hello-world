import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.inputChanged = this.inputChanged.bind(this);
        this.nameOnChange = this.nameOnChange.bind(this);
        this.state = { nameField: '', name: 'Paavo', count: 0 };
    }

    inputChanged(event) {
        this.setState ({
            count: this.state.count+1
        });
    }

    nameOnChange(event) {
        this.setState({
            nameField: event.target.value
        });
    }

render() {
    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo" /> 
            <br/>
            Task 1: Hello {this.state.name}            
            <hr/>

            Task 2: Hello {this.state.nameField} <br/>
            <input type="text" value={this.state.nameField} onChange={this.nameOnChange} />          
            <hr/>
           
            Task 3: Button pressed {this.state.count} times
            <br/>
            <button onClick={this.inputChanged}>Touch me</button>

        </div>
        );
    }
}

export default App;
