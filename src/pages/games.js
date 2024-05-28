import styles from '../styles/games-styles.css';

const Games = () => {
    return (
    <>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
        <content>
            <div id="id01" class="w3-modal">
                <div class="w3-modal-content">
                    <div class="w3-container">
                        <span onclick="document.getElementById('id01').style.display='none'" class="w3-button w3-display-topright">&times;</span>
                        <section id="main-modal-content">
                            <form id="new-item">
                                <div id="modal-divider">
                                    <div id="text-interaction">
                                        <p>
                                            <label for="game-name">Game Name:</label>
                                            <input
                                            type="text"
                                            id="game-name"
                                            name="game-name"
                                            required
                                            minlength="3"
                                        />
                                        </p>
                                        <p>
                                            <label for="release-date">Release Date:</label>
                                            <input type="number" id="release-date" step="1" required />
                                        </p>
                                        <p>
                                            <label for="game-rank">Rank: </label>
                                            <input type="number" id="game-rank" step="1" required />
                                        </p>
                                        <p>
                                            <label for="price">Price:</label>
                                            <input type="text" id="price" required />
                                        </p>
                                        <p>
                                            <button type="submit">Submit</button>
                                        </p>
                                    </div>
                                </div>
                                
                                
                            </form>
                        </section>
                    </div>
                </div>
            </div>
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
                    <p id="add-item">+</p>
                    <div id="item-list"></div>
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