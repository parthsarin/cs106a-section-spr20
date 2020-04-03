import React from 'react';
import './App.css';

import {
  Container,
  Navbar,
  Nav
} from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';

import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import About from './About';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar variant="dark" className="navbar-theme">
          <Nav className="ml-auto">
            <RouterNavLink to="/">Home</RouterNavLink>
            <RouterNavLink to="/about">About</RouterNavLink>
          </Nav>
        </Navbar>

        <Container className="mt-2">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <h1>Hello!</h1>
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

const RouterNavLink = ({ children, ...props }) => (
  <LinkContainer exact {...props}>
    <Nav.Link active={false}>
      {children}
    </Nav.Link>
  </LinkContainer>
)

export default App;
