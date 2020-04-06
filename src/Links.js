import React from 'react';

import { Alert, ListGroup } from 'react-bootstrap';

import ReactMarkdown from 'react-markdown';

const educationItems = [
    `[Reasons Why I Didn’t Consider Studying Computer Science](https://amy.dev/?p=62) by Amy Nguyen`,
    `[On Technical Entitlement](https://medium.com/tales-from-the-front/on-technical-entitlement-cc9ed433ec3c) by Tess Rinearson`,
    `[Silent Technical Privilege](http://pgbovine.net/tech-privilege.htm) by Philip Guo`,
    `[The ABCs of How We Learn](https://www.amazon.com/ABCs-How-Learn-Scientifically-Approaches/dp/0393709264) by Daniel L. Schwartz, Jessica M. Tsang, and Kristen P. Blair`
];

const pythonItems = [
    `[A Conversation with the Creator of Python](https://drive.google.com/file/d/1cIFVaiN2xosLusZoMkXt44pm-buN9lIT/view?usp=sharing) with myself, Michael Cooper, and the creator of Python, Guido van Rossum.`,
    `[PEP 20: The Zen of Python](https://www.python.org/dev/peps/pep-0020/) by Tim Peters`,
    `[PEP 8: Python's Style Guide](https://pep8.org/) originally written by Guido van Rossum, compiled by Kenneth Rietz`,
    `[Learn python3 in Y minutes](https://learnxinyminutes.com/docs/python/) by Louie Dinh`,
    `[Using the Python Interpreter](https://docs.python.org/3/tutorial/interpreter.html) by the Python Software Foundation`,
    `[Thoughts on Python Style](https://docs.python-guide.org/writing/style/) by Kenneth Rietz`
];

const sunshineItems = [
    `&#128524; [19 Ways To Stay Busy And Calm While Under Self-Quarantine](https://www.buzzfeed.com/bekoconnell/ways-to-keep-yourself-busy-and-calm-while-stuck-at-home) from BuzzFeed`,
    `&#127881; [Readers’ Ideas for Finding Community and Cheer at Home](https://www.nytimes.com/2020/03/24/travel/coronavirus-quarantine-what-to-do.html) from the New York Times`,
    `&#127939; [Exercise, Health and Self-Care for Coronavirus Isolation](https://www.nytimes.com/2020/03/20/style/self-care/isolation-exercise-meditation-coronavirus.html) from the New York Times`,
    `&#9997; [100 things to do while stuck inside due to a pandemic](https://www.usatoday.com/story/life/health-wellness/2020/03/16/coronavirus-quarantine-100-things-do-while-trapped-inside/5054632002/) from USAToday`,
    `&#128149; [20 Wholesome, Tender, And Downright Entertaining Things People Are Doing During Quarantine](https://www.buzzfeed.com/farrahpenn/pure-and-wholesome-quarantine-people-coronavirus) from BuzzFeed`,
    `&#128696; [125 Ideas to Keep Kids Entertained During the Coronavirus Crisis](https://parade.com/1009774/stephanieosmanski/things-to-do-with-kids-during-coronavirus-quarantine/) from Parade`
];

function renderListItems(lst) {
    return (
        <ListGroup variant="flush" className="links-list mb-2">
        {
            lst.map(
                (item, i) =>
                (<ListGroup.Item 
                    key={i} 
                    className={i === (lst.length-1) ? 'links-last-child' : null}
                >
                    <ReactMarkdown source={item} />
                </ListGroup.Item>)
            )
        }
        </ListGroup>
    );
}

function Links(props) {
    return (
        <div className="links">
            <h1>Fun Links!</h1>
            <p className="lead">
                A collection of some websites that I've found useful... 
                CS-related or otherwise.
            </p>

        {/* RAYS OF SUNSHINE */}
            <h3 className="mt-4">Rays of Sunshine</h3>
            <p className="lead">
                Brightness in this scary, often dark time.
            </p>
            {
                renderListItems(sunshineItems)
            }

        {/* EDUCATION LINKS */}
            <h3 className="mt-4">On CS Education</h3>
            <p className="lead">
                Articles and books that have influenced my perspectives 
                about CS education.
            </p>
            { renderListItems(educationItems) }

        {/* PYTHON LINKS */}
            <h3 className="mt-4">Python Resources</h3>
            <p className="lead">
                Links to documents about the Python programming language.
            </p>
            <Alert variant="warning">
                <b>Warning</b>: These resources vary widely in the amount of 
                programming experience they assume as a prerequisite. 
                Some of them may not be friendly for new programmers. I've
                still included them because I hope you'll be able to return to 
                them at some point in your programming journey. &#128522;
            </Alert>
            {
                renderListItems(pythonItems)
            }
        </div>
    );
}

export default Links;