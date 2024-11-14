import React, { useState } from 'react';
import { AppBar, Box, CssBaseline, Divider, Drawer, Icon, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import { Draw, MenuBook, MenuRounded } from '@mui/icons-material';
import Sidebar from './sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const sidebarWidth = 240;

function Layout(props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

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


  return(
    <Box sx={{display: 'flex'}}>
			<CssBaseline/>
      <AppBar
      position='fixed'
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
          <Sidebar/>
        </Drawer>
        <Drawer 
          variant='permanent'
          sx={{
            display: {xs: 'none', sm: 'block'},
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: sidebarWidth }
          }}
        >
          <Sidebar/>
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
				<Outlet/>
      </Box>
    </Box>
  )
}

export default Layout