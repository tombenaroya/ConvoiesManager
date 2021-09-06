import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from 'pages/Home';
import About from 'pages/About';

const Navbar = () => {
  return (
    <Router>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link as={Link} to={'/home'}>
                  <a className='nav-link'>Home</a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link as={Link} to={'/about'}>
                  <a className='nav-link'>About</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <Switch>
          <Route exact path={'/'}>
            <Redirect to='/home' />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/home'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Navbar;
