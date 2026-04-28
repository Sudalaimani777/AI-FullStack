import { useState } from 'react'
import { userFields } from './Types/types'
import Form from './Shared/Form';


function App() {

  const [userData, setUserData] = useState(userFields)

  // The shared component is defined as the process of updating the state of an object is different from updating the state of a primitive value. When we update the state of an object, we need to create a new object with the updated values instead of directly modifying the existing object. This is because React relies on immutability to detect changes and trigger re-renders.
  // In the case of updating the state of an object, we can use the spread operator to create a new object that includes all the existing properties of the object and then override the specific property that we want to update. This way, we ensure that we are not directly modifying the existing object and that React can properly detect the changes and trigger re-renders when necessary.

  const handleFormSubmit = e => {
    e.preventDefault();
    console.log(userData);
  }

  const handleUserData = e => {
    const {name, value} = e.target;
    setUserData(prevData => ({...prevData, [name] : value}))
  }



  return (
    <>
      <section>
        <Form onSubmit={handleFormSubmit}>
          <p>
            <label htmlFor="userName">Name : </label>
            <input
              type="text"
              name="userName"
              id="userName"
              value={userData.userName}
              required
              placeholder='Enter your name'
              onChange={handleUserData}
            />
          </p>
          <p>
            <label htmlFor="userEmail">Email : </label>
            <input
              type="email"
              name="userEmail" id="userEmail"
              value={userData.userEmail}
              placeholder='Enter your email'
              onChange={handleUserData}
            />
          </p>
          <p>
            <label htmlFor="userPassword">Password : </label>
            <input
              type="password"
              name="userPassword"
              id="userPassword"
              value={userData.userPassword}
              placeholder='Enter your password'
              onChange={handleUserData}
            />
          </p>
          <input type="submit" value="Submit" />
        </Form>
      </section>
    </>
  )
}

export default App
