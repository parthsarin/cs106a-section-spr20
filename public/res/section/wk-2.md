### Week 2

This week, we talked about images.

```js
from PIL import Image
import numpy as np

test = Image.open('test.png')
a = np.asarray(test)
```