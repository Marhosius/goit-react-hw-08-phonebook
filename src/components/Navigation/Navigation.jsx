import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


const Navigation = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Button onClick={() => navigate('/contacts')} color="inherit">Contacts</Button>
                    <Button onClick={() => navigate('/login')} color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navigation
