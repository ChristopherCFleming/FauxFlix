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


                            {/* 
                            <svg class="svg-icon" viewBox="0 0 20 20">
                                <path fill="none" d="M13.388,9.624h-3.011v-3.01c0-0.208-0.168-0.377-0.376-0.377S9.624,6.405,9.624,6.613v3.01H6.613c-0.208,0-0.376,0.168-0.376,0.376s0.168,0.376,0.376,0.376h3.011v3.01c0,0.208,0.168,0.378,0.376,0.378s0.376-0.17,0.376-0.378v-3.01h3.011c0.207,0,0.377-0.168,0.377-0.376S13.595,9.624,13.388,9.624z M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z"></path>
                            </svg>

                            <svg class="svg-icon" viewBox="0 0 20 20">
							    <path fill="none" d="M12.71,7.291c-0.15-0.15-0.393-0.15-0.542,0L10,9.458L7.833,7.291c-0.15-0.15-0.392-0.15-0.542,0c-0.149,0.149-0.149,0.392,0,0.541L9.458,10l-2.168,2.167c-0.149,0.15-0.149,0.393,0,0.542c0.15,0.149,0.392,0.149,0.542,0L10,10.542l2.168,2.167c0.149,0.149,0.392,0.149,0.542,0c0.148-0.149,0.148-0.392,0-0.542L10.542,10l2.168-2.168C12.858,7.683,12.858,7.44,12.71,7.291z M10,1.188c-4.867,0-8.812,3.946-8.812,8.812c0,4.867,3.945,8.812,8.812,8.812s8.812-3.945,8.812-8.812C18.812,5.133,14.867,1.188,10,1.188z M10,18.046c-4.444,0-8.046-3.603-8.046-8.046c0-4.444,3.603-8.046,8.046-8.046c4.443,0,8.046,3.602,8.046,8.046C18.046,14.443,14.443,18.046,10,18.046z"></path>
						    </svg> */}


                           
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
                                    <button type="button" className="faqButton">What is Netflix?
                                        <svg class="svg-icon" viewBox="0 0 20 20">
                                        <path fill="none" d="M13.388,9.624h-3.011v-3.01c0-0.208-0.168-0.377-0.376-0.377S9.624,6.405,9.624,6.613v3.01H6.613c-0.208,0-0.376,0.168-0.376,0.376s0.168,0.376,0.376,0.376h3.011v3.01c0,0.208,0.168,0.378,0.376,0.378s0.376-0.17,0.376-0.378v-3.01h3.011c0.207,0,0.377-0.168,0.377-0.376S13.595,9.624,13.388,9.624z M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z"></path>
                                        </svg>
                                        <div class="content">
                                            <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. <br /> <br />You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
                                        </div>
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="faqButton">How much does Netflix cost?
                                        <svg class="svg-icon" viewBox="0 0 20 20">
                                        <path fill="none" d="M13.388,9.624h-3.011v-3.01c0-0.208-0.168-0.377-0.376-0.377S9.624,6.405,9.624,6.613v3.01H6.613c-0.208,0-0.376,0.168-0.376,0.376s0.168,0.376,0.376,0.376h3.011v3.01c0,0.208,0.168,0.378,0.376,0.378s0.376-0.17,0.376-0.378v-3.01h3.011c0.207,0,0.377-0.168,0.377-0.376S13.595,9.624,13.388,9.624z M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z"></path>
                                        </svg>
                                        <div class="content">
                                            <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $8.99 to $17.99 a month. No extra costs, no contracts.</p>
                                        </div>
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="faqButton">Where can I watch?
                                        <svg class="svg-icon" viewBox="0 0 20 20">
                                        <path fill="none" d="M13.388,9.624h-3.011v-3.01c0-0.208-0.168-0.377-0.376-0.377S9.624,6.405,9.624,6.613v3.01H6.613c-0.208,0-0.376,0.168-0.376,0.376s0.168,0.376,0.376,0.376h3.011v3.01c0,0.208,0.168,0.378,0.376,0.378s0.376-0.17,0.376-0.378v-3.01h3.011c0.207,0,0.377-0.168,0.377-0.376S13.595,9.624,13.388,9.624z M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z"></path>
                                        </svg>
                                        <div class="content">
                                            <p>Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. <br /> <br />You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                                        </div>
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="faqButton">How do I cancel?
                                        <svg class="svg-icon" viewBox="0 0 20 20">
                                        <path fill="none" d="M13.388,9.624h-3.011v-3.01c0-0.208-0.168-0.377-0.376-0.377S9.624,6.405,9.624,6.613v3.01H6.613c-0.208,0-0.376,0.168-0.376,0.376s0.168,0.376,0.376,0.376h3.011v3.01c0,0.208,0.168,0.378,0.376,0.378s0.376-0.17,0.376-0.378v-3.01h3.011c0.207,0,0.377-0.168,0.377-0.376S13.595,9.624,13.388,9.624z M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z"></path>
                                        </svg>
                                        <div class="content">
                                            <p>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                                        </div>
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="faqButton">What can I watch on Netflix?
                                        <svg class="svg-icon" viewBox="0 0 20 20">
                                        <path fill="none" d="M13.388,9.624h-3.011v-3.01c0-0.208-0.168-0.377-0.376-0.377S9.624,6.405,9.624,6.613v3.01H6.613c-0.208,0-0.376,0.168-0.376,0.376s0.168,0.376,0.376,0.376h3.011v3.01c0,0.208,0.168,0.378,0.376,0.378s0.376-0.17,0.376-0.378v-3.01h3.011c0.207,0,0.377-0.168,0.377-0.376S13.595,9.624,13.388,9.624z M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z"></path>
                                        </svg>
                                        <div class="content">
                                            <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                                        </div>
                                    </button>
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
                                <img src={window.personURL} alt="Portfolio" className="contactIcon"></img>
                            </a>
                            <a id="linkedin" href="https://www.linkedin.com/in/christophercfleming/" target="_blank">
                                <img src={window.linkedinURL} alt="LinkedIn" className="contactIcon"></img>
                            </a>
                            <a id="github" href="https://github.com/ChristopherCFleming" target="_blank">
                                <img src={window.githubURL} alt="GitHub" className="contactIcon"></img>
                            </a>
                            <a href="https://angel.co/u/christopher-c-fleming">
                                <img src={window.angellist} alt="AngelList" target="_blank" className="contactIcon"></img>
                            </a>
                            <i className="fab fa-linkedin"></i>
                        </div>
                    </footer>
                </div>
        )
    }
}

export default SplashPage;

 