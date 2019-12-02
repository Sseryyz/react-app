import React from 'react';
import logo from './logo.svg';
import './App.css';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>
  }
  return <h1>Hello, stranger</h1>
}

const user1 = {
  firstName: "Mar'ia",
  lastName: "Morevna"
};

const user2 = {
  firstName: "Vaslisa",
  lastName: "Maeva"
};

const date = (<div>
  <h1>Heil, mir!</h1>
  <h2>It is {new Date().toLocaleTimeString()}.</h2>
</div>);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Content"> Content </div>

        {getGreeting(user1)}

        {date}

        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
  );
}

export default App;
