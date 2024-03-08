import AddCategory from "./components/AddCategory"
import React, { useState } from "react";

function App() {

    //creation of the state

    const [category, setCategory] = useState("")

    return (
        <div>
            <h1>Buscador de gifs</h1>
            <AddCategory setCategory={setCategory} />
        </div>

    )
}

export default App