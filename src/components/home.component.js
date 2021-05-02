import React, { Component } from "react";
import { Spinner, Image } from 'react-bootstrap';
import ItemList from "./item/item_list.component";
import UserList from "./user/user_list.component";

var movies = [ 
    { name: 'Senhor dos aneis', rating: 9.7},
    { name: 'Star Wars', rating: 9.2 },
    { name: 'Jokers', rating: 8.1}
]

var tvshows = [
    { name: 'Breaking Bad', rating: 9.9 },
    { name: 'Modern Family', rating: 7.8 },
    { name: 'Game of Thrones',rating: 8.1 }
]

var users = [
    { name: 'Lucas Torquato' },
    { name: 'Ana Luisa' },
    { name: 'Maria Helena'},
    { name: 'Veleida Nunes'},
    { name: 'Roberto Denis'},
    { name: 'David Luca'},
]

export default class Home extends Component {

    render() {
        return (
            <div className="top">          
                <ItemList title={'Filmes Recomendados'} items={movies}/>
                <ItemList title={'Series Recomendadas'} items={tvshows}/>
                <UserList title={'Usuários Indicados'} items={users}/>
            </div>
        );
    }
}