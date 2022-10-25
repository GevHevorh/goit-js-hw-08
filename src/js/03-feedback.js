import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('.feedback-form input'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));

populateTextarea();

// refs.form.addEventListener('input', e => {
//   //   console.log(e.target.name);
//   //   console.log(e.target.value);

//   formData[e.target.name] = e.target.value;
//   console.log(formData);
// });

function onFormSubmit(evt) {
  evt.preventDefault();

  if (!formData[refs.input.name] || !formData[refs.textarea.name]) {
    console.log('Заполните все поля!');
  } else {
    console.log(formData);
    console.log('Sent form');
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData[refs.input.name] = '';
    formData[refs.textarea.name] = '';
  }
}

function onTextareaInput(evt) {
  formData[evt.target.name] = evt.target.value;
  // const message = evt.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  const parsedMessage = JSON.parse(savedMessage);
  console.log(parsedMessage);
  if (savedMessage) {
    if (parsedMessage.email) {
      refs.input.value = parsedMessage.email;
      formData[refs.input.name] = parsedMessage.email;
    }
    if (parsedMessage.message)
      // console.log(savedMessage);
      refs.textarea.value = parsedMessage.message;
    formData[refs.textarea.name] = parsedMessage.message;
  }
}
