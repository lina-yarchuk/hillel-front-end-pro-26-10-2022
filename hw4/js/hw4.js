document.addEventListener('DOMContentLoaded', () => {
    const countryCapitals = {
        kyiv: 'Ukraine',
        washington: 'United States of America',
        london: 'Great Britain'
    };

    const champions = {
        tennis: 'Venus Ebony Starr Williams',
        football: 'Cristiano Ronaldo dos Santos Aveiro',
        volleyball: 'Charles Frederick "Karch" Kiraly'
    };

    const userBirthYear = Number(prompt('Year of your birth?', ''));

    if (!userBirthYear) {
        alert(`It is a pity that you did not enter the year of your birth.`);
    }

    const userCity = prompt('In which city do you live?', '');

    if (!userCity) {
        alert(`It is a pity that you did not enter your city.`);
    }

    const userSport = prompt('What is your favorite sport?', '');

    if (!userSport) {
        alert(`It is a pity that you did not enter your favorite sport.`);
    }
    // Method getFullYear() returns the year of the specified date in local time.
    const currentYear = new Date().getFullYear();
    const userAge = userBirthYear ? currentYear - userBirthYear : 0;
    const ageMessage = userAge ? `Your age is ${userAge}. ` : '';

    // Method toLowerCase() returns a string value converted to lower case.
    const city = userCity ? userCity.toLowerCase() : '';
    const cityMessage = countryCapitals[city] ?
        `You live in the capital of ${countryCapitals[city]}.` :
        `You live in the ${userCity || 'unknown'} city.` ;

    const sport = userSport ? userSport.toLowerCase() : '';
    const sportMessage = champions[sport] ? ` Cool! Do you want to become ${champions[sport]}?` : '';

    alert(`${ageMessage}${cityMessage}${sportMessage}`);
});