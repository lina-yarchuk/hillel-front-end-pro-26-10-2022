import {
    isNotEmpty,
    minLength,
    maxLength,
    isEmail,
    hasLowerCase,
    hasUpperCase,
    hasNumber,
    hasSpecial,
    equalTo
} from './validator.js';

export const signupFormConfig = {
    'username': [isNotEmpty, minLength(3), maxLength(25)],
    'email': [isNotEmpty, isEmail],
    'password': [isNotEmpty, minLength(8), hasLowerCase, hasUpperCase, hasNumber, hasSpecial],
    'confirmPassword': [isNotEmpty, equalTo('password')]
};