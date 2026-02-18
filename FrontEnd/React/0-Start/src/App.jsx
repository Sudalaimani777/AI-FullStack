

// const App = () => {

//   const name = "Javid";
//   const age = 100;

//   const users = [
//     {id:1, text:"User 1"},
//     {id:2, text:"User 2"},
//     {id:3, text:"User 3"},
//   ];



//   return (
//    <>
//       <h1>Name: {name}</h1>
//       <p>Age:{age}</p>

//       <span>{5 + 5}</span>

//       <h3>{name.toUpperCase()}</h3>

//       <ul>
//         {
//           users.map((user) => (
//             <li key={user.id}>{user.text}</li>
//           ))
//         }
//       </ul>
//    </>
//   )
// }

// export default App



const App = () => {
  //Above the return we can write any JavaScript code, such as variable declarations, functions, or any other logic that we want to use within our component. This allows us to prepare data or perform calculations before rendering the JSX in the return statement.
  const userName = "Sudalaiamani"

  const users = [
    { id: 1, userName: "Arun" },
    { id: 2, userName: "Ram" },
    { id: 3, userName: "Bala" },
    { id: 4, userName: "Kumar" },
  ]

  return (
    // The return statement is where we define the JSX that will be rendered to the DOM. JSX is a syntax extension for JavaScript that allows us to write HTML-like code within our JavaScript files. In this case, we are returning a fragment (<>...</>) that contains a section with an h1 element displaying the userName in uppercase and another section that maps through the users array to display each user's userName in a paragraph element. The key prop is used to help React identify which items have changed, are added, or are removed, which improves the performance of the rendering process.
    <>
      <section>
        {/* With the help od {} we can inject JavaScript expressions into JSX and also we can add the javascript methods */}
        <h1>{userName.toUpperCase()}</h1>

        <section>
          {
            users.map(user => (
              <p key={user.id}>{user.userName}</p>
            ))
          }
        </section>

          {/* We can also perform the js stuffs like add  */}
        <h3>{5 + 10}</h3>
      </section>
    </>
  )
}

export default App