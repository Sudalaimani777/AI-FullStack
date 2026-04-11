import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {


  const signUp = formData => {
    //Taking All the form data and converting it into an object using Object.fromEntries() method :-
    // const email = formData.get("email");
    // const password = formData.get("password");
    // const description = formData.get("description");
    // const employmentStatus = formData.get("employmentStatus");
    // const dietaryRestrictions = formData.getAll("dietaryRestrictions");
    // const favouriteColor = formData.get("chooseColor")
    // console.log(favouriteColor);
    // console.log(email);

    //Object.formEntries() is a method that transforms an array of key-value pairs into an object. It takes an iterable (like an array) of key-value pairs and returns a new object where the keys are the first elements of the pairs and the values are the second elements.

    const allFormData = Object.fromEntries(formData);
    const dietaryRestrictions = formData.getAll("dietaryRestrictions");
    const finalData = {...allFormData, dietaryRestrictions};
    console.log(finalData);

  }

  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>
 
        <label htmlFor="email">Email:</label>
        <input id="email" defaultValue="joe@schmoe.com" type="email" name="email" placeholder="joe@schmoe.com" />

        <label htmlFor="password">Password:</label>
        <input id="password" defaultValue="password123" type="password" name="password" />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" defaultValue="This is a description"></textarea>

        <fieldset>
          <legend>Employment Status:</legend>
          <label>
            <input type="radio" name="employmentStatus" value="unemployed" />
            Unemployed
        </label>
          <label>
            <input type="radio" name="employmentStatus" value="part-time" />
            Part-time
        </label>
          <label>
            <input type="radio" name="employmentStatus" defaultChecked={true} value="full-time" />
            Full-time
        </label>
        </fieldset>

        <fieldset>
          <legend>Dietary restrictions:</legend>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="kosher" />
            Kosher
        </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="vegan" />
            Vegan
        </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" defaultChecked={true} value="gluten-free" />
            Gluten-free
        </label>
        </fieldset>

        <label htmlFor="chooseColor">What is your favorite color?</label>
        <select name="chooseColor" id="chooseColor" required defaultValue="">
          <option value="" disabled>-- Choose Your Favourite Color --</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>

        <button>Submit</button>

      </form>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);