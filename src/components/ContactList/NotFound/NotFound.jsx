import { Box, Typography } from '@mui/material'
import React from 'react'
import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';

const NotFound = () => {
    return (
        <Box
            sx={{
                marginTop: '-20px',
                width: '340px',
                backgroundColor: 'whitesmoke',
                borderRadius: `10px`,
                padding: `0 30px 30px 30px`,
            }}>
            <ImportContactsTwoToneIcon
                sx={{
                    display: 'block',
                    marginLeft: `auto`,
                    marginRight: `auto`,
                    width: '50px',
                    height: '50px',
                    borderRadius: `10px`,
                }} />
            <Typography variant="h6" component="span" sx={{
                width: '100%',
                display: 'block',
                textAlign: 'center',
                color: 'blue'


            }}>
                No contacts added
            </Typography>
        </Box>
    )
}

export default NotFound
