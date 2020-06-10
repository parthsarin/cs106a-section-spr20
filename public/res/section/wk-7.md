### Section 6 (Week 7)

<div class="card mb-3">
    <div class="card-body">
        <h5 class="card-title">Links</h5>
        <span class="card-link">
            Slides (<a href="https://drive.google.com/file/d/1SN7Q5bocffqnH1TupiLgsfUwirErJuMT/view?usp=sharing">full</a> / <a href="https://drive.google.com/file/d/1Oz1TdygRHr6xYKN9QZ8TPP-KcaT2uFe6/view?usp=sharing">condensed</a>)
        </span>
        <!-- <span class="card-link">
            <a href="https://drive.google.com/file/d/1G1ygqVOSG2zi_l2UEQJ8KJubPs_PZzE_/view?usp=sharing">&#128466; Section Whiteboard</a>
        </span> -->
        <span class="card-link">
            <a href="https://web.stanford.edu/class/archive/cs/cs106a/cs106a.1206/section/section6/section6.html">&#128221; Section Handout</a>
        </span>
        <span class="card-link">
            <a href="https://web.stanford.edu/class/archive/cs/cs106a/cs106a.1206/section/section6/section6-soln.html">&#128161; Section Solutions</a>
        </span>
        <span class="card-link">
            <a href="https://web.stanford.edu/class/archive/cs/cs106a/cs106a.1206/section/section6/Section6.zip">&#128187; Starter Code</a>
        </span>
        <span class="card-link">
            <a href="https://us.edstem.org/courses/325/lessons/1298">&#128105;&#127998;&#8205;&#128187; Ed Project</a>
        </span>
    </div>
</div>

Whoo! It's Week 7! We're almost done with the quarter, exciting! This past week, we learned about dictionaries, which unlock some of the most powerful behavior in Python.

Today, we'll start off like we usually do, with a few check-in questions. Then, we'll review dictionaries and nested data structures.

#### Dictionaries

Abstractly, dictionaries are an association between *keys* and *values*. I like to think about them like this analogy, though: If a dictionary was a novel, the **keys would be the table of contents** and the **values would be the contents of those chapters**.

The analogy isn't perfect. For example, even though you might peruse the contents of a novel from start to finish, we don't usually go through the values of a dictionary like that. Similarly, even though there is a "first" chapter, there isn't really a "first" value of the dictionary.

At the same time, the analogy is helpful for understanding the complexity of nested data structures. While the keys are generally small (just an entry in the table of contents), the values can be large. They could be lists or other dictionaries, etc.

Here are some helpful dictionary functions:

```python
fav_animals = {
    'Parth': ['Unicorn', 'Cat'],
    'Vandana': ['Medha', 'Parth']
}

# Access the value for a specific key
fav_animals['Parth'] # => ['Unicorn', 'Cat']

# Use .get when you don't know if the value is in the dict
fav_animals.get('Joy')     # => None
fav_animals.get('Joy', []) # => []

# Is 'Medha' a key?
'Medha' in fav_animals # => False

# Loop through a dictionary
for name in fav_animals:
    print(name + " loves " + str(fav_animals[name]))
```

In CS 106A, we commonly see dictionaries used like this:

```python
# A common pattern
dict_to_build = {} # Empty dictionary
for value in data_set:
    # Process the value and add to the dict
```

Going back to our analogy, you can think of this proecedure as though we're writing a book! The book is meant to summarize the contents of our data set. More precisely:

1. We start with an empty book and a data set that we want to summarize inside the book.
2. We go through our data set, adding information to the book along the way.