import styles from '../styles/main-styles.css'

const Home = () => {
    return (
    <>
        <content>
            <div id="divider">
                <div id="left-side" class="large-screen">
                    <div id="featured">
                        <img src="images/gloomhaven.webp" />
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
                    <div id="high-ratings"></div>
                </div>
            </div>
        </content>
    </>
    )
};

export default Home;