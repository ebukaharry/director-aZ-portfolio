import React from "react"
export default function Gallery(props) {
    return (
        <div className="gallery-section">
            <div className="row">
                <div className="column">
                    <img src={props.img1} alt={props.alt1}></img>
                    <img src={props.img2} alt={props.alt2}></img>
                    <img src={props.img3} alt={props.alt3}></img>
                </div>
                <div className="column">
                    <img src={props.img4} alt={props.alt4}></img>
                    <img src={props.img5} alt={props.alt5}></img>
                    <img src={props.img6} alt={props.alt6}></img>
                </div>
                <div className="column">
                    <img src={props.img7} alt={props.alt7}></img>
                    <img src={props.img8} alt={props.alt8}></img>
                    <img src={props.img9} alt={props.alt9}></img>
                </div>
                <div className="column">
                    <img src={props.img10} alt={props.alt10}></img>
                    <img src={props.img11} alt={props.alt11}></img>
                    <img src={props.img12} alt={props.alt12}></img>
                </div>
            </div>
        </div>
        // <div className='thumbnail-width'>
        //     <a href='#vid'>
        //         <img src={img} alt={alt}></img>
        //     </a>
        // </div>
    )
}