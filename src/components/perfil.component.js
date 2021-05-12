import React, { Component } from "react";
import { Spinner, Image } from 'react-bootstrap';
import ItemList from "./item/item_list.component";
import UserList from "./user/user_list.component";

var user = {
    name: "Lucas Torquato"
}

var evaluations = [
    { user: { name: "Lucas Torquato"}, date: "06/11/2020", rate: 9.1, commentsTotal: 12, likesTotal: 43, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { user: { name: "Matheus Nunes"}, date: "12/02/2021", rate: 8.8, commentsTotal: 3, likesTotal: 11, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
]

export default class Perfil extends Component {

    render() {
        return (
            <div className="top">          
                {user.name}
            </div>
        );
    }
}