### Section 3 (Week 4)

<div class="card mb-3">
    <div class="card-body">
        <h5 class="card-title">Links</h5>
        <span class="card-link">
            Slides (<a href="https://drive.google.com/open?id=1mt6QgOn8S5w3ALdggPLpPROt7BK4jbsk">full</a> / <a href="https://drive.google.com/open?id=1OuOmEo5muaXDf2uyDH8Nrml85ue6gBDJ">condensed</a>)
        </span>
        <!-- <span class="card-link">
            <a href="https://drive.google.com/file/d/1G1ygqVOSG2zi_l2UEQJ8KJubPs_PZzE_/view?usp=sharing">&#128466; Section Whiteboard</a>
        </span> -->
        <span class="card-link">
            <a href="http://web.stanford.edu/class/cs106a/section/section3/section3.html">&#128221; Section Handout</a>
        </span>
        <span class="card-link">
            <a href="http://web.stanford.edu/class/cs106a/section/section3/section3-soln.html">&#128161; Section Solutions</a>
        </span>
        <span class="card-link">
            <a href="http://web.stanford.edu/class/cs106a/section/section3/Section3.zip">&#128187; Starter Code</a>
        </span>
    </div>
</div>

Today, we'll briefly cover some logistics and go do some icebreakers, but we'll spend most of our time on a review of lecture and two problems.

#### Logistics
There are two main logistical notes I want to make:
1. Assignment 2 (Khan-sole Academy and Compute Interest) is being graded and IGs will happen over the weekend.
2. The diagnostic was on Monday and I hope it went well! A few people have asked to discuss the exam; I’m happy to talk about it after grades are released.

#### Lecture Review
We'll touch on functions one more time to summarize all we've learned so far. A function is like a black box that does something in your program. You can think of it as a *task* that your computer will perform. Functions can take in *parameters* and spit out *return values*, though neither of those are required.

When we define a function, we make two promises. We specify what parameters the function will take in (between the paranthesis) and what the function will return (in the body of the function, after the `return` statement).
```python
def some_function(param_one, param_two): # the parameters
    # unicorn magic
    return return_value # the value to return
```

We'll also talk about images and how to manipulate them in Python. We'll use the `SimpleImage` library, which allows us to load images into our computer and manipulate them in terms of pixels. Pixels are the small single-colored squares that make up our image.
```python
img = SimpleImage(filename) # loads the image

img.width   # => the number of pixels along the x axis
img.height  # => the number of pixels along the y axis
```

We can access individual pixels using `px = img.get_pixel(x, y)`. That function will return a pixel object which has a red, green, and blue value that we can access and manipulate with `px.red`, `px.green`, and `px.blue` respectively.

You can iterate over an image with a for-each loop:
```python
for px in img:
    # do some stuff with px
```
or with a loop over the dimensions of the image:
```python
for y in range(img.height):
    for x in range(img.width):
        px = img.get_pixel(x, y)
        # do some stuff with px (and optionally x, y)
```

Both of these loops go through the image in the same order, but the second allows you to access the `x` and `y` coordinates of each pixel.

#### Problems!
The two section problems we'll focus on today are **Fizzbuzz** and **Squeeze Width**. We'll do the first one together, as a group, and you'll do the second in your breakout rooms.

See the slides ([full](https://drive.google.com/open?id=1mt6QgOn8S5w3ALdggPLpPROt7BK4jbsk) / [condensed](https://drive.google.com/open?id=1OuOmEo5muaXDf2uyDH8Nrml85ue6gBDJ)) for a fairly detailed walkthrough of the introductions of the problems.