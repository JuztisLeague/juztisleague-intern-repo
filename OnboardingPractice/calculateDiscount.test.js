const calculateDiscount = require('./calculateDiscount');


test("10% discount test", () => {

    expect(calculateDiscount(100, 10)).toBe(90);

});


test("0% discount test", () => {

    expect(calculateDiscount(100, 0)).toBe(100);

});


test("Invalid price test", () => {

    expect(() => calculateDiscount(-10, 10)).toThrow("Invalid price");

});
