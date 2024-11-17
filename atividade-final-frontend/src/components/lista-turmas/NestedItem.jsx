import React, { useState } from 'react'
import { ExpandLess, ExpandMore, Person } from '@mui/icons-material';
import { Box, Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import ListItemsAlunos from '../lista-alunos/listItems';

function NestedItem({aluno, turmaId}) {
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
            <ListItemButton key={`${turmaId}-a`} onClick={handleClick}>
                    <ListItemText primary="Alunos"/>
                    {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List>
                    <ListItemsAlunos alunosData={aluno}/>
                </List>
            </Collapse>
        </Box>
  )
}

export default NestedItem