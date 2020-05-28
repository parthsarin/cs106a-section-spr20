# Find the Kidnapper

<div class="card mb-3">
    <div class="card-body">
        <h5 class="card-title">Links</h5>
        <span class="card-link">
            <a href="https://drive.google.com/file/d/1W5rrLN0JKkZ-GzLVLHVhty9xi-6_neJM/view?usp=sharing">💻 Starter Code</a>
        </span>
    </div>
</div>

Oh no! Our beloved Karel has been kidnapped! Here's what we know: Karel was kidnapped some time before **7am** today. Karel is equipped with a GPS, so we have some record of her movements between **7am and 12:30pm**. After 12:30pm, the GPS went dark. Karel's movements are stored in a variable called `KAREL_LOCATIONS`, which looks like this:

```python
KAREL_LOCATIONS = {
    '7:00': 'Lake Lag',
    '7:30': 'MemChu',
    '8:00': 'Law School Terrace',
    '8:30': 'Green Library',
    '9:00': 'Hoover Tower',
    '9:30': 'Lathrop',
    '10:00': 'Oval',
    '10:30': 'Main Quad',
    '11:00': 'Gates',
    '11:30': 'Cantor',
    '12:00': 'Mausoleum',
    '12:30': 'TAP'
}
```

In addition, thanks to Stanford's contact tracing technology, we have a list of everyone who was on campus and their locations throughout the day. This data is stored in a file called `locations.txt`. Here are the first few lines:

```md
Peter, 8:00, Law School Terrace
Johnny, 11:30, Lathrop
Ina, 11:30, Lake Lag
Jayson, 7:00, Hoover Tower
Serina, 12:00, Hoover Tower
Glennie, 11:30, Hoover Tower
Meggan, 8:30, Ricker
Cecily, 11:00, Gates
Jayson, 8:00, MemChu
...
```

Notice that each line is of the form `{name}, {time}, {location}`. Each line represents a single person-location timestamp indicating that `{name}` was at `{location}` at `{time}`. So, the line `Peter, 8:00, Law School Terrace` means that Peter was at the Law School Terrace at 8am. Additionally, this file contains all the location data for every person on campus, in 30-minute increments between 7am and 12:30pm. So, each person's movement data will line up with the movement data we have for Karel.

Because Karel was with the kidnapper all morning, *Karel's movements will be the same as the kidnapper's movements*. Write a function `find_kidnapper` which prints out the name of the kidnapper.

**Once you know who the kidnapper is, use the Ask for Help button to let me know and I'll tell you where to proceed next.**

While we don't have any requirements for how you do this, we recommend you solve this problem in two parts:

1. Open the `locations.txt` file and parse the data. We suggest that you store this data in a dictionary where every key is a **name**. The value associated to a name should be another dictionary that looks like the `KAREL_LOCATIONS` dictionary above. More precisely, the inner dictionary should map a **time** to a **location** if the person was in that location at that time. A partial example of this data structure would look like:

```python
{
    'Peter': {'8:00': 'Law School Terrace'},
    'Jayson': {'11:30': 'Lathrop', '8:00': 'MemChu'}
}
```

2. After you've loaded the data from `locations.txt` into Python, you should compare each person's time-location dictionary to `KAREL_LOCATIONS`. If they match, you've found the kidnapper.


> With love and &#129412;s by @psarin