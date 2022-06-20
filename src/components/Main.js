import React from 'react'

export default function Main({ src, alt, href }) {
    return (
        <div className='thumbnail-width'>
            <a href={href}>
                <img src={src} alt={alt}></img>
            </a>
        </div>
    )
}