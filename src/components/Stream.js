import React from "react";

export default function Stream({ imgThumbnail, imgAlt, youtubeLink,trackTile, artiste }) {
    // To fetch particular video from Youtube
    const toggleYoutube = () => {
        const normalThumbnail = document.getElementById("normalThumbnail")
        const youtubeThumbnail = document.getElementById("youtubeThumbnail")

        youtubeThumbnail.style.display = "block"
        normalThumbnail.style.display = "none"
    }

    return (
        <section className="stream-section">
            <div className='stream-thumbnail thumbnail'>
                <a className="stream__embed" onClick={toggleYoutube} id="normalThumbnail" href='#vid'>
                    <img src={imgThumbnail} alt={imgAlt}></img>
                    <span><i class="fa-solid fa-play"></i></span>
                </a>
                <iframe className="stream__embed" id="youtubeThumbnail" src={youtubeLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div className="track-details">
                <h2>{trackTile} - {artiste}</h2>
                <h5>Directed & Edited by aZ</h5>
            </div>
        </section>
    )
}