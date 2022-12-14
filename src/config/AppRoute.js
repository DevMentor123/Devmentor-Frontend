import React from 'react'
import { useAuthState } from '../context/AuthContext'
import {Navigate} from 'react-router-dom'

function AppRoute({children}) {
    const user = useAuthState()
    
    if(!Boolean(user.token) && user.userDetails.userType!=="admin"){
       return <Navigate  to={'/'}></Navigate>
    }
    return children;
}

export default AppRoute