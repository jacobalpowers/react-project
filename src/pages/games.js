import styles from '../styles/games-styles.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import GameContainer from '../components/game-container';
import AddDialog from '../components/add-dialog';

const Games = () => {
    const [gameContainers, setGameContainer] = useState([]);
    const [formOpen, setFormOpen] = useState(false);
    //const api = "https://board-at-home-backend.onrender.com/api/games";
    const api = "http://localhost:3001/api/games";


    useEffect(() => {
        (async () => {
            const response = await axios.get(api);
            setGameContainer(response.data);
        })();
    }, []);

    const openForm = () => {
        setFormOpen(true);
    };

    const closeForm = () => {
        setFormOpen(false);
    }

    return (
    <>
        <content id="games-page">
            {formOpen ? (
                <AddDialog closeForm={closeForm}/>
            ) : ("")}
            <div id="divider">
                <div id="filter">
                    <ul id="genres">
                        <h3>Genres</h3>
                        <li>Family</li>
                        <li>Dexterity</li>
                        <li>Party</li>
                        <li>Deckbuilder</li>
                        <li>Cooperative</li>
                        <li>Dungeon Crawl</li>
                    </ul>
                    <ul id="min-age">
                        <h3>Minimum Age</h3>
                        <li>3+</li>
                        <li>7+</li>
                        <li>12+</li>
                        <li>16+</li>
                        <li>18+</li>
                    </ul>
                    <ul id="num-players">
                        <h3>Number of Players</h3>
                        <li>1</li>
                        <li>2-4</li>
                        <li>4+</li>
                    </ul>
                </div>
                <div id="main-items">
                    <p id="add-item" onClick={openForm}>+</p>
                    <div id="item-list">
                        {gameContainers.map((gameContainer) => (
                            <GameContainer
                                title={gameContainer.title}
                                releaseDate={gameContainer.releaseDate}
                                ranking={gameContainer.rank}
                                price={gameContainer.price}
                                image={gameContainer.image}
                            />
                        ))}
                    </div>
                    <div id="page-changer">
                        <button id="prev">Previous</button>
                        <p id="current-page">1/10</p>
                        <button id="next">Next</button>
                    </div>
                </div>
            </div>
        </content>
    </>
    )
};

export default Games;