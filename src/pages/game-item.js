import styles from '../styles/game-item-styles.css'

const GameItem = () => {
    return (
        <>
        <content>
            <div id="divider">
                <div id="top-content">
                    <div id="pt1">
                        <img src="../images/gloomhaven.webp"/>
                        <div id="basic-text">
                            <h2 id="game-name">Gloomhaven</h2>
                            <div id="sub-texts"></div>
                        </div>
                    </div>
                    <div id="sub-content"></div>
                </div>
                <div id="bottom-content">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/e3efv2HkjDI?si=c7KTnDYfgexORQFa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </content>
        </>
    )
};

export default GameItem;