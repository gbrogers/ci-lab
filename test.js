const { getGreeting, findSum } = require("./project");

test("return the sum of two numbers", () => {
  console.log(findSum(3, 4));
  expect(findSum(3, 4)).toBe(7);
});

test("can create a basic greeting", () => {
  expect(getGreeting("Sam")).toBe("Hi Sam");
});
