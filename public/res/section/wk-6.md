### Section 5 (Week 6)

<div class="card mb-3">
    <div class="card-body">
        <h5 class="card-title">Links</h5>
        <span class="card-link">
            Slides (<a href="https://drive.google.com/file/d/1ZaE1Z-T_40qW4W-QgKSYplGkpTweXb5G/view?usp=sharing">full</a> / <a href="https://drive.google.com/file/d/1Ajj5gr131glUOjl09uvOq1wbJYcYxOUy/view?usp=sharing">condensed</a>)
        </span>
        <!-- <span class="card-link">
            <a href="https://drive.google.com/file/d/1G1ygqVOSG2zi_l2UEQJ8KJubPs_PZzE_/view?usp=sharing">&#128466; Section Whiteboard</a>
        </span> -->
        <span class="card-link">
            <a href="https://web.stanford.edu/class/archive/cs/cs106a/cs106a.1206/section/section5/section5.html">&#128221; Section Handout</a>
        </span>
        <span class="card-link">
            <a href="https://web.stanford.edu/class/archive/cs/cs106a/cs106a.1206/section/section5/section5-soln.html">&#128161; Section Solutions</a>
        </span>
        <span class="card-link">
            <a href="https://web.stanford.edu/class/archive/cs/cs106a/cs106a.1206/section/section5/section5.zip">&#128187; Starter Code</a>
        </span>
        <span class="card-link">
            <a href="https://us.edstem.org/courses/325/lessons/1274/">&#128105;&#127998;&#8205;&#128187; Ed Project</a>
        </span>
    </div>
</div>

Happy week 6, everyone! I hope you're all holding up well; I know it's a tough time in the quarter for most of you. I'm doing my best to try to make 106A section a fun and relaxing place to be. &#10084;&#65039;

Today, we'll start off like we usually do, with a few check-in questions. Then, we'll review this week in 106A, which I think has been one of the most interesting and challenging.

#### Strings
We're finally getting into strings, which unlock a lot of very powerful potential in Python. Strings are a sequence of characters, between two quotes: `emotion = "I love"`. Here are some important string methods:

```python
emotion = "I love"
best_animal = "unicorns"

# Add strings together
message = emotion + ' ' + best_animal  # => 'I love unicorns'

# Convert the case of a string
message.upper() # => 'I LOVE UNICORNS'
message.lower() # => 'i love unicorns'

# Replace characters from a string (doesn't change the original)
message.replace('love', 'adore') # => 'I adore unicorns'
print(message)                   # => 'I love unicorns'

# Find the position of a substring
message.find('unicorn') # => 7

# Convert the string into a list, breaking it up at the provided delimiter
message.split(' ')      # => ['I', 'love', 'unicorns']
```

Then, we'll review some examples of slices, which function the same way as they do for lists:

```python
s = "Unicorns are not narwhals"

# start is inclusive, end is exclusive
s[1:10] # => 'nicorns a'

# Leaving off an index tells Python to "go as far as it can"
s[:10]  # => 'Unicorns a'

# The third parameter is the step size
s[::2]  # => 'Uion r o awas'

# The step can be negative as well
s[::-1] # => 'slahwran ton era snrocinU'
```

#### File Reading
We've seen two ways to read files:

```python
with open('poem.txt') as f:
    for line in f:
        line = line.strip()
        print(line)

for line in open('poem.txt'):
    line = line.strip()
    print(line)
```

In both of these examples, here's what's going on: `open('poem.txt')` loads the file `poem.txt` into Python as a "file object." In the first example, the `with ... as ...` block is called a "context manager;" it ensures that the file is safely opened and closed. Once the file is loaded, you can sort of treat it like a "list of lines" and loop over it using the usual `for` loop syntax.