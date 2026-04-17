import React from 'react'

const IngredientsList = ({ handleGetRecipe, ingredientsListItems, ingredients, ref }) => {
    return (
        <>
            <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
                {ingredients.length     > 3 && <div className="get-recipe-container">
                    <div ref={ref}>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={handleGetRecipe}>Get a recipe</button>
                </div>}
            </section>
        </>
    )
}

export default IngredientsList