import React from 'react'
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { IconButton } from '@mui/joy';
import { DashboardRounded } from '@mui/icons-material'
import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
import { Link } from 'react-router-dom'

const SidebarItem = ({id, icon, primary, link}) => {
    return (
        <ListItem key={id} component={Link} to={link} sx={{color: "#000"}} disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={primary}/>
            </ListItemButton>
        </ListItem>
    )
}

export const Sidebar = () => {
  return (
    <div>
        <Toolbar>
            <Typography variant='h6' noWrap component="div">
                Escola Fácil
            </Typography>
        </Toolbar>
        <Divider/>
        <Toolbar>
            <List component="nav">
                <SidebarItem id="0" primary="Dashboard" icon={<DashboardRounded/>} link="/dashboard"/>
                <SidebarItem id="1" primary="Alunos" icon={<GroupIcon/>} link="alunos"/>
                <SidebarItem id="2" primary="Turmas" icon={<SchoolIcon/>} link="turmas"/>
            </List>
        </Toolbar>
    </div>
  )
}

export default Sidebar