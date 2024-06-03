import styles from '../styles/contact-styles.css'

const Contact = () => {
    return (
    <>
    <content id="contact-page">
            <div id="main-content">
                <h1>Contact Us!</h1>
                    <form
                    id="contact-form"
                    action="https://api.web3forms.com/submit"
                    method="POST"
                    >
                        <input type="hidden" name="access_key" value="c003858d-f28d-4395-91b8-ac3692c21de7" />
            
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
                            <input
                            type="hidden"
                            name="redirect"
                            value="https://web3forms.com/success"
                            />
                            <input
                            type="hidden"
                            name="subject"
                            value="Contact from Jaspers Website"
                            />
                            <input type="hidden" name="from_name" value="My Website" />
                        <p>
                            <button type="submit">Submit Form</button>
                        </p>
            
                        <p id="result"></p>
                    </form>
            </div>
            
        </content>
    </>
    )
};

export default Contact;