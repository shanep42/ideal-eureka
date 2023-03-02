import { useState } from 'react';
import portrait from '../assets/img/portrait.png'

function Menu({ currentPage, setCurrentPage }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <header>
            <div class={menuOpen ? "menu-btn close" : "menu-btn"} onClick={toggleMenu}>
                <div class="btn-line"></div>
                <div class="btn-line"></div>
                <div class="btn-line"></div>
            </div>

            <nav class={menuOpen ? "menu show" : "menu"}>
                <div class={menuOpen ? "menu-branding show" : "menu-branding"}>
                    <div class="portrait">
                        <img src={portrait} alt='Shane' className='bio-image' />
                    </div>
                </div>
                <ul class={menuOpen ? "menu-nav show" : "menu-nav"}>
                    <li class={menuOpen ? "nav-item show" : "nav-item"}>
                        <div onClick={() => {
                            setCurrentPage('Home');
                            toggleMenu();
                        }
                        } class="nav-link">
                            Home
                        </div>
                    </li>
                    <li class={menuOpen ? "nav-item show" : "nav-item"}>
                        <div onClick={() => {
                            setCurrentPage('About Me');
                            toggleMenu();
                        }
                        } class="nav-link">
                            About Me
                        </div>
                    </li>
                    <li class={menuOpen ? "nav-item show" : "nav-item"}>
                        <div onClick={() => {
                            setCurrentPage('Portfolio');
                            toggleMenu();
                        }
                        } class="nav-link">
                            My Work
                        </div>
                    </li>
                    <li class={menuOpen ? "nav-item show" : "nav-item"}>
                        <div onClick={() => {
                            setCurrentPage('Contact');
                            toggleMenu();
                        }
                        } class="nav-link">
                            How To Reach Me
                        </div>
                    </li>
                    <li class={menuOpen ? "nav-item show" : "nav-item"}>
                        <div onClick={() => {
                            setCurrentPage('Resume');
                            toggleMenu();
                        }
                        } class="nav-link">
                            Resume
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Menu