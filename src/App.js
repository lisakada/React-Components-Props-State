import './App.css';
import Student from './components/Student';
import Toggle from './components/Toggle';
import Button from './components/Button';
import { Component } from 'react';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      students: [{
        name: 'Bob Ross',
        img: 'https://media.giphy.com/media/rYEAkYihZsyWs/giphy.gif'
      },
      {
        name: 'Mr. Rogers',
        img: 'https://media.giphy.com/media/x0npYExCGOZeo/giphy.gif'
      },
      {
        name: 'Carrie Fisher',
        img: 'https://media.giphy.com/media/CXU8axmXoPHUY/giphy.gif'
      }
    ],

    pickFromAll: true,
    pickedStudent: null
    }
  }

  pickRandomStudent = () => {
    this.setState(() => ({
      pickedStudent: this.state.students[Math.floor(Math.random() * this.state.students.length)],
    }))
  }

  render() {
    return (
      <div className="App">
        <Student student={this.state.pickedStudent} />
        <button onClick={this.pickRandomStudent}>Pick Student</button>
        <Toggle />
      </div>
    );
  }
}

export default App;
