import React from 'react';
import './App.scss';
import Nav from './components/Nav/Nav';
import Judge from './components/Judge/Judge';
import AllColors from './components/AllColors/AllColors';
import Leaderboard from './components/Leaderboard/Leaderboard';
import About from './components/About/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import { StyledPageContent } from './style/style';

function App() {
  return (
    <Router>
      <StyledPageContent>
        <Nav />
        <Switch>
          <Route path='/' exact component={Judge} />
          <Route path='/colors' component={AllColors} />
          <Route path='/leaderboard' component={Leaderboard} />
          <Route path='/what' component={About} />
        </Switch>
      </StyledPageContent>
      <Footer />
    </Router>
  );
}

export default App;
