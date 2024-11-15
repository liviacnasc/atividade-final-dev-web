import { Box, Button, CircularProgress, TextField } from '@mui/material'
import React, { useState } from 'react'
import authServices from '../../services/Auth';

function CadastroForm({onChange, onSubmit}) {
    const [formData, setFormData] = useState(null);
    const { signUp, authLoading } = authServices();

    const handleFormDataChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    
    
    }
    
    const handleSubmitForm = (e) => {
        e.preventDefault()
        if(formData.password !== formData.confirmPassword){
          console.log("As senhas não coincidem.")
          return
        }
        signUp(formData);
     }

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
        <Button type='submit' variant='contained'>
            Cadastre-se
        </Button>
    </Box>
  )
}

export default CadastroForm