import React, { useEffect, useState } from 'react'
import alunosServices from '../../services/Alunos'
import { Accordion, AccordionDetails, AccordionSummary, Box, CircularProgress, Collapse, Container, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import { FixedSizeList } from 'react-window';
import { Expand, ExpandLess, ExpandMore, ExpandMoreSharp, Person } from '@mui/icons-material';
import ListItems from '../../components/lista-turmas/listItems';
import ListItemsAlunos from '../../components/lista-alunos/listItems';

const Alunos = () => {
  const { getAlunos, alunosLoading, refetchAlunos, alunosList } = alunosServices();
  const [open, setOpen] = useState(false);

  useEffect(() => {
      getAlunos();
  }, [refetchAlunos])
  
  const handleClick = () => {
    if(!open){
      setOpen(true);
    }else{
      setOpen(false);
    }
  }

  if(alunosLoading){
    return (
      <Box>
        <CircularProgress/>
      </Box>
    )
  }
  return (
    <Box sx={{width: '100%'}}>
      <Toolbar>
        <Typography variant='h5' sx={{textAlign: 'start', ml: 1}}>
          Alunos
        </Typography>
      </Toolbar>
      { alunosList.length > 0 ? (
      <Container>
        <List component='div' disablePadding >
          <ListItemsAlunos alunosData={alunosList}/>
        </List>
      </Container>
      ):
      (
      <Typography>
        Sem dados
      </Typography>

      )}
    </Box>
  )
}

export default Alunos