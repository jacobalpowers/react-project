import React, { useEffect } from "react";

const GameContainer = (gameContainer) => {
    return (
        <div className="game-item">
            <img src={gameContainer.img}/>
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