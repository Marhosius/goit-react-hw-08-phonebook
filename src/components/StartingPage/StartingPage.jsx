import { Box, Link } from '@mui/material'
import React from 'react'
import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';

const StartingPage = () => {
    return (
        <Box
            sx={{
                width: '100%',
                borderRadius: `10px`,
                padding: `50px 30px 30px 30px`,
            }}>
            <ImportContactsTwoToneIcon
                sx={{
                    display: 'block',
                    marginLeft: `auto`,
                    marginRight: `auto`,
                    width: '150px',
                    height: '150px',
                    borderRadius: `10px`,
                }} />
            <Link href="contacts" underline="none" sx={{
                fontSize: '32px',
                width: '100%',
                display: 'block',
                textAlign: 'center',
                color: 'blue'


            }}>
                Manage your contacts
            </Link>
        </Box>
    )
}

export default StartingPage