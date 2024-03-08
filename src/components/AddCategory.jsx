import React, { useState } from "react";

const AddCategory = ({ setCategory }) => {
    //creation of the state
    const [value, setValue] = useState("");
    const [error, setError] = useState(false);

    //creation of a search function
    const serchGif = Event => {
        Event.preventDefault();
        // validation of the box
        if (value === "") {
            setError(true)
            return;
        }
        //remove the error message from another search as long as the field is not empty
        setError(false);
        setCategory(value);
        setValue("")

    }




    return (
        //creation of the search engine in a fragment

        <>

            {value}
            <form onSubmit={serchGif}>
                <input type="text" placeholder="Ingresa tu categoria"
                    //set the placeholder to setValue
                    onChange={Event => setValue(Event.target.value)}
                />
            </form>

            {//print the error using a conditional 
                error ? <p>El campo no puede estar vacio</p> : ""}

            <h2> Categorias </h2>
        </>

    );

}

export default AddCategory;