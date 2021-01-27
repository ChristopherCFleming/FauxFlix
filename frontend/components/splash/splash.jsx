import React from 'react';
import { Link } from 'react-router-dom';


class SplashPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ""
        }
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }


    render() {
        return (
            <div className="splashPage">
                <header className="splashPageHeader">
                    <img src={window.logoURL} alt="FauxFlix Logo" className="logo"/>
                    {/* <a href="#" className="btn btn-rounded">sign in</a> */}
                    <Link  id="login" className="btn" to="/login">Sign In</Link>
                </header>
                <div className="splashPageContent">
                    <h1>Unlimited movies, TV <br/> shows, and more.</h1>
                    <p>Watch anywhere. Cancel anytime.</p>
                    <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
                    <div className="emailInput">
                        <input type="email" name="email" className="inputBar" value={this.state.email} placeholder="Email address" onChange={this.update("email")} autocomplete="email"></input>
                        <Link to="/signup" id="createAccount" className="btn">Get Started<i className="fas fa-chevron-right btn-icon"></i></Link>
                    </div>
                    <a href="#" id="demoLogin" className="btn">
                        Demo Login
                    </a>
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
                                    <button type="button" className="accordion__button">What is Netflix?
                                        <svg viewBox="0 0 26 26" className="svg-icon svg-icon-thin-x svg-closed" focusable="true"><path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path></svg>
                                        <div class="accordion__content">
                                            <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. <br /> <br />You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
                                        </div>
                                    </button>
                                </div>
                            </li>
                            <li>
                                <div className="accordion">
                                    <button type="button" className="accordion__button">How much does Netflix cost?
                                        <svg viewBox="0 0 26 26" className="svg-icon svg-icon-thin-x svg-closed" focusable="true"><path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path></svg>
                                        <div class="accordion__content">
                                            <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $8.99 to $17.99 a month. No extra costs, no contracts.</p>
                                        </div>
                                    </button>
                                </div>
                            </li>
                            <li>
                                <div className="accordion">
                                    <button type="button" className="accordion__button">Where can I watch?
                                        <svg viewBox="0 0 26 26" className="svg-icon svg-icon-thin-x svg-closed" focusable="true"><path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path></svg>
                                        <div class="accordion__content">
                                            <p>Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. <br /> <br />You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                                        </div>
                                    </button>
                                </div>
                            </li>
                            <li>
                                <div className="accordion">
                                    <button type="button" className="accordion__button">How do I cancel?
                                        <svg viewBox="0 0 26 26" className="svg-icon svg-icon-thin-x svg-closed" focusable="true"><path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path></svg>
                                        <div class="accordion__content">
                                            <p>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                                        </div>
                                    </button>
                                </div>
                            </li>
                            <li>
                                <div className="accordion">
                                    <button type="button" className="accordion__button">What can I watch on Netflix?
                                        <svg viewBox="0 0 26 26" className="svg-icon svg-icon-thin-x svg-closed" focusable="true"><path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path></svg>
                                        <div class="accordion__content">
                                            <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                                        </div>
                                    </button>
                                </div>
                            </li>
                        </ul>
                        <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
                        <div className="emailInput">
                            <input type="email" name="email" className="inputBar" value={this.state.email} placeholder="Email address" onChange={this.update("email")} autocomplete="email"></input>
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

 