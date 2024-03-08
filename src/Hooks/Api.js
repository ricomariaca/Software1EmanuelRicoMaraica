import { useEffect, useState } from "react";

const Api = (url) => {

    //creation of the state

    const [data, setData] = useState(null)
    const [upload, setUpload] = useState(false)

    //a function is created that fetches the response with promises and parses and returns the response. 

    const fetchApi = () => {
        fetch(url)
            .then(answer => answer.json())
            .then(answerJson => {

                console.log(answerJson)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchApi();
    })

    return { upload, data }
}

export default Api;