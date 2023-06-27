import { Button, Toolbar, Typography } from '@mui/material'
import { dellToken } from 'api/authorization'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logOut } from 'store/Authorization/AuthorizationSlice'

const UserMenu = () => {
    const { profile } = useSelector((state) => state.authorization)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleLogOut = () => {
        dispatch(logOut())
        dellToken()
    }

    return (
        <Toolbar>
            <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
                {profile?.email}
            </Typography>
            <Button onClick={() => {
                handleLogOut();
                navigate('/login')
            }
            } color="inherit">Logout</Button>
        </Toolbar>
    )
}

export default UserMenu