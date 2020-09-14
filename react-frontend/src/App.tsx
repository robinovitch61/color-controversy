import React from 'react'
import './App.scss'
import Nav from './components/Nav/Nav'
import Header from './components/Header'
import Judge from './components/Judge/Judge'
import AllColors from './components/AllColors/AllColors'
import Leaderboard from './components/Leaderboard/Leaderboard'
import About from './components/About'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App () {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Header />
        <Switch>
          <Route path='/' exact component={Judge} />
          <Route path='/colors' component={AllColors} />
          <Route path='/leaderboard' component={Leaderboard} />
          <Route path='/what' component={About} />
        </Switch>
        {/* <Content /> */}
      </div>
    </Router>
  )
}

export default App
