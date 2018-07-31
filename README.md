## counter.js

---

A small, fast and easy to use library for counting the number of hashable objects.

## Install

Node.js users can install from the npm or yarn registry with

    $ npm install --save counter.js

or

    $ yarn add counter.js

## Usage

The library is a single JavaScript file counter.js (or counter.min.js that is minified counter.js file).
It is possible to load in an HTML document for the browser

    <script src='file/path/counter.js'></script>

or CommonJS or Node.js using `require`.

    var Counter = require("counter.js");

with using an ES6 transpiler.

    import Counter from "counter.js";

### Examples

```js
const counter = new Counter([]);                         // {} 'new' is optional
const counter1 = Counter([1, 2, 3, 1]);                  // {1: 2, 2: 1, 3: 1}
const counter2 = Counter(["apple", "banana" "banana"]);  // {"apple": 1, "banana": 2}
const counter3 = Counter([
    { name: "Yuki", age: 36, title: "developer" },
    { name: "Aon", age: 33, title: "lead developer" },
    { name: "Yuki", age: 36, title: "developer" }
]);                                                     // {{"name":"Yuki","age":36,"title":"developer"}: 2, {"name":"Aon","age":33,"title":"lead developer"}: 1}
const counter4 = Counter([[1], [1], [1, 2, 3]]);        // {[1]: 2, [1,2,3]: 1}
```

## Feedback

This library is my first attempt as a self-taught developer, if you found any bugs, comments or questions, please open an issue, or email [morita657](mailto:morita657@gmail.com)
