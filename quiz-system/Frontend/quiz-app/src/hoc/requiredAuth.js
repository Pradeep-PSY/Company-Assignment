import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


export const RequiredauthAdmin = ({ children }) => {
    const {isAuth, role} = useSelector((state) => state.auth)
   
    
    if(isAuth && role === "admin"){
        return children
    }
    return <Navigate  to="/login" /> 
}


export const RequiredauthUser = ({ children }) => {
    const {isAuth, role} = useSelector((state) => state.auth)
   
    
    if(isAuth && role === "user"){
        return children
    }
    return <Navigate  to="/login" /> 
}