/**
 * 2018 Takahiro Morita morita657@gmail.com
 */
(function(GLOBAL) {
  "use strict";
  var Counter;

  function _Counter() {
    /**
     * The Counter constructor and exported function.
     * Create and return a new instance of a Counter object.
     * @param {Array} source An object of Array
     */
    function Counter(source) {
      var output = {};
      // Enable constructor usage without new.
      if (!(this instanceof Counter)) {
        return source === undefined ? _Counter() : new Counter(source);
      }
      // Create a counter object if the data type of source is array.
      if (Array.isArray(source)) {
        source.forEach((element) => {
          var strigify = JSON.stringify(element);
          if (output.hasOwnProperty(strigify)) {
            output[strigify] += 1;
          } else {
            output[strigify] = 1;
          }
        });
        return output;
      } else {
        // Throw Error if the data type of source is not Array object.
        throw new Error(source + " is not an array.");
      }
    }
    return Counter;
  }

  // Export.
  Counter = _Counter();
  // AMD.
  if (typeof define === "function" && define.amd) {
    define(function() {
      return Counter;
    });
  }
  // Node and CommonJS environment.
  else if (typeof module !== "undefined" && module.exports) {
    module.exports = Counter;
  }
  // Browser.
  GLOBAL.Counter = Counter;
})(this);
