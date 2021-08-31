import './header.scss'

import React, { useState } from "react";
import { Link } from 'react-router-dom';

export function Header(props) {
    const [searchQuery, setSearchQuery] = useState("");
    const { history } = props;

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    }

    const handleSubmit = () => {
        history.push(`/search?filmsearch=${searchQuery}`);
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
                        <button name="submit" className="filmsearch-button">Поиск</button>
                    </form>
                </div>
            </div>
        </header>
    )
}