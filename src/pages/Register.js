import React from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const handleRegister = () => {
    // Lógica para cadastro
    navigate('/login');
  };

  return (
    <div className='container'>
      <h2>Cadastro</h2>
      <form>
        <label>Nome</label>
        <input type="text" required />
        <label>Email</label>
        <input type="email" required />
        <label>Senha</label>
        <input type="password" required />
        <button type="button" onClick={handleRegister}>Cadastrar</button>
      </form>
      <button className='voltar' onClick={() => navigate(-1)}>Voltar</button>
    </div>
  );
}

export default Register;
