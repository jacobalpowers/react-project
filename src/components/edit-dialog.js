import styles from "../styles/dialog-styles.css";
import React, { useState } from "react";

const EditDialog = (props) => {
    const [inputs, setInputs] = useState({
        _id: props._id,
        title: props.title,
        rank: props.rank,
        price: props.price,
        releaseDate: props.releaseDate,
        image: props.image,
    });
    const [result, setResult] = useState("");
    //const baseAddress = "https://board-at-home-backend.onrender.com";
    const baseAddress = `http://localhost:3001`;
    const api = `${baseAddress}/api/games/`;
    const imgSrc = `${baseAddress}/images/${inputs.image}`;
    

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        
        const formData = new FormData(event.target);
        console.log(...formData);
        const response = await fetch(`${api}${inputs._id}`, {
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
        window.location.reload();
    }

    const onDelete = async (event) => {
        const response = await fetch(`${api}${inputs._id}`, {
            method:"DELETE",
        });

        if (response.status == 200) {
            setResult("Game Successfully Deleted");
            props.closeDialog();
        } else {
            console.log("Error Deleting Game", response);
            setResult(response.message);
        }
        window.location.reload();
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
                    <span class="w3-button w3-display-topright" onClick={props.closeDialog}>&times;</span>
                    <section id="main-modal-content">
                        <form id="new-item" onSubmit={onSubmit}>
                            <div id="modal-divider">
                                <div id="image-interaction">
                                    <img id="img-preview" src={inputs.image != null ? imgSrc : ""}/>
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
                                        onChange={textChange}
                                    />
                                    </p>
                                    <p>
                                        <label for="release-date">Release Date:</label>
                                        <input type="number" id="release-date" name="releaseDate" step="1" value={inputs.releaseDate} required onChange={textChange} />
                                    </p>
                                    <p>
                                        <label for="game-rank">Rank: </label>
                                        <input type="number" id="game-rank" name="rank" step="1" value={inputs.rank} required onChange={textChange}/>
                                    </p>
                                    <p>
                                        <label for="price">Price:</label>
                                        <input type="text" id="price" name="price" value={inputs.price} required onChange={textChange}/>
                                    </p>
                                    <p>
                                        <button type="submit">Submit</button>
                                    </p>
                                </div>
                            </div>
                        </form>
                        <p>
                            <button onClick={onDelete}>Delete</button>
                        </p>
                        <p>{result}</p>
                    </section>
                </div>
            </div>
        </div>
        </>
    )
}

export default EditDialog;