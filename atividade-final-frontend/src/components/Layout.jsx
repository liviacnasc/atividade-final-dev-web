import React, { useEffect, useState } from 'react';
import { AppBar, Box, CssBaseline, Divider, Drawer, Icon, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import { Draw, MenuBook, MenuRounded } from '@mui/icons-material';
import Sidebar from './sidebar/Sidebar';
import { Outlet, useNavigate } from 'react-router-dom';
import authServices from '../services/Auth';

const sidebarWidth = 240;

function Layout(props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const { logOut } = authServices();

  const authData = JSON.parse(localStorage.getItem('auth'));
  const navigate = useNavigate();

  useEffect(() => {
    if(!authData) {
      return navigate('auth')
    }
  })
  

  const handleSidebarClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  }

  const handleSidebarTransitionEnd = () => {
    setIsClosing(false);
  }

  const handleSidebarToggle = () => {
    if(!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  }

  const handleLogOut = () => {
    logOut();
    return navigate('/')
  }

  return(
    <Box sx={{display: 'flex'}}>
			<CssBaseline/>
      <AppBar
      sx={{
        width: {sm: `calc(100% - ${sidebarWidth}px)`},
        display: {sm: 'none'},
        }}>
        <Toolbar>
				<IconButton
					
					size='small'
          aria-label='abrir sidebar'
          edge='start'
          onClick={handleSidebarToggle}
          sx={{width:50}}>
            <MenuRounded/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box 
        component="nav"
        sx={{width: {sm: sidebarWidth}, flexShrink: {sm: 0}}}
      >
        <Drawer
        variant='temporary'
        open={mobileOpen}
        onTransitionEnd={handleSidebarTransitionEnd}
        onClose={handleSidebarClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: {xs: 'block', sm: 'none'},
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: sidebarWidth }
        }}>
          <Sidebar callback={handleLogOut}/>
        </Drawer>
        <Drawer 
          variant='permanent'
          sx={{
            display: {xs: 'none', sm: 'block'},
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: sidebarWidth }
          }}
        >
          <Sidebar callback={handleLogOut}/>
        </Drawer>
      </Box>
      <Box component="main" sx={{ width: {sm: `calc(100% - ${sidebarWidth}px)`}}}>
      <Toolbar/>
				<Outlet/>
      </Box>
    </Box>
  )
}

export default Layout