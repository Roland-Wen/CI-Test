const add = require("../src/main");

test("Testing 1 + 1 = 2", () => {
    expect(add(1, 1)).toBe(2);
});

test("Testing 123 + 456 = 579", () => {
    expect(add(123, 456)).toBe(579);
});

test("Testing -5 + 3 = -2", () => {
    expect(add(-5, 3)).toBe(-2);
});
