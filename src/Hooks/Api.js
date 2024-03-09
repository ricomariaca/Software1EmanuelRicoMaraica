import { useEffect, useState } from "react";

const Api = (url) => {

    //creation of the state

    const [data, setData] = useState(null);
    const [upload, setUpload] = useState(false);

    //a function is created that fetches the response with promises and parses and returns the response. 

    const fetchApi = () => {
        fetch(url)
            .then(answer => answer.json())
            .then(answerJson => {
                //finalize the load 
                setUpload(true);
                setData(answerJson.data)
            })
            .catch(error => console.log(error))
    }
    //have it called
    useEffect(() => {
        fetchApi();
        //so that it does not have an inifinite cycle
    }, [url])

    return { upload, data }
}

export default Api;