import React from 'react';
import logo from './logo.svg';
import './App.css';

const messages = ['React', 'Re: React', 'Re:Re: React'];

const numbers = [1, 2, 3, 4, 5];

const user1 = {
  firstName: "firstName",
  lastName: "lastName"
}

// const todoItems = todos.map((todo) =>
//   <li key={todo.id}>
//     {todo.text}
//   </li>
// );

const posts = [
  {id: 1, title: 'Привет, мир', content: 'Добро пожаловать в документацию React!'},
  {id: 2, title: 'Установка', content: 'React можно установить из npm.'}
];

function Blog(props) {
  const sidebar = (
      <ul>
        {props.posts.map((post) =>
            <li key={post.id}>
              {post.title}
            </li>
        )}
      </ul>
  );
  const content = props.posts.map((post) =>
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
  );
  return (
      <div>
        {sidebar}
        <hr />
        {content}
      </div>
  );
}

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>
  }
  return <h1>Hello, stranger</h1>
}

function UserGreeting(props) {
  return <h1>Welcome back</h1>
}

function GuestGreeting(props) {
  return <h1>Enter, please</h1>
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />
}

function LoginButton(props) {
  return (
      <button onClick={props.onClick}>
        Login
      </button>
  );
}

function LogoutButton(props) {
  return (
      <button onClick={props.onClick}>
        Logout
      </button>
  );
}

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
      <div>
        <h1>Здравствуйте!</h1>
        {unreadMessages.length > 0 &&
        <h2>
          У вас {unreadMessages.length} непрочитанных сообщений.
        </h2>
        }
      </div>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  return (
      <ul>
        {numbers.map((number) =>
            <ListItem key={number.toString()}
                      value={number} />
        )}
      </ul>
  );
}

function ListItem(props) {
  const value = props.value;
  return <li>{props.value}</li>;
}

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
      <div className="warning">
        Предупреждение!
      </div>
  );
}

function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('По ссылке кликнули.');
  }

  return (
      <a href="#" onClick={handleClick}>
        Нажми на меня
      </a>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
        <div>
          <WarningBanner warn={this.state.showWarning} />
          <button onClick={this.handleToggleClick}>
            {this.state.showWarning ? 'Спрятать' : 'Показать'}
          </button>
        </div>
    );
  }
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'On' : 'Off'}
        </button>
    );
  }
}

class LoggingButton extends React.Component {
  handleClick() {
    console.log('value this:', this);
  }

  render() {
    return (
        <button onClick={(e) => this.handleClick(e)}>
          Press me
        </button>
    );
  }
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
        </div>
    );
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
        () => this.tick(),
        1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
        <div>
          <h1>Hi, world</h1>
          <h2>Now is {this.state.date.toLocaleString()}.</h2>
        </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Content"> Content </div>

        <img src={logo} className="App-logo" alt="logo" />

        <Blog posts={posts} />

        <NumberList numbers={numbers} />

        {ActionLink()}

        {getGreeting(user1)}

        <Toggle />

        <LoggingButton />

        <Greeting isLoggedIn={false} />

        <LoginControl />

        <Mailbox unreadMessages={messages} />

        <Page />

        <Clock />
      </header>
    </div>
  );
}

export default App;