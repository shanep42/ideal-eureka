import React, {useState} from 'react';
import { validateEmail } from '../../utils/emailValidate';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const {name, email, message} = formState;


    return (
        <main id="contact">
            {/* <h1 className="lg-heading">
                Contact <span className="text-secondary">Me</span>
            </h1>
            <h2 className="sm-heading">
                This is how you can reach me.
            </h2>
            <div className="boxes">
                <div>
                    <span className="text-secondary">Email:</span> shanep42@gmail.com
                </div>
                <a href='https://github.com/shanep42'>
                    <div>
                        <span className="text-secondary">Github:</span> shanep42
                    </div>
                </a>
            </div> */}
            <form>
                        <div>
                            <label htmlFor='Name'>Name:</label>
                            <br></br>
                            <input 
                                type='text'
                                defaultValue={name}
                                name='Name'
                            />
                        </div>
                        <div>
                            <label htmlFor='email'>Email Adress:</label>
                            <br></br>
                            <input 
                                type='email'
                                defaultValue={email}
                                name='email'
                            />
                        </div>
                        <div>
                            <label htmlFor='message'>Message:</label>
                            <br></br>
                            <input 
                                type='text'
                                defaultValue={message}
                            />
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
        </main>
    )
}

export default Contact