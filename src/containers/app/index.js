import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import '../../css/App.css';

const App = () => (
  <div>
    <div className="App">
      <div className="App-header">
        <h2>Welcome to React</h2>
      </div>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </div>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App
