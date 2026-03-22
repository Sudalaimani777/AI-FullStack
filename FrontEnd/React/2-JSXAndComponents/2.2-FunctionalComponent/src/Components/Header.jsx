const Header = ({ navData }) => {
  return (
    <>
        <header>
            <nav>
                <ul>
                    <li>{navData.home}</li>
                    <li>{navData.about}</li>
                    <li>{navData.contact}</li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Header   