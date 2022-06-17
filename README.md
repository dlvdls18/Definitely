# Definitely
Call promise infinitely useful for Infinite Loading

# Installation
```html
<script src="https://cdn.jsdelivr.net/gh/dlvdls18/Definitely@main/src/definitely.js"></script>
```

# Documentation
Call the function `Definitely` with these **order** of **arguments**:

**NOTE:** Every arguments are required.


- `Promise` Class&lt;Promise&gt; - Promise to call
- `Times` Number - When promise throws an error, the variable `runs` will increase. You can use this argument to call the onerror when this argument is equal or greater than the variable `runs`.
- `Onsuccess` Function - When the promise resolved, this will called with the resolve arguments.
- `Onerror` Function - When the expected loop is done, this will called with argument `Error Array` which has every error logs.
- `Delay` Number - Loop delay
