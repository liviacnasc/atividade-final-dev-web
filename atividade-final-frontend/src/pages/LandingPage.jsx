import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

export default function LandingPage() {
  return (
    <Box sx={{display: "flex"}}>
      <Navbar/>
      <Typography variant='h1'>
        Teste
      </Typography>
    </Box>
    // <div className='container'>
    //   <h1 className='merriweather-regular'>Sistema Administrativo</h1>
    //   <div className='margin'>
    //   <p className='merriweather-regular'>Gerencie alunos, turmas e muito mais!</p>
    //   </div>
    //   <Button variant='contained'>
    //     Entrar
    //   </Button>
    //   <button onClick={() => navigate('/login')}>Entrar</button>
    //   <button className='voltar' onClick={() => navigate('/register')}>Cadastrar-se</button>
    // </div>
  )
}
