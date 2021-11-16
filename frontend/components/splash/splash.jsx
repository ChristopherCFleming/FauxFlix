import React from 'react';
import { Link } from 'react-router-dom';
import Navi from '../navi/navi_container';
import Footer from '../footer/footer';


class SplashPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            activeAccordion: -1
        }
        this.handleAccordionClick = this.handleAccordionClick.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleAccordionClick(accordionNumber) { 
        return event => {
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
                <div className="splashImage">
                    <Navi />
                    <div className="splashPageContent">
                        <h1>Unlimited movies, TV <br/> shows, and more.</h1>
                        <p>Watch anywhere. Cancel anytime.</p>
                        <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
                        <div className="emailInput">
                            <input type="email" name="email" className="inputBar" value={this.state.email} placeholder="Email address" onChange={this.update("email")}></input>
                            <Link to={`/signup1?email=${this.state.email}`} id="createAccount" className="btn createAccount">Get Started<i className="fas fa-chevron-right btn-icon"></i></Link>
                        </div>
                    </div>
                    <div className="subsection" id="firstSubsectionContainer">
                        <div className="firstSubsectionText">
                            <h1>MERN Project:</h1>
                            <p className="description">Check out <a href="https://aapomegranate.herokuapp.com/#/" target="_blank">Pomegranate</a>, a recipe generator that reduces food waste in your kitchen.</p>
                        </div>
                        <a href="https://aapomegranate.herokuapp.com/#/" target="_blank"><img src={window.tvURL} alt="TV" className="TV"/></a>
                    </div>
                        <div className="secondSubsectionContainer subsection">
                            <a id="portfolio" href="https://christophercfleming.github.io/" target="_blank">
                                <img src={window.handheldURL} alt="handheld" className="handheld"/>
                            </a>
                            <div className="secondSubsectionText">
                                <h1>My Portfolio Site.</h1>
                                <p className="description">Wanna say hi? Drop on by! Resume? Si vous plait. How's the design? In a word: sublime.</p>
                            </div>
                        </div>
                        <div className="thirdSubsectionContainer subsection">
                            <div className="thirdSubsectionText">
                                <h1>Work In Progress:</h1>
                                <p className="description">Get Gov connects users with their representatives at all levels of government, increasing civic engagement.</p>
                            </div>
                            <a href="https://github.com/ChristopherCFleming" target="_blank">
                                <img src={window.allDevicesURL} alt="allDevices" className="allDevices"/>
                            </a>
                        </div>
                        <div className="fourthSubsectionContainer subsection">
                            <div className="fourthSubsectionText">
                                <h1>Frequently Asked Questions</h1>
                                <ul className="faqButtonContainer">
                                    <li>
                                        <div className="accordion">
                                            <button type="button" className={`status${this.state.activeAccordion === 1 ? "--active" : ""} accordion__button`} onClick={this.handleAccordionClick(1)}>Who Made This Amazing Site?
                                                <svg viewBox="0 0 26 26" className="svg-icon svg-icon-thin-x svg-closed" focusable="true"><path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path></svg>
                                                <div className="accordion__content">
                                                    <p>I'm Chris. Nice to meet you. I'm a multifaceted software engineer with a marketing background and an expertise in JavaScript, React, Redux, Ruby On Rails. Please enjoy this pixel perfect streaming service clone. Find me in the footer links and let me know what you think!</p>
                                                </div>
                                            </button>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="accordion">
                                            <button type="button" className={`status${this.state.activeAccordion === 2 ? "--active" : ""} accordion__button`} onClick={this.handleAccordionClick(2)}>Tell Me More!
                                                <svg viewBox="0 0 26 26" className="svg-icon svg-icon-thin-x svg-closed" focusable="true"><path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path></svg>
                                                <div className="accordion__content">
                                                    <p>I'm an avid traveller. I've found it's an excellent opportunity to welcome growth into your life, to see it from another perspective. Some highlights: searching for geishas in Kyoto, motorbiking in Hanoi, a semester in Berlin, eating goat spine in Shenyang, Charles Bridge at midnight in Prague, 3 years in Beijing, climbing Il Duomo in Florence, scuba diving in El Nido. There are so many adventures out there waiting to teach you something new, and I intend to learn as much as possible.<br/><br />In my spare time you might find me obsessing over tiny homes and lying to my mom about eating goat spine in Shenyang. She worries too much. Let's keep that bit between us.</p>
                                                </div>
                                            </button>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="accordion">
                                            <button type="button" className={`status${this.state.activeAccordion === 3 ? "--active" : ""} accordion__button`} onClick={this.handleAccordionClick(3)}>Other Projects?
                                                <svg viewBox="0 0 26 26" className="svg-icon svg-icon-thin-x svg-closed" focusable="true"><path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path></svg>
                                                <div className="accordion__content">
                                                    <p>Pomegranate is a MERN web app that helps reduce food waste by finding recipes for you to try based on the ingredients already in your kitchen.<br/><br/>Though it's still a work in progress, Get Gov is a pure JavaScript website that can connect you with your representatives at all levels of government.<br /><br />Find them in my portfolio site (link in footer) or by clicking on the pictures above.</p>
                                                </div>
                                            </button>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="accordion">
                                            <button type="button" className={`status${this.state.activeAccordion === 4 ? "--active" : ""} accordion__button`} onClick={this.handleAccordionClick(4)}>How Can I Hire This Developer?
                                                <svg viewBox="0 0 26 26" className="svg-icon svg-icon-thin-x svg-closed" focusable="true"><path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path></svg>
                                                <div className="accordion__content">
                                                    <p>Thank you for asking! I would very much so like to hear from you. Feel free to connect with me on <a id="linkedin" href="https://www.linkedin.com/in/christophercfleming/" target="_blank">LinkedIn,</a> <a href="https://angel.co/u/christopher-c-fleming" target="_blank">Angellist,</a> or check out my <a id="portfolio" href="https://christophercfleming.github.io/" target="_blank">personal portfolio</a> site.</p>
                                                </div>
                                            </button>
                                        </div>
                                    </li>
                                </ul>
                            <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
                            <div className="emailInput">
                                <input type="email" name="email" className="inputBar" value={this.state.email} placeholder="Email address" onChange={this.update("email")}></input>
                                <Link to={`/signup1?email=${this.state.email}`} id="createAccount" className="btn createAccount">Get Started<i className="fas fa-chevron-right btn-icon"></i></Link>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default SplashPage;

 