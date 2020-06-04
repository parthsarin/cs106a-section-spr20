import React from 'react';

import { Button, Col, Row, Tab, Modal, Nav } from 'react-bootstrap';
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

        // Section is from weeks 2 to 9
        const firstWeek = 2;
        const lastWeek = 9;

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
            sectionContent: null,
            fullInstructionsShowing: false
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
                tabContent = <ReactMarkdown source={sectionMarkdown} escapeHtml={false} />;
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
                    <Col md={2} className="d-none d-md-block align-self-center text-center">
                        <img id="logo" src={logo} alt="Stanford Logo" />
                    </Col>
                    <Col md={10} className="align-self-center">
                        <h1>CS 106A: Programming Methodologies</h1>
                        <div className="lead" id="subtitle-header">
                        Discussion Section | Thursday, 5:30pm Pacific<br />
                        Join URL:&nbsp;
                        <a href="https://stanford.zoom.us/j/901970176">
                            https://stanford.zoom.us/j/901970176
                        </a><br />
                        <Button 
                            variant="link" 
                            className="lead-btn-link align-baseline p-0 m-0"
                            onClick={
                                () => this.setState({ 
                                    fullInstructionsShowing: true 
                                })
                            }
                        >
                            Show Full Zoom Invitation
                        </Button> | 
                        Contribute to our&nbsp;
                        <a href="https://open.spotify.com/playlist/1pn8cUoKsLlOfX7WEEARz4?si=tOdALf44SAOcCvW6P7M5Qw">
                        Spotify Playlist
                        </a>! | <a href="https://forms.gle/pZV7mmhf7UHeJiXAA">Feedback Form</a>
                        </div>
                    </Col>
                </Row>

                <FullInstructionsModal
                    show={this.state.fullInstructionsShowing}
                    onHide={
                        () => this.setState({ fullInstructionsShowing: false })
                    }
                />

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
                      <Tab.Content className="section-summary">
                        { navTabs }
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
            </div>
        );
    }
}

function FullInstructionsModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="full-zoom-instructions"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="full-zoom-instructions">
          Zoom Invitation
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
            Topic: Parth Sarin&#39;s CS 106A Section<br />
            Time: Apr 16, 2020 05:30 PM Pacific Time (US and Canada)
        </p>
        <p style={{marginLeft: 20+'px'}}>
            Every week on Thu, until Jun 4, 2020, 8 occurrence(s)</p>
        <p style={{marginLeft: 20+'px'}}>
            Apr 16, 2020 05:30 PM</p>
        <p style={{marginLeft: 20+'px'}}>
            Apr 23, 2020 05:30 PM</p>
        <p style={{marginLeft: 20+'px'}}>
            Apr 30, 2020 05:30 PM</p>
        <p style={{marginLeft: 20+'px'}}>
            May 7, 2020 05:30 PM</p>
        <p style={{marginLeft: 20+'px'}}>
            May 14, 2020 05:30 PM</p>
        <p style={{marginLeft: 20+'px'}}>
            May 21, 2020 05:30 PM</p>
        <p style={{marginLeft: 20+'px'}}>
            May 28, 2020 05:30 PM</p>
        <p style={{marginLeft: 20+'px'}}>
            Jun 4, 2020 05:30 PM</p>
        <p style={{marginLeft: 20+'px'}}>
            Please download and import the following iCalendar (.ics) files to your calendar system.</p>
        <p style={{marginLeft: 20+'px'}}>
            Weekly: 
            <strong>REDACTED</strong>
        </p>
        <p>
            Join from PC, Mac, Linux, iOS or Android:&nbsp; 
            https://stanford.zoom.us/j/901970176?pwd=[REDACTED]
        </p>
        <p>&nbsp; &nbsp; Password: <strong>REDACTED</strong></p>
        <p>
            Or iPhone one-tap (US Toll):&nbsp; 
            +18333021536,,901970176# or +16507249799,,901970176#
        </p>
        <p>Or Telephone:</p>
        <p style={{marginLeft: 20 + 'px'}}>
            Dial:&nbsp; 
            +1 650 724 9799 (US, Canada, Caribbean Toll)&nbsp; 
            or +1 833 302 1536 (US, Canada, Caribbean Toll Free)
        </p>
        <p style={{marginLeft: 20 + 'px'}}>
            Meeting ID: 901 970 176<br />
            Password: <strong>REDACTED</strong><br />
            International numbers available:&nbsp; 
            https://stanford.zoom.us/u/acHmFILIZT
        </p>
        <p style={{marginLeft: 20 + 'px'}}>
            Meeting ID: 901 970 176<br />
            SIP: 901970176@zoomcrc.com
            Password: <strong>REDACTED</strong>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
