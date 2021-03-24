import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../reusable_components/header';
import Footer from '../reusable_components/footer';


function List(props) {

    if (props.videoList.length === 0) {
        return (
            <div className="listComponent">
                <Header />
                <p>Nothing in your list</p>
                <Footer />
            </div>
        )
    } else {
        return (
            <div className="listComponent">
                <Header />
                <p>We gonna render the videos HERE!</p>
                <Footer />
            </div>
        )
    }
}

export default List;


//Class Component Below:

// class List extends React.Component {
//     constructor(props) {
//         super(props);
        
//     }

//     render() {
//         return (
//             <div className="listComponent">
//                  <Header />

//                  <Footer />
//             </div>
//         )
//     }
// }

// export default List;

