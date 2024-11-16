import React, { useEffect, useState } from 'react'
import turmasServices from '../services/Turmas'
import { Accordion, AccordionDetails, AccordionSummary, Box, CircularProgress, Collapse, Container, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { FixedSizeList } from 'react-window';
import { Expand, ExpandLess, ExpandMore, ExpandMoreSharp, Person } from '@mui/icons-material';
import ListItems from '../components/lista-turmas/listItems';

const Turmas = () => {
  const { getTurmas, turmasLoading, refetchTurmas, turmasList } = turmasServices();

  useEffect(() => {
      getTurmas();
  }, [refetchTurmas])
  
  if(turmasLoading){
    return (
      <CircularProgress/>
    )
  }
  return (
    <Box sx={{width: '100%'}}>
      <Typography variant='h5' sx={{textAlign: 'start', ml: 1}}>
        Turmas
      </Typography>
      { turmasList.length > 0 ? (
      <Container>
        <List component='div' disablePadding>
          <ListItems turmasData={turmasList}/>
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

export default Turmas