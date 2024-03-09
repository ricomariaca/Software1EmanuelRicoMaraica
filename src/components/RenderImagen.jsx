import React from 'react'

const RenderImagen = ({title, url}) => {
    return (
        <div>
            
            <img src={url} alt={title} />
            <p>{title}</p>

        </div>
        
    );
}

export default RenderImagen;