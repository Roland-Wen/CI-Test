const add = require("../src/main");
test("Returns 2 for 1 + 1", () => {
    expect(add(1, 1)).toBe(2);
});
