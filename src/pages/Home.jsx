import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <p>
        <span>Edit </span>
        <code>src/App.js </code>
        <span>and save to reload.</span>
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <Link to="/about">
        <a className="App-link" href="/#">
          About
        </a>
      </Link>
    </div>
  )
}

export default Home
