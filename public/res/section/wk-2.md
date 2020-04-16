### Section 1 (Week 2)

<div class="card mb-3">
    <div class="card-body">
        <h5 class="card-title">Links</h5>
        <span class="card-link">
            Slides (<a href="https://drive.google.com/open?id=1zjFOxPsd6Booqz9rZ3-rpuysZ7YOC5B8">full</a> / <a href="https://drive.google.com/open?id=1KGHfFp9QxZnlNvHWP0ddIQDrc-svRAJc">condensed</a>)
        </span>
        <span class="card-link">
            <a href="http://web.stanford.edu/class/cs106a/section/section1/section1.html">&#128221; Section Handout</a>
        </span>
        <span class="card-link">
            <a href="http://web.stanford.edu/class/cs106a/section/section1/Section1.zip">&#128105;&#127998;&#8205;&#128187; Starter Code</a>
        </span>
    </div>
</div>

Today we'll start off with some section logistics. We'll talk about the purpose of 106A section, modifications due to online learning, assignments and IGs. Then, I'll tell you you a little bit more about me and we'll all get a chanace to introduce ourselves. Time permitting, we might even play a fun game!

Then, we'll talk about some of the things you've learned in lecture so far, focusing on **Karel** (who we're going to leave behind soon...! Sad...). 

Karel is a robot that lives in a world with walls and beepers. Karel can move in this world, has some limited observation abilities, and can interact with the world.

We'll discuss the following Karel methods:
```python
from karel.stanfordkarel import * # Imports the Karel library

def main():
    """
    The main function will be executed when the Karel program initiates. This
    particular main function isn't very interesting. It just highlights some of 
    Karel's features.
    """

    # NAVIGATION METHODS:
    move()           # Karel will move one step in the direction they're facing
    turn_left()      # Karel will rotate 90 degrees counter-clockwise
    front_is_clear() # True if Karel can move forward without hitting a wall,
                     # False otherwise.

    # BEEPER METHODS:
    pick_beeper() # Karel will pick up the beeper they're standing on or will
                  # throw an error if there isn't one.

    put_beeper()  # Karel will place a beeper on the square they're standing on
                  # or will throw an error if it doesn't have beepers.

    beepers_present() # True if Karel is standing on a beeper, False otherwise.
    beepers_in_bag()  # True if Karel has beepers in their bag, False otherwise.

    # ORIENTATION METHODS:
    facing_north() # True if Karel is facing North, False otherwise.
    facing_east()  # True if Karel is facing East, False otherwise.
    facing_south() # True if Karel is facing South, False otherwise.
    facing_west()  # True if Karel is facing West, False otherwise.

if __name__ == '__main__':
    """
    We'll learn more about this if statement later, but basically, __name__ is a
    special variable and it's equal to the string '__main__' when the program is 
    being run as an executable.

        Pop Quiz: We just learned about strings... what are they?
    """
    run_karel_program() # Starts Karel, and loads the main function into Karel's
                        # memory.
```
