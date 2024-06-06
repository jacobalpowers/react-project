import styles from "../styles/dialog-styles.css";
import React, { useState } from "react";

const AddDialog = (props) => {
    const [inputs, setInputs] = useState({});
    const [result, setResult] = useState("");
    const api = "https://board-at-home-backend.onrender.com/api/games";
    //const api = "http://localhost:3001/api/games";


    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        
        const formData = new FormData(event.target);

        const response = await fetch(api, {
            method:"POST",
            body: formData,
        });

        if (response.status == 200) {
            setResult("House Successfully Added");
            event.target.reset(); //reset your form fields
            props.closeDialog();
        } else {
            console.log("Error adding game", response);
            setResult(response.message);
        }
    }

    const textChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value}));
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
                    <span class="w3-button w3-display-topright" onClick={props.closeForm}>&times;</span>
                    <section id="main-modal-content">
                        <form id="new-item" onSubmit={onSubmit}>
                            <div id="modal-divider">
                                <div id="image-interaction">
                                    <img id="img-preview" src={
                                        inputs.image != null ? URL.createObjectURL(inputs.image) : ""
                                    }/>
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
                                        required
                                        minlength="3"
                                        onChange={textChange}
                                    />
                                    </p>
                                    <p>
                                        <label for="release-date">Release Date:</label>
                                        <input type="number" id="release-date" name="releaseDate" step="1" required onChange={textChange} />
                                    </p>
                                    <p>
                                        <label for="game-rank">Rank: </label>
                                        <input type="number" id="game-rank" name="rank" step="1" required onChange={textChange} />
                                    </p>
                                    <p>
                                        <label for="price">Price:</label>
                                        <input type="text" id="price" name="price" required onChange={textChange} />
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
};

export default AddDialog;