import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';


const Navigation = () => {
    const { access_token: isAuth } = useSelector((state) => state.authorization)
    const navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Button onClick={() => navigate('/contacts')} color="inherit">Contacts</Button>
                    {!isAuth ? < Button onClick={() => navigate('/login')} color="inherit">
                        Login
                    </Button> : <UserMenu />}
                </Toolbar>
            </AppBar>
        </Box >
    )
}

export default Navigation
