import ValidationError from "./validation-error.js";

export const Validator = {
    errors: {},

    validators: {
        isNotEmpty: {
            validate: value => !!value,
            message: 'The field can\'t be a blank',
            errorType: 'required'
        },
        minLength: length => ({
            validate: value => value.length >= length,
            message: `The field should be at least ${length} character${length > 1 ? 's' : ''}`,
            errorType: 'max'
        }),
        maxLength: length => ({
            validate: value => value.length <= length,
            message: `The field should be max of ${length} characters`,
            errorType: 'max'
        }),
        isEmail: {
            validate: email => email.toLowerCase().match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            ),
            message: 'Wrong email format',
            errorType: 'email'
        },
        hasLowerCase: {
            validate: value => (/[a-z]/.test(value)),
            message: 'The field should contain at least 1 lower case character',
            errorType: 'lowercase'
        },
        hasUpperCase: {
            validate: value => value.match(/[A-Z]/),
            message: 'The field should contain at least 1 upper case character',
            errorType: 'uppercase'
        },
        hasNumber: {
            validate: value => (/[0-9]/.test(value)),
            message: 'The field should contain at least 1 number',
            errorType: 'number'
        },
        hasSpecial: {
            validate: value => value.match(/[!@#$%^&*]/),
            message: 'The field should contain  at least 1 special character',
            errorType: 'special'
        },
        equalTo: fieldName => ({
            validate: (elements, value) => value === elements[fieldName].value,
            message: `The field should equal to "${fieldName}" field`,
            errorType: 'equal'
        })
    },

    validate(form, config) {
        if(!(form instanceof HTMLFormElement)) {
            throw new ValidationError('You should provide HTML form');
        }

        let elements = form.elements;

        this.errors[form.name] = {};

        for (const [inputName, inputValidators] of Object.entries(config)) {
            if(!inputValidators.length) {
                continue;
            }

            if(!elements[inputName]) {
                throw new ValidationError(`The "${inputName}" field doesn't exist in the "${form.name}"`);
            }

            const value = elements[inputName].value;
            let errors = this.errors[form.name];

            inputValidators.forEach(({ validate, message, errorType}) => {
                const error = {
                    ...errors[inputName],
                    [errorType]: message,
                };


                if (errorType === 'equal') {
                    if(!validate(elements, value)) {
                        errors[inputName] = error;
                    }

                    return;
                }


                if(!validate(value)) {
                    errors[inputName] = error;
                }
            });
        }

        return !this._hasError(form.name);
    },

    getErrors(formName) {
        return this.errors[formName];
    },

    _hasError(formName) {
        return !!Object.keys(this.errors[formName]).length;
    }
}

export const {
    isNotEmpty,
    minLength,
    maxLength,
    isEmail,
    hasLowerCase,
    hasUpperCase,
    hasNumber,
    hasSpecial,
    equalTo
} = Validator.validators;