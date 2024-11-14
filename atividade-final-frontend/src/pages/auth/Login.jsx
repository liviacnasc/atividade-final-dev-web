import React from 'react'

const Login = () => {
  return (
    <div className='container'>
    <h2>Login</h2>
    <form>
      <div className=''>
      <label>Email</label>
      <input type="email" required />
      <label>Senha</label>
      <input type="password" required />
      <button type="button" onClick={() => {}}>Entrar</button>
      </div>
    </form>
    <button className='voltar' onClick={() => {}}>Voltar</button>
  </div>
  )
}

export default Login