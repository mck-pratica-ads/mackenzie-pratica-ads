import React, { Component } from "react";
import { Spinner, Image } from 'react-bootstrap';
import ItemList from "./item/item_list.component";
import UserList from "./user/user_list.component";

var movies = [ 
    { id: 1, name: 'Senhor dos aneis', rating: 9.7},
    { id: 2, name: 'Star Wars', rating: 9.2 },
    { id: 3, name: 'Jokers', rating: 8.1}
]

var tvshows = [
    { id: 4, name: 'Breaking Bad', rating: 9.9 },
    { id: 5, name: 'Modern Family', rating: 7.8 },
    { id: 6, name: 'Game of Thrones',rating: 8.1 }
]

var users = [
    { id: 1, name: 'Lucas Torquato' },
    { id: 2, name: 'Ana Luisa' },
    { id: 3, name: 'Maria Helena'},
    { id: 4, name: 'Veleida Nunes'},
    { id: 5, name: 'Roberto Denis'},
    { id: 6, name: 'David Luca'},
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