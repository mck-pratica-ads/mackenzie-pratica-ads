import React, { Component } from "react";
import { Spinner, Image, Row, Col, Button } from 'react-bootstrap';
import ItemList from "./item/item_list.component";
import UserList from "./user/user_list.component";
import { useLocation } from "react-router-dom";
import Evaluation from "./evaluation/evaluation.component";

var items = [ 
    { id: 1, name: 'Senhor dos aneis', rating: 9.7},
    { id: 2, name: 'Star Wars', rating: 9.2 },
    { id: 3, name: 'Jokers', rating: 8.1},
    { id: 4, name: 'Breaking Bad', rating: 9.9 },
    { id: 5, name: 'Modern Family', rating: 7.8 },
    { id: 6, name: 'Game of Thrones',rating: 8.1 }
]

var evaluations = [
    { user: { name: "Lucas Torquato"}, date: "06/11/2020", rate: 9.1, commentsTotal: 12, likesTotal: 43, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { user: { name: "Matheus Nunes"}, date: "12/02/2021", rate: 8.8, commentsTotal: 3, likesTotal: 11, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
]

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function HeaderBody() {
    let query = useQuery();

    let id = query.get("id");

    let item = items.filter(function(el) {
        return el.id === parseInt(id);
    })[0]

    console.log(item)

    return (
        <div className="top">          
            <div class="card border-dark m-5">   
                <div class="card-header"> {item.name} </div>                
                    <div className="m-3"> 
                    <Image src="movie_img.svg" rounded />
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                    </svg> 
                    <h5> {item.rating} </h5>
                    </div>
                </div>
            </div>

            <div>
                <Button variant="warning" size="lg" block>
                    Avaliar
                </Button>
            </div>

            {evaluations.map((w, i) => {
                return (
                    <Evaluation evaluation={w} />
                )
            })} 
        </div>
    )
}

export default class ItemDetails extends Component {
    render() {
        return (
            <HeaderBody />
        );
    }
}