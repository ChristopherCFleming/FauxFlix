import React from 'react';
import { Link } from 'react-router-dom';

class Navi extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            background: false,
            searchBarOpen: false,
            queryString: "", 
        };
        this.searchInput = React.createRef();
        this.handleClickClose = this.handleClickClose.bind(this);
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.search = this.search.bind(this);
        this.searchDebounce = this.searchDebounce.bind(this);
        this.endSession = this.endSession.bind(this);
        this.updateValue = this.updateValue.bind(this);
        this.test = this.test.bind(this);
        this.debounce = this.debounce.bind(this);
    }

    handleScroll() {
        if (window.scrollY > 50) {
            this.setState({ background: true });
        } else {
            this.setState({ background: false });
        }
    }

    componentDidMount() {
        if (this.props.homepage) {
            window.addEventListener("scroll", this.handleScroll);
        }
    }

    componentWillUnmount() {
        if (this.props.homepage) {
            window.removeEventListener("scroll", this.handleScroll);
        }
    }

    updateValue(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleClickClose(e) {
        this.setState({ queryString: "" })
        this.setState({ searchBarOpen: false });
    }

    handleClickOpen(e) {
        if (this.state.searchBarOpen === false) {
            this.searchInput.current.focus();
            this.setState({ searchBarOpen: true });
            e.target.value = '';
        }
    }

    search() {
        if (this.state.queryString === '') {
            this.props.history.push('/browse');
        } else {
            this.props.history.push(`search?q=${this.state.queryString}`);
        }
    }

    test(event) {
        console.log(event);
    }

    // searchDebounce(e) {
    //     if (timer) {
    //         clearTimeout(timer);
    //     }
    //     let timer = null;
    //     timer = setTimeout(() => this.search(e), 3000);
    // }

    searchDebounce() {
        this.debounce(() => this.search());
    }

    debounce(func, timeout = 3000){
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
    }


    endSession() {
        this.props.logout();
    }

    render() {
        if (this.props.loggedIn) {
            return (
                <header className={`pageHeader loggedIn ${this.state.background ? "active" : ""}`}>
                    <div className="firstSection">
                        <Link to="/browse"><img src={window.logoURL} alt="FauxFlix Logo" className="logo"/></Link>
                        <div className="subNavi">
                            <Link to="/browse" className="headerLink">Home </Link>
                            <Link to="/list" className="headerLink">My List </Link>
                        </div>
                    </div>
                    <div className="secondSection">
    
                        <div className="searchContainer">
                            <div className="search" ref={this.searchMovie}>
                                <form onSubmit={this.search}>
                                    <input
                                        id="searchEle"
                                        onChange={this.updateValue("queryString")}
                                        className={this.state.searchBarOpen ? 'openedInput' : ''}
                                        type="text"
                                        placeholder="Title, Description"
                                        autoFocus
                                        value={this.state.queryString}
                                        onInput={this.searchDebounce}
                                        ref={this.searchInput}>
                                        
                                    </input>
                                    <i onClick={this.handleClickOpen} className={this.state.searchBarOpen ? 'fas fa-search openedIcon' : 'fas fa-search'}/>
                                    <i onClick={this.handleClickClose} id="exitIcon" className={this.state.searchBarOpen ? 'far fa-times-circle' : ''}></i>
                                </form>
                            </div>
                        </div>
                        <div className="profileSection">
                            <img className="profilePic" src={window.profile_pic} alt="Profile Pic" />
                            <i className="fas fa-caret-down" id="downCaret"></i>
                            <ul className="profileDropdown">
                                <li className="dropdownItem">
                                    <a href="https://christophercfleming.github.io/" target="_blank">Portfolio</a>
                                </li>
                                <li className="dropdownItem">
                                    <a id="linkedin" href="https://www.linkedin.com/in/christophercfleming/" target="_blank">LinkedIn</a>
                                </li>
                                <li className="dropdownItem">
                                    <a id="github" href="https://github.com/ChristopherCFleming" target="_blank">Github</a>
                                </li>
                                <li className="dropdownItem secondToLast">
                                    <a href="https://angel.co/u/christopher-c-fleming" target="_blank">AngelList</a>
                                </li>
                                <li className="dropdownItem Last" onClick={this.endSession}>Log Out</li>
                            </ul>
                        </div>
    
                    </div>
                </header>
            )
    
        } else {
            return (
                <header className="pageHeader">
                    <Link to="/"><img src={window.logoURL} alt="FauxFlix Logo" className="logo"/></Link>
                    <Link  id="login" className="btn" to="/login">Sign In</Link>
                </header>
            )
        }
    }
}

export default Navi;