import React, { useState } from 'react';
import { validateEmail } from '../../utils/emailValidate';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    // I expected to need this so that the form could be updated as you type, but I seem to just... not?
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required`);
                } else {
                    setErrorMessage('');
                }
            }
        }
    }

    function handleBlank(e) {
        if (e.target.name === 'name' || e.target.name === 'message' || e.target.name === 'Email') {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`)
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    return (
        <main id="contact">
            <h1 className="lg-heading">
                Contact <span className="text-secondary">Me</span>
            </h1>
            <h2 className="sm-heading">
                This is how you can reach me.
            </h2>
            <div className="boxes">
                <div>
                    <span className="text-secondary">Email:</span> <a href='mailto:shanep42@gmail.com'>shanep42@gmail.com</a>
                </div>
                <a href='https://github.com/shanep42'>
                    <div>
                        <span className="text-secondary">Github:</span> shanep42
                    </div>
                </a>
            </div>
            {/* <form>
                <div>
                    <label htmlFor='Name'>Name:</label>
                    <br></br>
                    <input 
                        type='text'
                        defaultValue={name}
                        name='Name'
                        onBlur={handleBlank}
                    />
                </div>
                <div>
                    <label htmlFor='email'>Email Adress:</label>
                    <br></br>
                    <input 
                        type='email'
                        defaultValue={email}
                        name='Email'
                        onBlur={handleBlank}
                    />
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <br></br>
                    <input 
                        type='text'
                        defaultValue={message}
                        name='Message'
                        onBlur={handleBlank}
                    />
                </div>
                {errorMessage && (
                    <div>
                        <p>{errorMessage}</p>
                    </div>
                )}
                <button type='submit'>Submit</button>
            </form> */}
        </main>
    )
}

export default Contact