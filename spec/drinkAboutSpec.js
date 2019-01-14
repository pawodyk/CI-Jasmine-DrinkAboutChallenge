describe("Drink About Challenge", function() {
    var da = new DrinkAbout;

    describe("Test the age appropriate drink", function() {
        it("input -100 should return Sorry. I can’t tell what drink because that age is incorrect!", function () {
            expect(da.whatCanIDrink(-100)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        it("input -1 should return Sorry. I can’t tell what drink because that age is incorrect!", function() {
            expect(da.whatCanIDrink(-1)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        it("input 0 should return Drink Toddy", function () {
            expect(da.whatCanIDrink(0)).toBe("Drink Toddy");
        });
        it("input 1 should return Drink Toddy", function () {
            expect(da.whatCanIDrink(1)).toBe("Drink Toddy");
        });
        it("input 13 should return Drink Toddy", function () {
            expect(da.whatCanIDrink(13)).toBe("Drink Toddy");
        });
        it("input 14 should return Drink Coke", function () {
            expect(da.whatCanIDrink(14)).toBe("Drink Coke");
        });
        it("input 17 should return Drink Coke", function () {
            expect(da.whatCanIDrink(17)).toBe("Drink Coke");
        });
        it("input 18 should return Drink Beer", function () {
            expect(da.whatCanIDrink(18)).toBe("Drink Beer");
        });
        it("input 20 should return Drink Beer", function () {
            expect(da.whatCanIDrink(20)).toBe("Drink Beer");
        });
        it("input 21 should return Drink Whisky", function () {
            expect(da.whatCanIDrink(21)).toBe("Drink Whisky");
        });
        it("input 80 should return Drink Whisky", function () {
            expect(da.whatCanIDrink(80)).toBe("Drink Whisky");
        });
        it("input 129 should return Drink Whisky", function () {
            expect(da.whatCanIDrink(129)).toBe("Drink Whisky");
        });
        it("input 130 should return Sorry. I can’t tell what drink because that age is incorrect!", function () {
            expect(da.whatCanIDrink(130)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        it("input 255 should return Sorry. I can’t tell what drink because that age is incorrect!", function () {
            expect(da.whatCanIDrink(255)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        it("input 500 should return Sorry. I can’t tell what drink because that age is incorrect!", function () {
            expect(da.whatCanIDrink(500)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        it("input in String format should return Sorry. I can’t tell what drink because that age is incorrect!", function () {
            expect(da.whatCanIDrink("some String")).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
    });
});