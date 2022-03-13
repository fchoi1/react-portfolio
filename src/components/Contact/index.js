import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [errorMessage, setErrorMessage] = useState('');

  const [formState, setFormState] = useState({
    email: '',
    name: '',
    message: ''
  });

  const { name, email, message } = formState;

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required!`);
      } else {
        setErrorMessage('');
      }
    }

    // set form is no error
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            required
            onBlur={handleChange}
          ></input>
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type={'text'}
            name="email"
            defaultValue={email}
            onBlur={handleChange}
            required
          ></input>
        </div>
        <div>
          <label>Message: </label>
          <textarea
            name="message"
            rows="6"
            defaultValue={message}
            onBlur={handleChange}
            required
          ></textarea>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
