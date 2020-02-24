import React from 'react';
import './App.css';
import HomePage from './screens/HomePage'
import SortingHat from './screens/SortingHat'
import Houses from './screens/Houses'
import {Switch, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <div className='Header'>
        <h1>Harry Potter</h1>
        <div className='nav'>
          <Link to={'/'}>Home </Link>
          <Link to= {'/sortingHat'}>Sorting Hat </Link>
          <Link to= {'/houses'}>Houses </Link>
        </div>
      </div>

      <main>
        <Switch>
          <Route exact path={'/'} component={HomePage} />
          <Route path={'/sortingHat'} component={SortingHat} />
          <Route path={'/houses'} component={Houses} />
        </Switch>
      </main>

      {/* <footer>
        <h1>Thanks for Visting</h1>
      </footer> */}
    </div>
  );
}

export default App;
