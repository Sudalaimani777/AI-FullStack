import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"

const UserRegisterContext = createContext();

export const UserRegisterProvider = ({ children }) => {

    const [userDetails, setUserDetails] = useState({ userName: "", userEmail: "", userPassword: "" });
    const [allUsersData, setAllUsersData] = useState(() => {
        try {
            const getUserData = JSON.parse(localStorage.getItem("allUserInfo"));
            return getUserData ? getUserData : []
        }
        catch (e) {
            return []
        }
    })

    const navigate = useNavigate();

    const handleUserInputChange = e => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value })
    }

    const handleUserRegistration = e => {
        e.preventDefault();

        const emailAlreadyExists = allUsersData.some(user => user.userEmail.toLowerCase() === userDetails.userEmail.toLowerCase());

        if(emailAlreadyExists){
            alert("This Email is already registered");
            return
        }

        setAllUsersData(prevUsers => [...prevUsers, userDetails]);
        setUserDetails({ userName: "", userEmail: "", userPassword: "" });
        navigate("/login");
    }

    useEffect(() => {
        localStorage.setItem("allUserInfo", JSON.stringify(allUsersData))
    }, [allUsersData]);

    return (
        <UserRegisterContext.Provider value={{ userDetails, handleUserInputChange, handleUserRegistration }}>
            {children}
        </UserRegisterContext.Provider>
    )
}


export default UserRegisterContext