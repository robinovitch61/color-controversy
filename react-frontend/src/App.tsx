import React from 'react';
import './App.scss';
import Nav from './components/Nav/Nav';
import Header from './components/Header';
import Judge from './components/Judge/Judge';
import AllColors from './components/AllColors/AllColors';
import Leaderboard from './components/Leaderboard/Leaderboard';
import About from './components/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import { StyledPageContent } from './style/style';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <Router>
        <StyledPageContent>
          <Nav />
          <ErrorBoundary fallback={<p>Something went wrong</p>}>
          <Header />
          <Switch>
            <Route path='/' exact component={Judge} />
            <Route path='/colors' component={AllColors} />
            <Route path='/leaderboard' component={Leaderboard} />
            <Route path='/what' component={About} />
          </Switch>
        </ErrorBoundary>
        </StyledPageContent>
        <Footer />
    </Router>
  );
}

export default App;
