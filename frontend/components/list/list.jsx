import React from 'react';
import { Link } from 'react-router-dom';
import Navi from '../reusable_components/navi';
import Footer from '../reusable_components/footer';


class List extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        if (false) {
            return (
                <div className="listComponent">
                    <Navi />
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

