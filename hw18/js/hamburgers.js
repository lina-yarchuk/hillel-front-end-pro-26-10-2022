class Hamburger {
    // To prevent tautology,
    // I changed the structure of the initial data
    // STUFFING_CHEESE, STUFFING_SALAD, etc
    // to
    // STUFFING.CHEESE, STUFFING.SALAD, etc

    static SIZE = {
        SMALL: { price: 50, calorie: 20 },
        BIG: { price: 100, calorie: 40 }
    }

    static STUFFING = {
        CHEESE: { price: 10, calorie: 20 },
        SALAD: { price: 20, calorie: 5 },
        POTATO: { price: 15, calorie: 10 }
    }

    static TOPPING = {
        SAUCE: { price: 15, calorie: 0 },
        MAYO: { price: 20, calorie: 5 }
    }

    #price = null;
    #calorie = null;
    #topping = [];

    constructor(size, stuffing) {
        this.#price = size.price + stuffing.price;
        this.#calorie = size.calorie + stuffing.calorie;
    }

    get price() {
        return this.calculatePrice();
    }

    get calorie() {
        return this.calculate();
    }

    addTopping(topping) {
        this.#topping = [...this.#topping, topping];
    }

    calculate() {
        return this.#calorie + this.#calculateTopping('calorie');
    }

    calculatePrice() {
        return this.#price + this.#calculateTopping('price');
    }

    #hasTopping() {
        return this.#topping && !!this.#topping.length;
    }

    #getToppingTotal(key) {
        return this.#topping.reduce((total, topping) => total + topping[key], 0);
    }

    #calculateTopping(key) {
        return this.#hasTopping() ? this.#getToppingTotal(key) : 0;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = new Hamburger(Hamburger.SIZE.SMALL, Hamburger.STUFFING.CHEESE);

    console.group('Price without toppings');
    console.log(`Price: ${hamburger.calculatePrice()}`); // also, we can use getter hamburger.price
    console.log(`Calories: ${hamburger.calculate()}`); // also, we can use getter hamburger.calorie
    console.groupEnd();

    hamburger.addTopping(Hamburger.TOPPING.MAYO);

    console.group('Price with mayo topping');
    console.log(`Price: ${hamburger.calculatePrice()}`);
    console.log(`Calories: ${hamburger.calculate()}`);
    console.groupEnd();

    hamburger.addTopping(Hamburger.TOPPING.SAUCE);

    console.group('Price with mayo and sauce toppings');
    console.log(`Price with mayo and sauce: ${hamburger.calculatePrice()}`);
    console.log(`Calories with mayo and sauce: ${hamburger.calculate()}`);
    console.groupEnd();
});