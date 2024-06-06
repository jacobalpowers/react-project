import styles from "../styles/dialog-styles.css";
import React, { useState } from "react";

const EditDialog = (props) => {
    const imgSrc = `https://board-at-home-backend.onrender.com/images/${props.image}`;
    const [inputs, setInputs] = useState({
        _id: props._id,
        title: props.title,
        rank: props.rank,
        price: props.price,
        releaseDate: props.releaseDate,
    });
    const [result, setResult] = useState("");
    const api = "https://board-at-home-backend.onrender.com/api/games/";
    //const api = "http://localhost:3001/api/games/";


    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);

        const response = await fetch(`${api}${props._id}`, {
            method:"PUT",
            body: formData,
        });

        if (response.status == 200) {
            setResult("Game Successfully Updated");
            event.target.reset(); //reset your form fields
            props.editGame(await response.json());
            props.closeDialog();
        } else {
            console.log("Error editing game", response);
            setResult(response.message);
        }
    }

    const imageChange = (event) => {
        const name = event.target.name;
        const value = event.target.files[0];
        setInputs((values) => ({ ...values, [name]: value}));
    };

    return (
        <>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
        <div id="id01" class="w3-modal">
            <div class="w3-modal-content">
                <div class="w3-container">
                    <span class="w3-button w3-display-topright" onClick={props.closeDialog}>&times;</span>
                    <section id="main-modal-content">
                        <form id="new-item" onSubmit={onSubmit}>
                            <div id="modal-divider">
                                <div id="image-interaction">
                                    <img id="img-preview" src={props.image != null ? imgSrc : ""}/>
                                    <label for="file-name">Find File:</label>
                                    <input
                                        type="file"
                                        id="file-name"
                                        name="image"
                                        accept="image/*"
                                        onChange={imageChange}
                                    />
                                </div>
                                <div id="text-interaction">
                                    <p>
                                        <label for="game-name">Game Name:</label>
                                        <input
                                        type="text"
                                        id="game-name"
                                        name="title"
                                        value={inputs.title}
                                        required
                                        minlength="3"
                                    />
                                    </p>
                                    <p>
                                        <label for="release-date">Release Date:</label>
                                        <input type="number" id="release-date" name="releaseDate" step="1" value={inputs.releaseDate} required />
                                    </p>
                                    <p>
                                        <label for="game-rank">Rank: </label>
                                        <input type="number" id="game-rank" name="rank" step="1" value={inputs.rank} required />
                                    </p>
                                    <p>
                                        <label for="price">Price:</label>
                                        <input type="text" id="price" name="price" value={inputs.price} required />
                                    </p>
                                    <p>
                                        <button type="submit">Submit</button>
                                    </p>
                                </div>
                            </div>
                        </form>
                        <p>{result}</p>
                    </section>
                </div>
            </div>
        </div>
        </>
    )
}

export default EditDialog;