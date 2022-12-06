document.addEventListener('DOMContentLoaded', () => {

    const advancedCounter = () => {
        let privateCounter = 0;

        const plusValue = (val) => {
            privateCounter += val;
        };

        const minusValue = (val) => {
            privateCounter -= val;
        };

        const value = () => {
            return privateCounter;
        };

        return {
            plusValue,
            minusValue,
            value
        };
    };

    const usersCounter = advancedCounter();
    usersCounter.plusValue(3)
    console.log("sum(3) = ", usersCounter.value());

    usersCounter.plusValue(5)
    console.log("sum(5) = ", usersCounter.value());

    usersCounter.plusValue(20)
    console.log("sum(20) = ", usersCounter.value());

});