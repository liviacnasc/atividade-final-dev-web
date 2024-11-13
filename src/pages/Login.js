import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulação de login
    navigate('/dashboard');
  };

  return (
    <div className='container'>
      <h2>Login</h2>
      <form>
        <div className=''>
        <label>Email</label>
        <input type="email" required />
        <label>Senha</label>
        <input type="password" required />
        <button type="button" onClick={handleLogin}>Entrar</button>
        </div>
      </form>
      <button className='voltar' onClick={() => navigate(-1)}>Voltar</button>
    </div>
  );
}

export default Login;
