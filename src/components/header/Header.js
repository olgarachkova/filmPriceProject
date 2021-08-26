import './header.scss'

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

export function Header(props) {
    const [searchQuery, setSearchQuery] = useState("");
    let { history } = props;

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    }

    const handleSubmit = () => {
        console.log(searchQuery);
        debugger;
        history.push("/search?query=cube");
        console.log(props);
    }

    const handleClick = () => {
        console.log(searchQuery);
        debugger;
        history.push("/search?query=cube");
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header-container">
                    <nav className="header-menu">
                        <Link to="/" className="header-menu-item">место под лого</Link> |
                        <a href="#" className="header-menu-item">Фильтры</a>
                    </nav>
                    <form onSubmit={handleSubmit} >
                        <input type="text" name="filmsearch" placeholder="введите название фильма" className="filmsearch"
                            onChange={handleInputChange} />
                        <button name="submit" className="filmsearch-button" onClick={handleClick}>Поиск</button>
                    </form>
                </div>
            </div>
        </header>
    )
}