import React from 'react'
import { Box, Button, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { DashboardRounded, Logout } from '@mui/icons-material'
import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
import { Link } from 'react-router-dom'
import authServices from '../../services/Auth';

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

export default function Sidebar({callback}) {
    const { response } = authServices();

    return (
    <div>
        <Box>
            <Toolbar>
                <Typography variant='h6' noWrap component="div">
                    Escola Fácil
                </Typography>
            </Toolbar>
            <Divider/>
            <Toolbar>
                <List sx={{width: '100%'}}>
                    <SidebarItem id="1" primary="Home" icon={<DashboardRounded/>} link="/dashboard"/>
                    <SidebarItem id="1" primary="Alunos" icon={<GroupIcon/>} link="alunos"/>
                    <SidebarItem id="2" primary="Turmas" icon={<SchoolIcon/>} link="turmas"/>
                </List>
            </Toolbar>
        </Box>
        <Box>
            <Toolbar>
                {
                    response.flat().map((response) => <Typography variant='body1'>{response.body.nome_completo}</Typography>)
                }
                <Typography sx={{margin: 2}}>Sair</Typography>
                <Button variant='outlined' sx={{color: 'gray', maxWidth: 'fit-content', "&:hover": {color: 'black', backgroundColor: 'gray'}}} onClick={callback} aria-label='Sair'>
                    <Logout sx={{fontSize: '12px'}}/>
                </Button>
            </Toolbar>
        </Box>
    </div>
  )
}