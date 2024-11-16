import { ExpandLess, ExpandMore, Person } from '@mui/icons-material'
import { Box, Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'

function NestedItem({aluno}) {
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
                {aluno.map((aluno) => 
                    <ListItemButton sx={{display: 'flex', flexFlow: 'column', alignItems: 'start'}} key={aluno._id}>
                    <ListItemText primary={`${aluno.nome} ${aluno.sobrenome}`} secondary={`CPF: ${aluno.cpf}`}/>
                    </ListItemButton>
                )}
                </List>
            </Collapse>
        </Box>
  )
}

export default NestedItem