const multiply = require("../src/main").multiply;

test("Testing 1 * 1 = 1", () => {
    expect(multiply(1, 1)).toBe(1);
});

test("Testing 55 * 33 = 1815", () => {
    expect(multiply(55, 33)).toBe(1815);
});

test("Testing -5 * 3 = -15", () => {
    expect(multiply(-5, 3)).toBe(-15);
});
