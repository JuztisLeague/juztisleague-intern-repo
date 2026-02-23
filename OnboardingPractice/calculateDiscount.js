function calculateDiscount(price, discountPercent) {

    if (price < 0) {
        throw new Error("Invalid price");
    }

    return price - (price * discountPercent / 100);

}

module.exports = calculateDiscount;
