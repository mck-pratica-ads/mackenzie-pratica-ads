import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import User from "./user.component";

export default class ItemList extends Component {
    render() {
        var { title, items } = this.props;
        
        return (
            <div class="card border-dark m-5">
                <div class="card-header">  {title} </div>            
                <Row>
                {items.map((w, i) => {
                    return <Col> <User item={w} /> </Col>
                })}  
                </Row>              
            </div>
        );
    }
}