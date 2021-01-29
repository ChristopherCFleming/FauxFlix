import React from 'react';
import { Link } from 'react-router-dom';


class SplashPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            activeAccordion: -1
        }
        this.demoLogin = this.demoLogin.bind(this);
        this.handleAccordionClick = this.handleAccordionClick.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    demoLogin() {
        const sampleInfo = {
            email: "testing1@gmail.com",
            password: "testing1"
        }
        this.props.login(sampleInfo);
    }

    handleAccordionClick(accordionNumber) { 
        return event => {
            event.preventDefault()
            if (this.state.activeAccordion === accordionNumber) {
                this.setState({activeAccordion: -1})
            } else {
                this.setState({activeAccordion: accordionNumber})
            }
        }
    }




    render() {
        return (
            <div className="splashPage">
                <header className="splashPageHeader">
                    <img src={window.logoURL} alt="FauxFlix Logo" className="logo"/>
                    <Link  id="login" className="btn" to="/login">Sign In</Link>
                </header>
                <div className="splashPageContent">
                    <h1>Unlimited movies, TV <br/> shows, and more.</h1>
                    <p>Watch anywhere. Cancel anytime.</p>
                    <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
                    <div className="emailInput">
                        <input type="email" name="email" className="inputBar" value={this.state.email} placeholder="Email address" onChange={this.update("email")}></input>
                        <Link to="/signup" id="createAccount" className="btn">Get Started<i className="fas fa-chevron-right btn-icon"></i></Link>
                    </div>
                    <Link to="/videos" id="demoLogin" className="btn" onClick={this.demoLogin}>
                        Demo Login
                    </Link>
                </div>
                <div className="firstSubsectionContainer subsection">
                    <div className="firstSubsectionText">
                        <h1>Enjoy on your TV.</h1>
                        <p className="description">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                    </div>
                    <img src={window.tvURL} alt="TV" className="TV"/>
                </div>
                <div className="secondSubsectionContainer subsection">
                    <img src={window.handheldURL} alt="handheld" className="handheld"/>
                    <div className="secondSubsectionText">
                        <h1>Download your shows to watch offline.</h1>
                        <p className="description">Save your favorites easily and always have something to watch.</p>
                    </div>
                </div>
                <div className="thirdSubsectionContainer subsection">
                    <div className="thirdSubsectionText">
                        <h1>Watch everywhere.</h1>
                        <p className="description">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</p>
                    </div>
                    <img src={window.allDevicesURL} alt="allDevices" className="allDevices"/>
                </div>
                <div className="fourthSubsectionContainer subsection">
                    <div className="fourthSubsectionText">
                        <h1>Frequently Asked Questions</h1>
                        <ul className="faqButtonContainer">
                            <li>
                                <div className="accordion">
                                    <button type="button" className={`status${this.state.activeAccordion === 1 ? "--active" : ""} accordion__button`} onClick={this.handleAccordionClick(1)}>About Me
                                        <svg viewBox="0 0 26 26" className="svg-icon svg-icon-thin-x svg-closed" focusable="true"><path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path></svg>
                                        <div className="accordion__content">
                                            <p>I'm Chris. Nice to meet you. I'm a multifaceted software engineer with a marketing background and an expertise in JavaScript, React, Redux, Ruby On Rails. Please enjoy this pixel perfect streaming service clone. Find me in the links below and let me know what you think!</p>
                                        </div>
                                    </button>
                                </div>
                            </li>
                            <li>
                                <div className="accordion">
                                    <button type="button" className={`status${this.state.activeAccordion === 2 ? "--active" : ""} accordion__button`} onClick={this.handleAccordionClick(2)}>Inspiration
                                        <svg viewBox="0 0 26 26" className="svg-icon svg-icon-thin-x svg-closed" focusable="true"><path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path></svg>
                                        <div className="accordion__content">
                                            <p>I'm an avid traveller. I've found it's an excellent opportunity to welcome growth into your life, to see it from another perspective. Some highlights: searching for geishas in Kyoto, motorbiking in Hanoi, a semester in Berlin, eating goat spine in Shenyang, Charles Bridge at midnight in Prague, 3 years in Beijing, climbing Il Duomo in Florence, scuba diving in El Nido. There are so many adventures out there waiting to teach you something new, and I intend to learn as much as possible.<br/><br />In my spare time you might find me obsessing over tiny homes and lying to my mom about eating goat spine in Shenyang. She worries too much. Let's keep that bit between us.</p>
                                        </div>
                                    </button>
                                </div>
                            </li>
                            <li>
                                <div className="accordion">
                                    <button type="button" className={`status${this.state.activeAccordion === 3 ? "--active" : ""} accordion__button`} onClick={this.handleAccordionClick(3)}>Connect With Me
                                        <svg viewBox="0 0 26 26" className="svg-icon svg-icon-thin-x svg-closed" focusable="true"><path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path></svg>
                                        <div className="accordion__content">
                                            <p>I'm always up for meeting new people. Connect with me on LinkedIn or AngelList by clicking the icons in the footer.</p>
                                        </div>
                                    </button>
                                </div>
                            </li>
                            <li>
                                <div className="accordion">
                                    <button type="button" className={`status${this.state.activeAccordion === 4 ? "--active" : ""} accordion__button`} onClick={this.handleAccordionClick(4)}>Other Projects
                                        <svg viewBox="0 0 26 26" className="svg-icon svg-icon-thin-x svg-closed" focusable="true"><path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path></svg>
                                        <div className="accordion__content">
                                            <p>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                                        </div>
                                    </button>
                                </div>
                            </li>
                            <li>
                                <div className="accordion">
                                    <button type="button" className={`status${this.state.activeAccordion === 5 ? "--active" : ""} accordion__button`} onClick={this.handleAccordionClick(5)}>What can I watch on Netflix?
                                        <svg viewBox="0 0 26 26" className="svg-icon svg-icon-thin-x svg-closed" focusable="true"><path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path></svg>
                                        <div className="accordion__content">
                                            <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                                        </div>
                                    </button>
                                </div>
                            </li>
                        </ul>
                        <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
                        <div className="emailInput">
                            <input type="email" name="email" className="inputBar" value={this.state.email} placeholder="Email address" onChange={this.update("email")}></input>
                            <Link to="/signup" id="createAccount" className="btn">Get Started<i className="fas fa-chevron-right btn-icon"></i></Link>
                        </div>
                    </div>
                </div>
                <footer className="splashFooter">
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
            </div>
        )
    }
}

export default SplashPage;

 