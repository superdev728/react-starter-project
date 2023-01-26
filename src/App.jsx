import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import Home from 'pages/Home'
import About from 'pages/About'
import Header from 'components/Header/Header'
import GameModes from 'components/GameModes/GameModes'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './assets/css/main.css'

// REDUX
// Import store and wrap app with redux provider
// import store from './store'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="d-flex">
        <div className="gamemode-section">
          <GameModes />
        </div>
        <div className="component-section">
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </Switch>
          </Router>
        </div>
        {/* <div></div> */}
      </div>
    </div>
  )
}

export default App
