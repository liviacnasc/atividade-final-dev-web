import { Person } from '@mui/icons-material'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box sx={{display: 'flex'}}>
        <AppBar>
            <Toolbar sx={{justifyContent: 'space-between'}}>
                <Typography>
                    Teste
                </Typography>
                <Button variant='text' sx={{color: 'white'}} component={Link} to='/dashboard'>
                    Acessar dashboard
                </Button>
            </Toolbar>
        </AppBar>
        <Toolbar/>
    </Box>
  )
}

export default Navbar