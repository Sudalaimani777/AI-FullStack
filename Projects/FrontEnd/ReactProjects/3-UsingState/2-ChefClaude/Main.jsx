import React from "react"
import ClaudeRecipe from "./Components/ClaudeRecipe";
import IngredientsList from "./Components/IngredientsList";
import {getRecipeFromOpenRouter } from "./services/ai.js";

export default function Main() {

    /**
 * Challenge: Get a recipe from the AI!
 * 
 * This will be a bit harder of a challenge that will require you
 * to think critically and synthesize the skills you've been
 * learning and practicing up to this point.
 * 
 * Using either the `getRecipeFromChefClaude` function or the 
 * `getRecipeFromMistral` function, make it so that when the user
 * clicks "Get a recipe", the text response from the AI is displayed
 * in the <ClaudeRecipe> component.
 * 
 * For now, just have it render the raw markdown that the AI returns,
 * don't worry about making it look nice yet. (We're going to use a
 * package that will render the markdown for us soon.)
 */

    const [ingredients, setIngredients] = React.useState(["eggs", "milk", "bread", "cheese"]);
    const [recipeShown, setRecipeShown] = React.useState(false);
    const [recipe, setRecipe] = React.useState("");

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
            {ingredients.length > 0 && <IngredientsList handleGetRecipe={handleGetRecipe} ingredientsListItems={ingredientsListItems} ingredients={ingredients}/>}
            {/* Recipe display logic would go here */}
            {
                ingredients.length > 3 && recipeShown ?
                    <ClaudeRecipe recipe={recipe}/> : null

            }
        </main>
    )
}