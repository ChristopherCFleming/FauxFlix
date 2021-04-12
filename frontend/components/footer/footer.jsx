import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="contactLinks">
                <a id="portfolio" href="https://christophercfleming.github.io/" target="_blank">
                    <i className="fas fa-user contactIcon"></i>
                </a>
                <a id="linkedin" href="https://www.linkedin.com/in/christophercfleming/" target="_blank">
                    <i className="fab fa-linkedin contactIcon"></i>
                </a>
                <a id="github" href="https://github.com/ChristopherCFleming" target="_blank">
                    <i className="fab fa-github-square contactIcon"></i>
                </a>
                <a href="https://angel.co/u/christopher-c-fleming" target="_blank">
                    <i className="fab fa-angellist contactIcon"></i>
                </a>
            </div>
        </footer>
    )
}

export default Footer;