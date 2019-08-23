import React from 'react';
import logo from './logo.svg';
import './App.css';

function fetchPrices(){
  fetch('http://localhost:3001/api/findAll').then((response)=> {
    if (response.status !== 201) {
      console.log('Looks like there was a problem. Status Code: ' +
        response.status);
      return;
    }

    // Examine the text in the response
    response.json().then(function(data) {
      console.log(data);
    });
  })
  .catch(error=> {
    console.log(error);
  })
}
function App() {
  fetchPrices();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
