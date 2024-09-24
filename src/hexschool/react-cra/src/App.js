import logo from './assets/logo.svg';
import './assets/App.css';
import Input from './components/Input';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './assets/all.scss'

function App() {
  const [text, setText] = useState('')
  useEffect(() => {
    (async () => {
      const result = await axios.get('https://randomuser.me/api/')
      console.log(result)
    })()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {text}
        <Input text={text} handleChang={(e) => { setText(e.target.value) }} ></Input>

        <button type="button" className="btn btn-primary">Primary</button>
        <button type="button" className="btn btn-secondary">Secondary</button>
        <button type="button" className="btn btn-success">Success</button>
        <button type="button" className="btn btn-danger">Danger</button>
        <button type="button" className="btn btn-warning">Warning</button>
        <button type="button" className="btn btn-info">Info</button>
        <button type="button" className="btn btn-light">Light</button>
        <button type="button" className="btn btn-dark">Dark</button>

        <button type="button" className="btn btn-link">Link</button>
      </header>
    </div>
  );
}

export default App;
