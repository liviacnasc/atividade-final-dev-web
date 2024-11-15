import { Box, Button, CircularProgress, TextField } from '@mui/material'
import React, { useState } from 'react'
import authServices from '../../services/Auth';

function LoginForm({onChange, onSubmit}) {
    const [formData, setFormData] = useState(null);
    const { logIn, authLoading } = authServices();

    if(authLoading){
      return (
        <CircularProgress/>
      )
      }

  return (
    <Box onSubmit={onSubmit} component="form" sx={{display: 'flex', flexFlow: 'column noWrap', gap: '20px'}}>
        <TextField
          required
          variant='outlined'
          id="email"
          label="E-mail"
          placeholder='E-mail'
          type='email'
          name='email'
          onChange={onChange}
        />
        <TextField
          required
          variant='outlined'
          id='password'
          label="Senha"
          placeholder='Senha'
          type='password'
          name='password'
          onChange={onChange}
        />
        <Button type='submit' variant='contained'>
            Login
        </Button>
    </Box>
  )
}

export default LoginForm