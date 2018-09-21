import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';
import Button from './Components/Button/Button';
import on_bulb from './Assets/Images/on_bulb.PNG';
import off_bulb from './Assets/Images/off_bulb.jpg';
import break_bulb from './Assets/Images/broken_bulb.jpg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      show: false,
      break: false
    })

    this.onBulb = this.onBulb.bind(this);
    this.offBulb = this.offBulb.bind(this);
    this.breakBulb = this.breakBulb.bind(this);
  }

  onBulb() {
    this.setState({
      show: true,
      breaks: false
    })
  }

  offBulb() {
    this.setState({
      show: false,
      breaks: false
    })
  }

  breakBulb() {
    this.setState({
      show: false,
      breaks: true
    })
  }

  render() {
    const { show, breaks } = this.state;
    return (
      <div className="App">

        {!show && !breaks && <img src={off_bulb} width='300px' height='400px;'/>}
        {show && !breaks && <img src={on_bulb} width='300px' height='400px;'/>}
        {breaks && !show && <img src={break_bulb} width='280px' height='400px;'/>}

        {/* {!show && !breaks && <h1>OFF</h1>}
        {show && !breaks && <h1>ON</h1>}
        {breaks && !show && <h1>BREAK</h1>} */}

        {/* {!show && <img src={off_bulb} width='200px' height='400px;'/>}
        {show && <img src={on_bulb} width='200px' height='400px;'/>}
        {breaks && <img src={break_bulb} width='200px' height='400px;'/>} */}

        <Button text="ON" press={this.onBulb}/>
        <Button text="OFF" press={this.offBulb}/>
        <Button text="BREAK" press={this.breakBulb}/>

        
      </div>
    );
  }
}

export default App;
