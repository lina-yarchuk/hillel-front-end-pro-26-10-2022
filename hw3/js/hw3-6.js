document.addEventListener('DOMContentLoaded', () => {
    const hoursInput = prompt('Enter hour(s)', '');
    const hoursInputTypeofNumber = Number(hoursInput);
    const sec = hoursInputTypeofNumber * 3600;

    alert(`In ${hoursInput} hour(s) - ${sec} seconds.`);
});