import React, { Component } from 'react';
import './../../bootstrap.min.css';
import './../../App.css';

class Button extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {press , text} = this.props;
    return (
      <div className="App">
        <button className="btn btn-primary mt-2 button" onClick={press}>{text}</button>
      </div>
    );
  }
}

export default Button;
