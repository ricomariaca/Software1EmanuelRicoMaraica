import AddCategory from "./components/AddCategory"
import React, { useState } from "react";
import ShowGif from "./components/ShowGif";

function App() {

    //creation of the state

    const [category, setCategory] = useState("")

    //are called components
    return (
        <div>
            <h1>Buscador de gifs</h1>
            <AddCategory setCategory={setCategory} />
            <ShowGif category={category}/>
        </div>

    )
}

export default App