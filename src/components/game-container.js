import React, { useEffect, useState } from "react";
import EditDialog from "./edit-dialog";

const GameContainer = (gameContainer) => {
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [gameItem, setGameItem] = useState(gameContainer);
    const imgSrc = `https://board-at-home-backend.onrender.com/images/${gameContainer.image}`;

    const displayEdit = () => {
        setShowEditDialog(!showEditDialog);
    }

    const editGame = (game) => {
        setGameItem(game);
    }

    return (
        <>
            {showEditDialog ? (
                <EditDialog
                    _id={gameItem._id}
                    title={gameItem.title}
                    rank={gameItem.rank}
                    price={gameItem.price}
                    releaseDate={gameItem.releaseDate}
                    image={gameItem.image}
                    closeDialog={displayEdit}
                    editGame={editGame}
                />
            ) : ("")
            }
            <div className="game-item" onClick={displayEdit}>
                <img src={imgSrc} alt={gameItem.title}/>
                <div id="text-section">
                    <p>{gameItem.title}</p>
                    <p>{gameItem.releaseDate}</p>
                    <p>Rank: {gameItem.ranking}</p>
                    <p>${gameItem.price}</p>
                </div>

            </div>
        </>
    )
}

export default GameContainer;