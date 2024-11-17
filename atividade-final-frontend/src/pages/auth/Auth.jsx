import { Box, Button, Container, Snackbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import LoginForm from '../../components/auth/LoginForm';
import CadastroForm from '../../components/auth/CadastroForm';
import { useNavigate } from 'react-router-dom';
import authServices from '../../services/Auth';

export const Auth = () => {
    const [formType, setFormType] = useState('login');
    const [formData, setFormData] = useState(null);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const navigate = useNavigate();
    const authData = JSON.parse(localStorage.getItem('auth'));
    const { logIn, signUp, response } = authServices();
  
    useEffect(() => {
      if(authData) {
        return navigate('/dashboard')
      }
    })

    const handleClick = () => {
        setOpenSnackbar(true);
    };

    const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }

    setOpenSnackbar(false);
    };

    const handleFormType = () => {
        if(formType == 'login'){
            setFormType('cadastro');
        }else{
            setFormType('login');
        }
    }

    const handleFormDataChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()

        if(formType == 'login'){
            logIn(formData);
            handleClick();
        }

        if(formType == 'cadastro'){
            signUp(formData);
            handleClick();
        }
      }
      
    if(formType == 'login'){
        return (
            <Container
                maxWidth={false}
                sx={{
                    backgroundImage: "url('src/assets/bg.png')",
                    backgroundRepeat: 'repeat',
                    objectFit: 'cover',
                    height: '100vh',
                    width: '100vw',
                    display: 'flex',
                    flexFlow: 'column',
                    justifyContent: 'center'
                    }}>
                <Box component={Container} maxWidth='sm' sx={{display:'flex', flexFlow:'column', padding: "30px", boxShadow: 2, bgcolor:'white'}}>
                    <Typography variant='body1' sx={{mb: "10px"}}>
                        Login
                    </Typography>
                    <LoginForm onChange={handleFormDataChange} onSubmit={handleSubmitForm}/>
                    <Typography variant='body2' sx={{my: "10px"}}>
                        Não possui uma conta?
                    </Typography>
                    <Button variant='outlined' onClick={handleFormType} sx={{alignSelf: 'center'}}>
                        Cadastre-se
                    </Button>
                </Box>
            </Container>
        )
    }
    if(formType == 'cadastro'){
        return (
            <Container
                maxWidth={false}
                sx={{
                    backgroundImage: "url('src/assets/bg.png')",
                    backgroundRepeat: 'repeat',
                    objectFit: 'cover',
                    height: '100vh',
                    width: '100vw',
                    display: 'flex',
                    flexFlow: 'column',
                    justifyContent: 'center'
                    }}>
                <Snackbar 
                    open={openSnackbar}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message={response}
                />
                <Box component={Container} maxWidth='sm' sx={{display:'flex', flexFlow:'column', padding: "30px", boxShadow: 2, bgcolor:'white'}}>
                    <Typography variant='body1' sx={{mb: "10px"}}>
                        Cadastro
                    </Typography>
                    <CadastroForm onChange={handleFormDataChange} onSubmit={handleSubmitForm}/>
                    <Typography variant='body2' sx={{my: "10px"}}>
                        Já possui uma conta?
                    </Typography>
                    <Button variant='outlined' onClick={handleFormType} sx={{alignSelf: 'center'}}>
                        Login
                    </Button>
                </Box>
            </Container>
        )
    }
}