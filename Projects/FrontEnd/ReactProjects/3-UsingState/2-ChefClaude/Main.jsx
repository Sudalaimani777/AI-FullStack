import React, { useEffect } from "react"
import { useRef } from "react";
import ClaudeRecipe from "./Components/ClaudeRecipe";
import IngredientsList from "./Components/IngredientsList";
import {getRecipeFromOpenRouter } from "./services/ai.js";

export default function Main() {

    const [ingredients, setIngredients] = React.useState(["eggs", "milk", "bread", "cheese"]);
    const [recipeShown, setRecipeShown] = React.useState(false);
    const [recipe, setRecipe] = React.useState("");
    const recipeSection = useRef(null);

    useEffect(() => {
        if (recipe !== "" && recipeSection !== null) {
            // recipeSection.current.scrollIntoView({ behavior: "smooth" }); // alternative to scrollIntoView that works better with Safari

            // scroll to the recipe section when a new recipe is generated
            const yCoordinate = recipeSection.current.getBoundingClientRect().top + window.pageYOffset;
            window.scroll({ top: yCoordinate, behavior: "smooth" });
        }
    }, [recipe]);

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    const addIngredient = formData => {
        const newIngredient = formData.get("ingredient");
        setIngredients(previousIngredients => [...previousIngredients, newIngredient])
    }

    // const handleGetRecipe = () => setRecipeShown(prevState => !prevState); // toggle recipe shown on/off when button is clicked

    const handleGetRecipe = async () => {
        const recipeText = await getRecipeFromOpenRouter(ingredients);
        setRecipe(recipeText);
        setRecipeShown(true);
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 && <IngredientsList 
                                            handleGetRecipe={handleGetRecipe} 
                                            ingredientsListItems={ingredientsListItems} 
                                            ingredients={ingredients}
                                            ref={recipeSection}
                                        />
            }
            {/* Recipe display logic would go here */}
            {
                ingredients.length > 3 && recipeShown ?
                    <ClaudeRecipe recipe={recipe}/> : null

            }
        </main>
    )
}