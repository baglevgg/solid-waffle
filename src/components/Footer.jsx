"use client";
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'LinkedIn',
            url: 'https://np.linkedin.com/in/gaurav-dhakal-851b7a373 ',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
            )
        },
        {
            name: 'GitHub',
            url: 'https://github.com/imgauravdhakal',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                </svg>
            )
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/imgauravdhakal',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            )
        }
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-main">
                        <h3 className="footer-brand">Gaurav Dhakal</h3>
                        <p className="footer-bio">
                            AI Engineer & Data Scientist
                        </p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-section">
                            <h4 className="footer-heading">Links</h4>
                            <ul className="footer-list">
                                <li><a href="#about">About</a></li>
                                <li><a href="#skills">Expertise</a></li>
                                <li><a href="#contact">Contact</a></li>
                                <li><a href="https://sdj.com.np" target="_blank" rel="noopener noreferrer">sdj.com.np</a></li>
                            </ul>
                        </div>

                        <div className="footer-section">
                            <h4 className="footer-heading">Connect</h4>
                            <ul className="footer-list social-links">
                                {socialLinks.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="social-link"
                                            aria-label={link.name}
                                        >
                                            <span className="social-icon">{link.icon}</span>
                                            <span>{link.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} Gaurav Dhakal
                    </p>
                    <button onClick={scrollToTop} className="back-to-top" aria-label="Back to top">
                        ↑
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

