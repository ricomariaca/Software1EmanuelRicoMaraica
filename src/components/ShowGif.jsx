import React from 'react'
import Api from '../Hooks/Api';


const ShowGif = ({ category }) => {
    //the url is retrieved with the end point

    const url = `https://api.giphy.com/v1/gifs/search?api_key=tZFaIumPHG1ZF6SG3UYSYQ3Qek1Aj4pN&q=${category}`;
    const { answer, data } = Api(url)
    return(

        //make the call with the end point

        <div>{category}</div>

        


    );
    
}

export default ShowGif;