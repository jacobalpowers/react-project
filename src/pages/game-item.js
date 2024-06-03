import styles from '../styles/game-item-styles.css'
import React, { useState, useEffect } from "react";
import axios from "axios";

const GameItem = () => {
    const [detailContainer, setGameDetails] = useState([]);
    const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        (async () => {
            const response = await axios.get("https://board-at-home-backend.onrender.com/api/games");
            setGameDetails(response.data);
            setLoaded(true);
        })();
    }, []);


    return (
        <>
        <content id="game-item-page">
            <div id="divider">
                {!loaded && ("")}
                {loaded && (
                <div id="top-content">
                    <div id="pt1">
                        <img src={`https://board-at-home-backend.onrender.com/images/`+detailContainer[0].image}/>
                        <div id="basic-text">
                            <h2 id="game-name">{detailContainer[0].title}</h2>
                            <div id="sub-texts">
                                <div class="text-items" id="rank-rating-players">
                                    <p>Rank: {detailContainer[0].rank}</p>
                                    <p>Avg Rating: {detailContainer[0].avgRating}</p>
                                    <p>Number of Players = {detailContainer[0].numPlayers}</p>
                                </div>
                                <div class="text-items" id="playtime-age-website">
                                    <p>Avg Playtime: {detailContainer[0].playtime}</p>
                                    <p>{detailContainer[0].age}+</p>
                                    <a href={detailContainer[0].website}>Game Website</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="sub-content">
                        <p>Designer(s): {detailContainer[0].designer}</p>
                        <p>Artist(s): {detailContainer[0].artists}</p>
                    </div>
                </div>
                )}
                <div id="bottom-content">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/e3efv2HkjDI?si=c7KTnDYfgexORQFa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </content>
        </>
    )
};

export default GameItem;