import React from 'react';

import ReactMarkdown from 'react-markdown';

import hljs from 'highlight.js';

export default class Page extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            content: null
        };
    }

    componentDidMount() {
        this.fetchResources(this.props.pageRoute);
    }

    componentDidUpdate(prevProps) {
        if (this.props.pageRoute !== prevProps.pageRoute) {
            this.fetchResources(this.props.pageRoute);
        }

        this.updateCodeSyntaxHighlighting();
    }
    
    fetchResources(path) {
        fetch(`./res/${path}.md`)
        .then((res) => res.text())
        .then((response) => {
            this.setState({
                isLoaded: true,
                content: response
            });
        });
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