const mocha = require("mocha");
const { expect } = require("chai");
const Counter = require("../counter");

describe("counter.js ", () => {
  it("should be a function as a data type.", () => {
    expect(Counter).to.be.a("function");
  });

  it("should return correct value.", () => {
    const ans1 = { "1": 1, "2": 1, "3": 1 };
    expect(Counter([1, 2, 3])).to.eql(ans1);

    const ans2 = { "1": 2, "2": 1 };
    expect(Counter([1, 2, 1])).to.eql(ans2);

    const ans3 = { '"apple"': 1, '"banana"': 2, '"orange"': 1 };
    expect(Counter(["apple", "banana", "orange", "banana"])).to.eql(ans3);

    const ans4 = {
      '{"name":"Yuki","age":36,"title":"developer"}': 2,
      '{"name":"Aon","age":33,"title":"lead developer"}': 1
    };
    expect(
      Counter([
        { name: "Yuki", age: 36, title: "developer" },
        { name: "Aon", age: 33, title: "lead developer" },
        { name: "Yuki", age: 36, title: "developer" }
      ])
    ).to.eql(ans4);
  });

  it("should throw an error with null", () => {
    expect(function() {
      Counter(null);
    }).to.throw("null is not an array.");
  });
});
