import React from 'react'

function Footer() {
    return (
        <div className="icons">
            {/* I don't have a Facebook or Twitter, but I was told to include a third social network, so here's where I'd put them */}
            <a href="#!">
                <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="#!">
                <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/shane-peterson-17454321/" target='_blank'>
                <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://github.com/shanep42" target='_blank'>
                <i className="fab fa-github fa-2x"></i>
            </a>
        </div>
    )
}

export default Footer