import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className='container'>
      <h1 className='merriweather-regular'>Sistema Administrativo</h1>
      <div className='margin'>
      <p className='merriweather-regular'>Gerencie alunos, turmas e muito mais!</p>
      </div>
      <button onClick={() => navigate('/login')}>Entrar</button>
      <button className='voltar' onClick={() => navigate('/register')}>Cadastrar-se</button>
    </div>
  );
}

export default LandingPage;
