const App = () => {
  const aboutPage = {
    pageTitle: "Welcome To React Learning",
    userName: "Sudalaimani",
    userAge: 22,
    userAddress: {
      streetNo: "1st",
      doorNo : "19/4",
      city: "Ettaiyapuram",
      state: "TamilNadu"
    }
  }

  const multipleUsers = [
    {userId : 1, userName: "Sudalaimani"},
    {userId : 2, userName: "Giffy"},
    {userId : 3, userName: "Bala"},
  ]
  return (
    <>
      <section>
        <h1>{aboutPage.pageTitle}</h1>
        <p>{`The user name is ${aboutPage.userName} with an age of ${aboutPage.userAge}. The user address is ${aboutPage.userAddress.doorNo}, ${aboutPage.userAddress.city}, ${aboutPage.userAddress.state}`}</p>
      </section>

      {/* Access the JS using Map */}
      <section>
        {
          multipleUsers.map(users => (
            <h2 key={users.userId}>{users.userName}</h2>
          ))
        }
      </section>
    </>
  )
}

export default App