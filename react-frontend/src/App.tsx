import React from 'react';
import './App.scss';
import Nav from './components/Nav/Nav';
import Header from './components/Header';
import Judge from './components/Judge/Judge';
import AllColors from './components/AllColors/AllColors';
import Leaderboard from './components/Leaderboard/Leaderboard';
import About from './components/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Header />
        <Switch>
          <Route path='/' exact component={Judge} />
          <Route path='/colors' exact component={AllColors} />
          <Route path='/leaderboard' exact component={Leaderboard} />
          <Route path='/what' exact component={About} />
          <Route path='/:hexColor' component={Judge} />
          {/* Because I'm putting the hex color in the URL, it's possible to make the component remount
          conditional on the url path (e.g. if the user presses the back button on their browser) like so:
          <Route path='/:hexColor' render={(props) => <Judge {...props} key={window.location.pathname}/>} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
