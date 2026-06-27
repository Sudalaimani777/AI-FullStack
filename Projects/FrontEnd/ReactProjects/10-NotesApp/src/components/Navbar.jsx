import logo from "../assets/images/logo.webp"

const Navbar = () => {
  return (
    <>
        <header>
            <div className="flex gap-4 items-center mx-5 px-3 py-1">
                <img src={logo} alt="logo_img" width={65}/>
                <h1 className="text-4xl font-semibold">NoteIt</h1>
            </div>
            <nav>
                
            </nav>
        </header>
    </>
  )
}

export default Navbar