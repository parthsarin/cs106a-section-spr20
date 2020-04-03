import React from 'react';

import ReactMarkdown from 'react-markdown';

import hljs from 'highlight.js';

export default class Syllabus extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            content: null
        };
    }
    
    componentDidMount() {
        fetch('./res/Syllabus.md')
        .then((res) => res.text())
        .then((response) => {
            this.setState({
                isLoaded: true,
                content: response
            });
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

    render() {
        if (this.state.isLoaded) {
            return (<ReactMarkdown 
                source={this.state.content} 
                escapeHtml={false}
            />);
        } else {
            return null;
        }
    }
}