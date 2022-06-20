import React from "react"

export default function About({ img1, img2, img3, alt1, alt2, alt3 }) {
    return (
        <div className="about-section">
            <div className="about__photos">
                <div className='thumbnail thumbnail-1'>
                    <a href='#vid'>
                        <img src={img1} alt={alt1}></img>
                    </a>
                </div>
                <div className='thumbnail thumbnail-2'>
                    <a href='#vid'>
                        <img src={img2} alt={alt2}></img>
                    </a>
                </div>
                <div className='thumbnail thumbnail-3'>
                    <a href='#vid'>
                        <img src={img3} alt={alt3}></img>
                    </a>
                </div>
            </div>

            <div className="about__content">
                <div className="about__main">
                    <div className="about__header">
                        <h2>Samuel "Zebby" Akinboyo is a music video director, producer & commercial content creator, working widely for artistes and brands.</h2>
                    </div>

                    <a className="mail-link" href="mailto:akinboyozebby@gmail.com?subject=I%20WANT%20TO%20WORK%20WITH%20YOU,%20aZ!"><button className="mail-btn">SEND ME A MAIL NOW!</button></a>
                </div>
                <div className="about__details">
                    <h4>Through a number of projects, Samuel Akinboyo has mastered efficiently creating music videos & commercial projects for upcoming artists and brands. <br></br><br></br>With a current audience of over 10,000 followers on Instagram & a continous growing subscribers on Youtube, aZ is always looking for new brands and artistes to collaborate with. <br></br><br></br>Shoot an inquiry about your upcoming project!</h4>
                </div>
            </div>
        </div>
    )
}
