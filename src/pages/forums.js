import styles from '../styles/forums-styles.css'

const Forums = () => {
    return (
        <>
        <content>
            <div id="main-content">
                <h2 id="title">Forum Posts</h2>
                <div id="divider">
                    <div id="filter-sort">
                        <ul id="filter">
                            <h3>Filter By</h3>
                            <li>Reviews</li>
                            <li>Opinions</li>
                            <li>Questions</li>
                            <li>Chatting</li>
                            <li>Speculation</li>
                            <li>Strategy</li>
                        </ul>
                        <ul id="sort">
                            <h3>Sort By</h3>
                            <li>Recent</li>
                            <li>Views</li>
                            <li>Likes</li>
                        </ul>
                    </div>
                    <div id="forum-posts">
                        <div class="forum-post-item">
                            <p id="forum-post-title">Best "starter board game"?</p>
                            <div id="details">
                                <p>3 replies</p>
                                <p>updated 3 min ago</p>
                            </div>
                        </div>
                        <div class="forum-post-item">
                            <p id="forum-post-title">What game wears the crown</p>
                            <div id="details">
                                <p>5 replies</p>
                                <p>updated 7 min ago</p>
                            </div>
                        </div>
                        <div class="forum-post-item">
                            <p id="forum-post-title">Any new reveals about that upcoming game?</p>
                            <div id="details">
                                <p>9 replies</p>
                                <p>updated 14 min ago</p>
                            </div>
                        </div>
                        <div class="forum-post-item">
                            <p id="forum-post-title">Why Monopoly should never have been made</p>
                            <div id="details">
                                <p>14 replies</p>
                                <p>updated 19 min ago</p>
                            </div>
                        </div>
                        <div class="forum-post-item">
                            <p id="forum-post-title">Ark Nova Strategy Guide</p>
                            <div id="details">
                                <p>19 replies</p>
                                <p>updated 24 min ago</p>
                            </div>
                        </div>
                        <div class="forum-post-item">
                            <p id="forum-post-title">Local Reviews: Gloomhaven</p>
                            <div id="details">
                                <p>16 replies</p>
                                <p>updated 29 min ago</p>
                            </div>
                        </div>
                        <div class="forum-post-item">
                            <p id="forum-post-title">Sleeving my game, what size should I use?</p>
                            <div id="details">
                                <p>3 replies</p>
                                <p>updated 34 min ago</p>
                            </div>
                        </div><div class="forum-post-item">
                            <p id="forum-post-title">Casual game recommendation for family night?</p>
                            <div id="details">
                                <p>35 replies</p>
                                <p>updated 46 min ago</p>
                            </div>
                        </div>
                        <div class="forum-post-item">
                            <p id="forum-post-title">lorem ibsum dolor sit amet</p>
                            <div id="details">
                                <p>7 replies</p>
                                <p>updated 59 min ago</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="page-changer">
                    <button id="prev">Previous</button>
                    <p id="current-page">1/10</p>
                    <button id="next">Next</button>
                </div>
            </div>
            
        </content>
        </>
    )
};

export default Forums;