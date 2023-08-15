import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector('[name="email"]');
const messageInput = form.querySelector('[name="message"]');

const saveFormState = () => {
    const formData = {
        email: emailInput.value,
        message: messageInput.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const loadFormState = () => {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        const formData = JSON.parse(savedData);
        emailInput.value = formData.email;
        messageInput.value = formData.message;
    }
};
const throttleSaveFormState = throttle(saveFormState, 500);

window.addEventListener('DOMContentLoaded', () => {
    loadFormState();
    emailInput.addEventListener('input', throttleSaveFormState);
    messageInput.addEventListener('input', throttleSaveFormState);
});



form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Form submited with data:', {
        email: emailInput.value,
        message: messageInput.value,
    });
    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageInput.value = '';
    throttleSaveFormState();
});