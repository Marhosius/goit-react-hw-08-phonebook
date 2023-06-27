import { setToken } from 'api/authorization'
import Navigation from 'components/Navigation/Navigation'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { logOut } from 'store/Authorization/AuthorizationSlice'
import { getProfileThunk } from 'store/Authorization/AuthorizationThunk'

const Layout = () => {
    const { access_token, profile } = useSelector((state) => state.authorization)
    const dispatch = useDispatch()
    useEffect(() => {
        if (access_token && !profile) {
            setToken(access_token)
            dispatch(getProfileThunk())
                .unwrap()
                .catch(() => dispatch(logOut()))
        }
    }, [access_token, dispatch, profile])
    return (
        <>
            <Navigation />
            <Outlet />
        </>
    )
}

export default Layout