import React from 'react'

const Contact = () => {
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
                    <span className="text-secondary">Email:</span> shanep42@gmail.com
                </div>
                <a href='https://github.com/shanep42'>
                    <div>
                        <span className="text-secondary">Github:</span> shanep42
                    </div>
                </a>
            </div>

        </main>
    )
}

export default Contact