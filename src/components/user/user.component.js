import React, { Component } from "react";
import { Image } from 'react-bootstrap';

export default class User extends Component {
    render() {
        var { item } = this.props;
        
        return (
            <div className="m-2">
                <Image src="movie_img.svg" roundedCircle fluid/>
                <h6> {item.name} </h6>
            </div>
        );
    }
}