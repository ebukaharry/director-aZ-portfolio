import React from "react";

export default function Contact() {
    return (
        <section className="contact-section">
            <div className="contact__icons">
                <a href="https://instagram.com/directoraz_?r=nametag"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://instagram.com/directoraz_?r=nametag"><h5>@directoraz_</h5></a>
            </div> 
            <div className="contact__icons">
                 <a href="https://www.facebook.com/akinboyo.zebby"><i className="fa-brands fa-facebook"></i></a>
                 <a href="https://www.facebook.com/akinboyo.zebby"><h5>Akinboyo Zebby</h5></a>
            </div>
            <div className="contact__icons">
                <a href="fb.com"><i className="fa-brands fa-twitter"></i></a>
                <a href="fb.com"><h5>@directoraz_</h5></a>
            </div>
            <div className="contact__icons">
                <a href="mailto:akinboyozebby@gmail.com?subject=I%20WANT%20TO%20WORK%20WITH%20YOU,%20aZ"><i className="fa-solid fa-envelope"></i></a>
                <a href="fb.com"><h5>mail@directoraz.com</h5></a>
            </div>
            <div className="contact__icons">
                <a className="mail-link" href="mailto:akinboyozebby@gmail.com?subject=I%20WANT%20TO%20WORK%20WITH%20YOU,%20aZ!"><button className="mail-btn">SEND ME A MAIL NOW!</button></a>
            </div>
        </section>
    )
}