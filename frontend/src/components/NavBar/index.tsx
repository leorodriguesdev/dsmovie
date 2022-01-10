import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css'


export function NavBar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/leorodriguesdev" target="_blank" rel="noreferrer">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/leorodriguesdev</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}