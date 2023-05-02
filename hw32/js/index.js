import { Validator } from './validator.js';
import { signupFormConfig } from './form-configs.js';

let form = document.querySelector('.signup-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    [...form.elements].forEach( element => {
        if(element.type !== 'submit') {
            let errorBox = form.querySelector(`[data-for="${element.name}"]`);

            errorBox.innerHTML = '';
            element.classList.remove('error');
        }
    })

    let isValid = Validator.validate(form, signupFormConfig);

    if(!isValid) {
        let errors = Validator.getErrors(form.name);

        Object.entries(errors).forEach(([name, errorObject]) => {
            let errorBox = form.querySelector(`[data-for="${name}"]`);

            form.elements[name].classList.add('error');
            // errorBox.innerHTML = Object.values(errorObject).map( message => `<span>${message}</span>`).join('<br>');

            const [ currentError ] = Object.values(errorObject); // I think that more user-friendly
            errorBox.innerHTML = currentError;
        });
    }

    // form.elements => value => {} => server
});

form.addEventListener('input', (event) => {
    let target = event.target;
    let errorBox = form.querySelector(`[data-for="${target.name}"]`);

    let isValid = Validator.validate(
        form,
        { [target.name]: signupFormConfig[target.name] },
    );

    if(!isValid) {

        let errors = Validator.getErrors(form.name)?.[target.name];
        // let fullMessage = Object.values(errors).map( message => `<span>${message}</span>`).join('<br>');
        const [ currentError ] = Object.values(errors); // I think that more user-friendly

        console.log(errors);

        target.classList.add('error');
        errorBox.innerHTML = currentError;

        return;
    }

    errorBox.innerHTML = '';
    target.classList.remove('error');
})