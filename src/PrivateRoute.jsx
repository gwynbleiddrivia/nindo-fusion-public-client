import {AuthContext} from './authentication/AuthProvider.jsx'
import {useContext} from 'react'
import {useLocation, Navigate} from 'react-router-dom'

const PrivateRoute = ({children}) => {
        const location = useLocation()
        const {user} = useContext(AuthContext)
        if(user){
                return children
        }
        return <Navigate to="/login" state={{from:location}} replace></Navigate>
};                                                                                                       

export default PrivateRoute;

