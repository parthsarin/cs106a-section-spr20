import React from 'react';

import ReactMarkdown from 'react-markdown';


export default class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            content: null
        };
    }
    componentDidMount() {
        fetch('/res/About.md')
        .then((res) => res.text())
        .then((response) => {
            this.setState({
                isLoaded: true,
                content: response
            });
        });
    }

    render() {
        if (this.state.isLoaded) {
            return <ReactMarkdown source={this.state.content} />;
        } else {
            return null;
        }
    }
}