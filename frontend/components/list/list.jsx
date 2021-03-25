import React from 'react';
import { Link } from 'react-router-dom';
import Navi from '../reusable_components/navi';
import Footer from '../reusable_components/footer';


class List extends React.Component {
    constructor(props) {
        super(props);
        
    }

    
    componentDidMount() {
        //Reduce pull, will only run if lists aren't there. Come back to this.
        //If a user has no list, can return list id of -1, then if we find -1, we know they're new users
        this.props.lists.length || this.props.fetchLists()
    }

    render() {
        if (this.props.lists.length === 0) {
            return (
                <div className="listComponent">
                    <Navi currentUser={true} logout={this.props.logout}/>
                    <p>Nothing in your list</p>
                    <Footer />
                </div>
            )
        } else {
            return (
                <div className="listComponent">
                    <Navi currentUser={true} logout={this.props.logout}/>
                    <p>We gonna render the videos HERE!</p>
                    <Footer />
                </div>
            )
        }
    }
}

export default List;

