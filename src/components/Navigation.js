function Navigation({ currentPage, setCurrentPage }) {

    return (
        <nav>
            <ul className="nudge-left">
                <li
                    className={currentPage === 'About Me' ? 'navItem active' : 'navItem'}
                    onClick={() => setCurrentPage('About Me')}>
                    About Me
                </li>
                <li
                    className={currentPage === 'Portfolio' ? 'navItem active' : 'navItem'}
                    onClick={() => setCurrentPage('Portfolio')}>Portfolio</li>
                <li
                    className={currentPage === "Contact" ? 'navItem active' : 'navItem'}
                    onClick={() => setCurrentPage('Contact')}>Contact</li>
                <li
                    className={currentPage === "Resume" ? 'navItem active' : 'navItem'}
                    onClick={() => setCurrentPage('Resume')}>Resume</li>
            </ul>
        </nav >
    )
}

export default Navigation