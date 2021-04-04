import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

export default class Welcome extends Component {

    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    {/* <Col xs={12} sm={4} md={4}> */}
                        <Image src="logo192.png" roundedCircle />
                    {/* </Col> */}
                </Row>
                <Row className="justify-content-md-center">
                    <Col md={0}>
                        <a type="submit" className="btn btn-primary btn-block" href="/sign-in">Login</a>
                    </Col>
                    <Col md={0}>
                        <a type="submit" className="btn btn-primary btn-block" href="/sign-up">Cadastro</a>
                    </Col>
                </Row>
                
            </Container>
        );
    }
}