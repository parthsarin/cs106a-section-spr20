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

import Syllabus from './Syllabus';
import Homepage from './Homepage';
import Links from './Links';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar variant="dark" className="navbar-theme">
          <Nav className="ml-auto">
            <RouterNavLink to="/">Home</RouterNavLink>
            <RouterNavLink to="/syllabus">Syllabus</RouterNavLink>
            <RouterNavLink to="/links">Fun Links</RouterNavLink>
          </Nav>
        </Navbar>

        <Container className="mt-2">
          <Switch>
            <Route path="/syllabus">
              <Syllabus />
            </Route>
            <Route path="/links">
              <Links />
            </Route>
            <Route path="/">
              <Homepage />
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
