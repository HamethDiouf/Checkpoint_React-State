import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Hameth Diouf',
        bio: 'Passionné du science technologie et numérique.',
        imgSrc: './met.jpg',
        profession: 'Développeur',
      },
      show: true,
      time: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time + 1,
      }));
    }, 1000);
  }

  btnShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, time } = this.state;

const imgStyle={
  with: "100%",
  height: "20rem",
  borderRadius:".5rem",
}

    return (
      <div className='App'>
        <button  onClick={this.btnShow}>Click Me</button>

        {show || (
          <div>
            <h1>{fullName}</h1>
             <img src={imgSrc} alt={fullName} style={imgStyle}/>
            
            <h3>{profession}</h3>
            <p id='bio'>{bio}</p>
          </div>
        )}
        <p id='time'>Time: {time} seconds</p>
      </div>
    );
  }
}

export default App;

