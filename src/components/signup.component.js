import React, { Component } from "react";
import { Spinner, Alert } from 'react-bootstrap';
import LoginService from "../services/LoginService";

export default class SignUp extends Component {

    constructor(props){
        super(props);
        this.state ={
            email: undefined,
            password: undefined,            
            fullname: undefined,
            username: undefined,
            birthdate: undefined,
            state: undefined,
            city: undefined,
            isLoading: false,
            hasError: false
        }
    }

    submitSignUp = (e) => {        
        e.preventDefault();    
        this.setState({isLoading: true,  hasError: false});

        LoginService.signUpUser(this.state)
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
        const {email, password, fullname, username, birthdate, state, city, hasError, isLoading} = this.state;
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
            <form onSubmit={this.submitSignUp}>
                {hasError ? 
                (<Alert key={'danger'} variant={'danger'}>
                    Não foi possível fazer seu login. Por favor, verifique seu username e senha.
                    </Alert>) : (<div></div>)}
                <h3>Cadastro</h3>

                {isLoading ? (
                    <div className="d-flex justify-content-center">
                        <Spinner animation="border" />                        
                    </div>
                ) : (<div>

                <div className="form-group">
                    <label>Nome Completo</label>
                    <input type="text" value={fullname} className="form-control" placeholder="Nome Completo" onChange={(e) => {this.setState({fullname: e.target.value})}} />
                </div>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" value={username} className="form-control" placeholder="Username" onChange={(e) => {this.setState({username: e.target.value})}} />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="text" value={email} className="form-control" placeholder="Email" onChange={(e) => {this.setState({email: e.target.value})}} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={password} className="form-control" placeholder="Senha" onChange={(e) => {this.setState({password: e.target.value})}} />
                </div>                

                <div className="form-group">
                    <label>Data de nascimento</label>
                    <input type="text" value={birthdate} className="form-control" placeholder="DD/MM/YYYY" onChange={(e) => {this.setState({birthdate: e.target.value})}} />
                </div>

                <div className="form-group">
                    <label>Estado</label>
                    <input type="text" value={state} className="form-control" placeholder="CE" onChange={(e) => {this.setState({state: e.target.value})}} />
                </div>

                <div className="form-group">
                    <label>City</label>
                    <input type="text" value={city} className="form-control" placeholder="Fortaleza" onChange={(e) => {this.setState({city: e.target.value})}} />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Criar Usuário</button>
                <p className="forgot-password text-right">
                    Já registrado? Login <a href="/sign-in">aqui</a>
                </p>

                </div>)}
            </form>
            </div>
            </div>
        );
    }
}