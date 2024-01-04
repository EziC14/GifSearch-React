import { useState } from "react"
import { AddCategory } from "./components/addCategory"
import { GitGrid } from "./components/GIfGrid"

export const GitExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon ball'])

    const onAddCategory = (newCategory) =>{
        if (categories.includes(newCategory)) return alert('Ya se busco esta categoria');
        setCategories([newCategory, ...categories ])
    }

    return(
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory 
                onNewCategory={onAddCategory}
            />

            {/* Listado de Gif */}

            {
            categories.map(category => (
                <GitGrid
                    key={category} 
                    category={category}
                />
            ))}

                {/* Gif Item */}
        </>
    )
}