### Section 2 (Week 3)

<div class="card mb-3">
    <div class="card-body">
        <h5 class="card-title">Links</h5>
        <span class="card-link">
            Slides (<a href="https://drive.google.com/open?id=1IXpXkVh3DCMMTaqZy4q_CazC6t90g5gm">full</a> / <a href="https://drive.google.com/open?id=1kQ5CGqjlAlbnylLpp7v-tH72JF5mxG_h">condensed</a>)
        </span>
        <!-- <span class="card-link">
            <a href="">&#128466; Section Whiteboard</a>
        </span> -->
        <span class="card-link">
            <a href="http://web.stanford.edu/class/cs106a/section/section2/section2.html">&#128221; Section Handout</a>
        </span>
        <!-- <span class="card-link">
            <a href="http://web.stanford.edu/class/cs106a/section/section2/section2-soln.html">&#128161; Section Solutions</a>
        </span> -->
        <span class="card-link">
            <a href="https://drive.google.com/open?id=1k3B9djMdFPox7gxVysigpcvGG8eKoWuC">&#128187; Starter Code</a>
        </span>
        <span class="card-link">
            <a href="https://us.edstem.org/courses/325/lessons/1113">&#128105;&#127998;&#8205;&#128187; Ed Project</a>
        </span>
    </div>
</div>

Today, we'll start with some logistical things; most importantly, remember that **Assignment 2 is due tomorrow**, Friday, April 24 by 1:30pm Pacific. At the beginning of class, we'll break out into rooms to establish some discussion norms for the group.

#### Discussion Norms
I'll add the discussion norms that we've decided on to the website, once we make a list. 

For folks who might not have done this before, the reason that I like to do this is to make sure that section is a comfortable, accepting place for everyone! Nobody's going to police your behavior: this is so we can collectively write out some norms that we'll follow. It's possible (even likely) that you already follow the discussion norms without having to enumerate them: that's awesome!

Generally, many people find this activity really encouraging to create a space in which we can all engage each other at the same level!

#### The Unicorn Adoption Agency
The [Starter Code](https://drive.google.com/open?id=1k3B9djMdFPox7gxVysigpcvGG8eKoWuC) file that I've linked above contains a file called `unicorn_adoption.py`. That file contains a function called `unicorn_adoption_agency` which we'll analyze as a way to review some key concepts from lecture. In particular, we'll review:
* **Functions, Parameters, and Return Values**: Every function (optionally) takes in some parameters, that affect its behavior, and (optionally) returns a value. A function is some isolated piece of functionality in your program.
* **Loops and Control Flow**: We'll briefly review `while` and `for` loops and then spend most of our time talking about boolean values (which in Python are `True` and `False`) as well as how they fit into your code. We'll discuss `if`/`elif`/`else` blocks and how they're used for control flow.
* **Variables**: Objects in Python are like suitcases. An object has, among other things, a value and a type. That's why `'5' != 5`. The string `'5'` and the integer `5` are not equal. Variables are like luggage tags that point to suitcases. For example:

```python
x = 5
y = x

"""
At this point, x and y point to the *same* suitcase
    x ──┐
        │
        ├── 5
        │
    y ──┘
"""

x += 1

"""
With the last line, a new suitcase is created and x is *rebound*:
    x ───── 6
    y ───── 5
"""

print(x, y) # => 6  5
```
* **Style**: Comments should be designed for *humans* (and unicorns). Name variables to sound like what they represent.

#### Section Problems
After we've reviewed those concepts, we'll break out and practice with as many of the following problems as we can fit in:

1. *Tracing* (~5 minutes): Identify the functionality of code without running it.
2. *Finding Factors* (~15 minutes): Write a program that prints out all the factors of a number, provided by the user.
3. *Estimating π* (~20-25 minutes): Estimate the value of π using the `random` module by picking random points inside a square and calculating the percentage that land inside an inscribed circle.

See the slides ([full](https://drive.google.com/open?id=1IXpXkVh3DCMMTaqZy4q_CazC6t90g5gm) / [condensed](https://drive.google.com/open?id=1kQ5CGqjlAlbnylLpp7v-tH72JF5mxG_h)) for a fairly detailed walkthrough of the introductions of the problems.