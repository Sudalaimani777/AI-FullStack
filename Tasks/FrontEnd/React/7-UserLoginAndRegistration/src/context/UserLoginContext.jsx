import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom"


const UserLoginContext = createContext();

export const UserLoginProvider = ({ children }) => {

    const [loginUserDetails, setLoginUserDetails] = useState({ userEmail: "", userPassword: "" })
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("currentUsers")) || null);

    const navigate = useNavigate();

    const handleUserLoginInputChange = e => {
        const { name, value } = e.target;
        setLoginUserDetails({ ...loginUserDetails, [name]: value })
    }

    const handleUserLogin = e => {
        e.preventDefault();
        const allUser = JSON.parse(localStorage.getItem("allUserInfo")) || [];

        const matchedUser = allUser.find(user => user.userEmail === loginUserDetails.userEmail && user.userPassword === loginUserDetails.userPassword);

        if(matchedUser){
            localStorage.setItem("currentUsers", JSON.stringify(matchedUser));
            setCurrentUser(matchedUser);
            setLoginUserDetails({ userEmail: "", userPassword: "" })
            navigate("/dashboard");
            return
        }else{
            alert("Invalid Email or password")
        }
    }

    return (
        <UserLoginContext.Provider value={{handleUserLogin, handleUserLoginInputChange, currentUser, loginUserDetails}}>
            {children}
        </UserLoginContext.Provider>
    )
}

export default UserLoginContext;