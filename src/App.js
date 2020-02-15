import React, {Component} from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import LogInModal from './Components/LogInModal/LogInModal'


class App extends Component {
  state = {

  }


  render()
    {

      return (
        <div className="App">
        <header className="App-header">
        this is app
        <LogInModal/>
        <Link to='/madLib'>Mad Lib</Link>
        </header>
        </div>
        );
      }
        
      }
      
export default App;
