import React, { Component } from "react";
import { Spinner, Alert } from 'react-bootstrap';
import LoginService from "../services/LoginService";

export default class Login extends Component {

    constructor(props){
        super(props);
        this.state ={
            username: undefined,
            password: undefined,
            isLoading: false,
            hasError: false
        }
    }

    submitLogin = (e) => {        
        e.preventDefault();    
        this.setState({isLoading: true,  hasError: false});

        const { username, password } = this.state;
        LoginService.loginUser({username: username, password: password})
            .then(response => {
                console.log("Success ========>", response);
                if (response.data.data != null) {
                    this.setState({isLoading: false});
                this.props.history.push('/home');
                } else {
                    this.setState({isLoading: false, hasError: true});    
                }                
            })
            .catch(error => {
                console.log("Error ========>", error);
                this.setState({isLoading: false, hasError: true});
            });
    }

    render() {
        const { username, password, isLoading, hasError } = this.state;

        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                <form onSubmit={this.submitLogin}>
                    {hasError ? 
                    (<Alert key={'danger'} variant={'danger'}>
                        Não foi possível fazer seu login. Por favor, verifique seu username e senha.
                        </Alert>) : (<div></div>)}
                    <h3>Login</h3>

                    {isLoading ? (
                        <div className="d-flex justify-content-center">
                            <Spinner animation="border" />                        
                        </div>
                    ) : (<div>
                    <div className="form-group">
                        <label>Username</label>
                        <input 
                            type="username" 
                            value={username} 
                            className="form-control" 
                            placeholder="Username" 
                            onChange={(e) => {this.setState({username: e.target.value})}}
                        />
                    </div>

                    <div className="form-group">
                        <label>Senha</label>
                        <input 
                            type="password" 
                            value={password} 
                            className="form-control" 
                            placeholder="Password"
                            onChange={(e) => {this.setState({password: e.target.value})}}
                        />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Entrar</button>
                    <p className="forgot-password text-right">
                        Faça o cadastro <a href="/sign-up"> aqui </a>
                    </p>
                    </div>)}
                </form>
            </div>
            </div>
        );
    }
}