import { useContext } from 'react'
import UserLoginContext from '../context/UserLoginContext'

const Dashboard = () => {

  const { currentUser } = useContext(UserLoginContext);
  console.log(currentUser)

  return (
    <>
      <section>
        <h1>Dashboard</h1>
        <h3>Welcome {currentUser?.userName}</h3>
      </section>
    </>
  )
}

export default Dashboard