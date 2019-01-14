describe("Drink About Challenge", function() {
    var da = new DrinkAbout;

    describe("Test the age appropriate drink", function() {
        it("should return Sorry. I can’t tell what drink because that age is incorrect!", function() {
            expect(da.whatCanIDrink(-1)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        it("should return Drink Toddy", function () {
            expect(da.whatCanIDrink(0)).toBe("Drink Toddy");
        });
        it("should return Drink Toddy", function () {
            expect(da.whatCanIDrink(1)).toBe("Drink Toddy");
        });
        it("should return Drink Toddy", function () {
            expect(da.whatCanIDrink(13)).toBe("Drink Toddy");
        });
        it("should return Drink Toddy", function () {
            expect(da.whatCanIDrink(14)).toBe("Drink Coke");
        });
        it("should return Drink Toddy", function () {
            expect(da.whatCanIDrink(17)).toBe("Drink Coke");
        });
        it("should return Drink Toddy", function () {
            expect(da.whatCanIDrink(18)).toBe("Drink Beer");
        });
        it("should return Drink Toddy", function () {
            expect(da.whatCanIDrink(20)).toBe("Drink Beer");
        });
        it("should return Drink Toddy", function () {
            expect(da.whatCanIDrink(21)).toBe("Drink Whisky");
        });
        it("should return Drink Toddy", function () {
            expect(da.whatCanIDrink(85)).toBe("Drink Whisky");
        });
        it("should return Drink Toddy", function () {
            expect(da.whatCanIDrink(129)).toBe("Drink Whisky");
        });
        it("should return Drink Toddy", function () {
            expect(da.whatCanIDrink(130)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
    });
});