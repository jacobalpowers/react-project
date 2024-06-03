import React, { useEffect } from "react";

const GameContainer = (gameContainer) => {
    const imgSrc = `https://board-at-home-backend.onrender.com/images/${gameContainer.image}`;

    return (
        <div className="game-item">
            <img src={imgSrc} alt={gameContainer.title}/>
            <div id="text-section">
                <p>{gameContainer.title}</p>
                <p>{gameContainer.releaseDate}</p>
                <p>Rank: {gameContainer.ranking}</p>
                <p>${gameContainer.price}</p>
            </div>

        </div>
    )
}

export default GameContainer;