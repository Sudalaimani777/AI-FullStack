

function App() {
 
  const handleUserSubmit =(e) => {
    e.preventDefault();
    const formEement = e.currentTarget;
    const formData = new FormData(formEement);
    const userName = formData.get("userName")
    console.log(userName);
    formEement.reset();
  }

  return (
    <>
      <form action="" onSubmit={handleUserSubmit}>
        <input type="text" name="userName" id="userName"/>
        <button>Submit</button>
      </form>
    </>
  )
}

export default App
