import { ExpandLess, ExpandMore, Person } from '@mui/icons-material'
import { Box, Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'

export default function NestedItemAlunos({data}) {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        if(!open){
            setOpen(true);
        }else{
            setOpen(false);
        }
        }
    return (
        <Box sx={{width: '100%'}}>
            <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                    <Person />
                    </ListItemIcon>
                    <ListItemText primary="Alunos"/>
                    {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List>
                {data.flat().map((data) => 
                    <ListItemButton sx={{display: 'flex', flexFlow: 'column', alignItems: 'start'}} key={data._id}>
                    <ListItemText primary={`${data.nome} ${data.sobrenome}`} secondary={`CPF: ${data.cpf}`}/>
                    </ListItemButton>
                )}
                </List>
            </Collapse>
        </Box>
  )
}