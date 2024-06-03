import styles from '../styles/contact-styles.css'
import { useState } from "react";

const Contact = () => {
    const [result, setResult] = useState("");


    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "c003858d-f28d-4395-91b8-ac3692c21de7");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };


    return (
    <>
    <content id="contact-page">
            <div id="main-content">
                <h1>Contact Us!</h1>
                    <form onSubmit={onSubmit}>
                        <p>
                            <label for="name">Name:</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="First and Last"
                                name="name"
                                required
                            />
                        </p>
                        <p>
                            <label for="email">Email:</label>
                            <input id="email" type="email" name="email" placeholder="example@email.com" required />
                        </p>
                        <p>
                            <label for="message">Message:</label>
                            <textarea id="message" name="message" placeholder="Let us know what you think!" required></textarea>
                        </p>
                        <p>
                            <button type="submit">Submit Form</button>
                        </p>
                        <p>{result}</p>
                    </form>
            </div>
            
        </content>
    </>
    )
};

export default Contact;