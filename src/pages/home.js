import styles from '../styles/main-styles.css'
import React, { useState, useEffect } from "react";
import axios from "axios";
import GameContainer from '../components/game-container';

const Home = () => {
    const [gameContainers, setGameContainer] = useState([]);
    const [index, setIndex] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const api = "https://board-at-home-backend.onrender.com/api/games";
    //const api = "http://localhost:3001/api/games";

    const slideForward = () => {
        setIndex(index === gameContainers.length - 1 ? 0 : index + 1);
    }
    const slideBackward = () => {
        setIndex(index === 0 ? gameContainers.length - 1 : index - 1);
    }


    useEffect(() => {
        (async () => {
            const response = await axios.get(api);
            setGameContainer(response.data);
            setLoaded(true);
        })();
    }, []);


    return (
    <>
        <content id="home-page">
            <div id="divider">
                <div id="left-side" class="large-screen">
                    <div id="featured">
                        {!loaded && (
                            <img src=""></img>
                        )}
                        {loaded && (
                            <img src={`https://board-at-home-backend.onrender.com/images/`+gameContainers[index].image} alt={gameContainers[index].title}/>
                        )}
                        <p id='forward-arrow' onClick={slideForward}>&gt;</p>
                        <p id='backward-arrow' onClick={slideBackward}>&lt;</p>
                        <h2>Featured Picks</h2>
                    </div>
                    <div id="the-word">
                        <h2>What's the Word?</h2>
                        <ul>
                            <li>Best "Starter" board game?</li>
                            <li>What game wears the crown?</li>
                            <li>Any new reveals about that upcoming game?</li>
                            <li>Why Monopoly should never have been made</li>
                            <li>Ark Nova Strategy Guide</li>
                            <li>Local Reviews: Gloomhaven</li>
                            <li>Sleeving my game, what size should I use?</li>
                            <li>Casual game recommendations for family game night</li>
                        </ul>
                    </div>
                </div>
                <div id="right-side" class="large-screen">
                    <h2>Highest Rated</h2>
                    <div id="high-ratings">
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
                </div>
            </div>
        </content>
    </>
    )
};

export default Home;