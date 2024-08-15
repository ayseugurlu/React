import axios from "axios"

//! context alani crerate edelim

import { createContext, useState } from "react";

export const RecipeContext = createContext()

const RecipeProvider=({children})=>{

    //!login ve private sayfalarinda gerekli usestate leri acalim

    const [name, setName]=useState(localStorage.getItem("username") ||  "")
    const [password,setPassword]=useState(localStorage.getItem("password") || "")

    
    //! home , header ve recipecard da gerekli olan veriler icin usestateler

    const [recipes,setRecipes]=useState([])
    const [query,setQuery]=useState("")
    const [mealType,setMealType]=useState("Breakfast")
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(false)

    const APP_ID = "bfbb3efc";
    const APP_KEY = "43faeee790f26cd82b28050d3031619d";

    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`;

    const getData =async()=>{
        const {data} = await axios.get(url)
        // console.log(data.hits);
        console.log(recipes);

        setRecipes(data.hits)
    }



    return(
        <RecipeContext.Provider value={{
            name,
            password,
            setName,
            setPassword,
            setQuery,
            setMealType,
            recipes,
            getData
          }}>
            {children}
        </RecipeContext.Provider>
    )
}

export default RecipeProvider;