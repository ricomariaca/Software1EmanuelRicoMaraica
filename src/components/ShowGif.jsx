import React from 'react'
import Api from '../Hooks/Api';
import RenderImagen from './RenderImagen';


const ShowGif = ({ category }) => {
    //the url is retrieved with the end point

    const url = `https://api.giphy.com/v1/gifs/search?api_key=tZFaIumPHG1ZF6SG3UYSYQ3Qek1Aj4pN&q=${category}`;
    const { upload, data } = Api(url);

    return (

        //make the call with the end point

        <div>

            {
                //a conditional is made so as not to make an empty mapping
                upload ?
                    data.map(img => (
                        <RenderImagen key={img.id} title={img.title} url={img.images.original.url} />
                    )) : ""
            }
        </div>
    );

}

export default ShowGif;