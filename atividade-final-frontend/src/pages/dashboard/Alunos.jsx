import React, { useEffect, useState } from 'react'
import alunosServices from '../../services/Alunos'
import { Box, CircularProgress, Container, Fab, List, Modal, Snackbar, Toolbar, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';
import ListItemsAlunos from '../../components/lista-alunos/listItems';
import AlunoForm from '../../components/forms/AlunoForm';
import { useNavigate } from 'react-router-dom';

const Alunos = () => {
  const { getAlunos, alunosLoading, refetchAlunos, alunosList, response } = alunosServices();
  const [open, setOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();

  
  const handleOpenModal = () => navigate('adicionar-aluno')

  useEffect(() => {
      getAlunos();
  }, [refetchAlunos])

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
      <Fab color="primary" onClick={handleOpenModal} sx={{    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',}} aria-label="add">
        <Add />
      </Fab>
    </Box>
  )
}

export default Alunos