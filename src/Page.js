import React from 'react';

import ReactMarkdown from 'react-markdown';
import hljs from 'highlight.js';

import NoMatch from './NoMatch';

function safeFetch(url, options) {
  if (options == null) options = {}
  if (options.credentials == null) options.credentials = 'same-origin'
  return fetch(url, options).then(function(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response)
    } else {
      var error = new Error(response.statusText || response.status)
      error.response = response
      return Promise.reject(error)
    }
  })
}


export default class Page extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            content: null,
            pageFetchError: false,
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
        safeFetch(`./res/${path}.md`)
        .then((res) => res.text())
        .then((response) => {
            this.setState({
                isLoaded: true,
                content: response,
                pageFetchError: false,
            });
        }).catch((e) => {
            this.setState({
                isLoaded: false,
                content: null,
                pageFetchError: true,
            })
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
            if (this.state.pageFetchError) {
                return <NoMatch />;
            }

            return null;
        }
    }
}