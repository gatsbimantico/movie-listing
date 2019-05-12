import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  AppBody,
  AppFooter,
  AppHeader,
  AppLayout
} from 'zone-framework/layouts';

function App() {
  return (
    <AppLayout>
      <AppHeader>
        Header
      </AppHeader>
      <AppBody>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I have edited <code>src/App.js</code> and saved to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </AppBody>
      <AppFooter>
        Footer
      </AppFooter>
    </AppLayout>
  );
}

export default App;
