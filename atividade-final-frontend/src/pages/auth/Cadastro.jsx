import React from 'react'

const Cadastro = () => {
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
      <button type="button" onClick={() => {}}>Cadastrar</button>
    </form>
    <button className='voltar' onClick={() => {}}>Voltar</button>
  </div>
  )
}

export default Cadastro