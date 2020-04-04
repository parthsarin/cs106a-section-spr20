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

import Page from './Page';
import Homepage from './Homepage';
import Links from './Links';
import NoMatch from './NoMatch';

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
            <Route
              path="/syllabus"
              render={
                (props) => {
                  return <Page pageRoute="Syllabus" {...props} />
                }
              }
            />
            <Route path="/links">
              <Links />
            </Route>
            <Route
              path="/handout/:handoutSlug"
              render={
                (props) => {
                  let slug = props.match.params.handoutSlug;
                  return <Page pageRoute={`handouts/${slug}`} {...props} />
                }
              }
            />
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="*" status={404} component={NoMatch} />
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
