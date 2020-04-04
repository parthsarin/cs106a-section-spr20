import React from 'react';

import { Col, Row, Tab, Nav } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

import moment from 'moment';
import hljs from 'highlight.js';

import logo from './logo.png';

function clamp (n, min, max) {
    return Math.min(Math.max(n, min), max);
}

export default class Homepage extends React.Component {
    constructor(props) {
        super(props);

        // Section is from weeks 2 to 10
        const firstWeek = 2;
        const lastWeek = 10;

        // Get current week
        const weekOne = moment("2020-04-06"); // first day of quarter
        const weekNumber = moment(); // now

        var currentWeek = weekNumber.diff(weekOne, 'weeks') + 1;
        currentWeek = clamp(currentWeek, firstWeek, lastWeek);

        this.durationInfo = {
            firstWeek,
            lastWeek,
            currentWeek
        }

        this.state = {
            sectionContentLoaded: false,
            sectionContent: null
        }
    }

    componentDidMount() {
        // Construct all promises
        var allPromises = [];

        for (var i = this.durationInfo.firstWeek; 
             i <= this.durationInfo.lastWeek; 
             i++) {

            const p = fetch(`./res/section/wk-${i}.md`); // content for week i
            allPromises.push(p);
        }

        // Execute all promises asynchronously
        this.addSectionResources(allPromises);
    }

    async addSectionResources(promises) {
        // Store results
        var sectionContent = [];

        for (var i = 0; i < promises.length; i++) {
            const toExecute = promises[i];
            await toExecute
                .then((res) => res.text())
                .then((response) => {
                    sectionContent.push(response);
                });
        }

        // Update state
        this.setState({ 
            sectionContentLoaded: true, 
            sectionContent
        });
    }

    componentDidUpdate() {
        this.updateCodeSyntaxHighlighting();
    }

    updateCodeSyntaxHighlighting = () => {
        document.querySelectorAll("pre code").forEach(block => {
          hljs.highlightBlock(block);
        });
    };
    
    render () {
        // navLinks
        var navLinks = [];
        for (var i = this.durationInfo.firstWeek; 
             i <= this.durationInfo.lastWeek; 
             i++) {

            const sectionNum = i - this.durationInfo.firstWeek + 1;

            navLinks.push(
                <Nav.Item key={'nav-link-wk-' + i}>
                  <Nav.Link eventKey={'wk-' + i}>
                  Section {sectionNum} (Wk {i})
                  </Nav.Link>
                </Nav.Item>
            );
        }

        // navTabs
        var navTabs = [];
        for (var j = this.durationInfo.firstWeek; 
         j <= this.durationInfo.lastWeek; 
         j++) {

            const index = j - this.durationInfo.firstWeek;

            // Get markdown from the state
            let sectionMarkdown;
            if (this.state.sectionContentLoaded) {
                sectionMarkdown = this.state.sectionContent[index];
            } else {
                sectionMarkdown = ''; // falsy
            }

            let tabContent;
            if (sectionMarkdown) {
                tabContent = <ReactMarkdown source={sectionMarkdown} />;
            } else {
                tabContent = <h3>Nothing here yet!</h3>;
            }

            navTabs.push(
                <Tab.Pane key={'nav-tab-wk-' + j} eventKey={'wk-' + j}>
                  { tabContent }
                </Tab.Pane>
            );

        }

        return (
            <div className="home">
                <Row>
                    <Col md={2} className="d-none d-md-block align-self-center">
                        <img id="logo" src={logo} alt="Stanford Logo" />
                    </Col>
                    <Col className="align-self-center">
                        <h1>CS 106A: Programming Methodologies</h1>
                        <p className="lead">
                        Discussion Section<br />
                        {/*Join URL:&nbsp;
                        <a href="https://stanford.zoom.us/j/901970176">
                            https://stanford.zoom.us/j/901970176
                        </a>*/}
                        </p>

                    </Col>
                </Row>
                <h2 className="mt-3">Schedule</h2>
                <p className="text-muted">
                    Over the course of the quarter, I'll upload resources from
                    each of our section meetings in the appropriate tab below.
                </p>
                <Tab.Container 
                    id="section-schedule" 
                    defaultActiveKey={'wk-' + this.durationInfo.currentWeek}
                >
                  <Row>
                    <Col md={3} xl={2}>
                      <Nav id="section-nav-links" variant="pills" className="flex-column">
                        { navLinks }
                      </Nav>
                    </Col>
                    <Col md={9} xl={10}>
                      <Tab.Content>
                        { navTabs }
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
            </div>
        );
    }
}