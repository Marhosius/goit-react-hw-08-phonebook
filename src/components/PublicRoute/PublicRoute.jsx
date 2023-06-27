import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({ children }) => {
    const isAuth = useSelector((state) => state.authorization.access_token)

    return !isAuth ? children : <Navigate to={'/'} />
}

export default PublicRoute