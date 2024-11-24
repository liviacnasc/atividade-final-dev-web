import { Box, Button, CircularProgress, TextField } from '@mui/material'
import React, { useState } from 'react'
import authServices from '../../services/Auth';

function CadastroForm({onChange, onSubmit}) {
    const { authLoading } = authServices();

    if(authLoading){
    return (
      <CircularProgress/>
    )
    }

  return (
    <Box onSubmit={onSubmit} component="form" sx={{display: 'flex', flexFlow: 'column', gap: '20px',}}>
        <TextField
          required
          variant='outlined'
          id="userName"
          label="Nome completo"
          placeholder='Nome completo'
          type='text'
          name='userName'
          onChange={onChange}
        />
        
        <TextField
          required
          variant='outlined'
          label="E-mail"
          placeholder='E-mail'
          type='email'
          name='email'
          onChange={onChange}
        />
        <TextField
          required
          variant='outlined'
          label="Senha"
          placeholder='Senha'
          type='password'
          name='password'
          onChange={onChange}
        />
        <TextField
          required
          variant='outlined'
          label="ConfirmPassword"
          placeholder='Senha'
          type='password'
          name='confirmPassword'
          onChange={onChange}
        />
        <Button type='submit' variant='contained' sx={{alignSelf: 'center'}}>
            Cadastre-se
        </Button>
    </Box>
  )
}

export default CadastroForm