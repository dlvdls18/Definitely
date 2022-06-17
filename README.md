# Definitely

![Definitely](definitely.png)

Call promise infinitely useful for Infinite Loading.

```js
Definitely(new Promise(function(resolve, reject) {
  reject("Hello!");
}), 500, function() {}, function(logs) {
  console.log(logs);
});
```

# Installation
```html
<script src="https://cdn.jsdelivr.net/gh/dlvdls18/Definitely@main/src/definitely.js"></script>
```

# Documentation
## Arguments
Call the function `Definitely` with these **order** of **arguments**:

**NOTE:** Every arguments are required.


```js
Definitely(promise, times, onsuccess, onerror, delay);
```

- `Promise` Class&lt;Promise&gt; - Promise to call.
- `Times` Number - Error limit when the promise rejected.
- `Onsuccess` Function - When the promise resolved, this will called with the resolve arguments.
- `Onerror` Function - When the expected loop is done, this will called with argument `Error Array` which has every error logs.
- `Delay` Number - Loop delay

When the promise resolved, the loop will end.
