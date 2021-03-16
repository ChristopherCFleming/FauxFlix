import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function IndividualVideo(props) {


    if (props.video) {
        return (
            <p>hurray!</p>
        )
    } else {
        return null;
    }
}

export default IndividualVideo;