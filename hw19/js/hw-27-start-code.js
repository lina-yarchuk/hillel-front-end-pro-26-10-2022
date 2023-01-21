window.addEventListener('DOMContentLoaded', () => {

    function getPasswordFromUser(success, fail) {
        let password = prompt("Password?", '');
        if (password === "rockstar") success();
        else fail();
    }

    let user = {
        fName: 'Andrew',

        loginSuccess() {
            alert(`${this.fName} logged in`);
        },

        loginFail() {
            alert(`${this.fName} failed to log in`);
        },

    };

    //getPasswordFromUser(user.loginSuccess, user.loginFail);
    getPasswordFromUser(user.loginSuccess.bind(user), user.loginFail.bind(user));

    // bind метод функції який підкидує контекст, до функції з якою ми хочемо працювати,
    // і повертає нам функцію в якій вже є записаній цей потрібний нам контекст,
    // але при цьому він не викликае цю функцію.
    // bind змінює контекст user
    // очікуваний результат:'Andrew'

});