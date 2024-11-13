import React from 'react';
import { useNavigate } from 'react-router-dom';

function AddStudent() {
  const navigate = useNavigate();

  const handleAddStudent = () => {
    // Lógica para cadastrar aluno
    alert('Aluno cadastrado com sucesso!');
    navigate('/dashboard');
  };

  return (
    <div className='container'>
      <h2>Cadastrar Aluno</h2>
      <div className='margin'>
      <form>
        <label>Nome do Aluno</label>
        <input type="text" required />
        <label>Idade</label>
        <input type="text" required />
        <label>Email</label>
        <input type="email" required />
        <label>Senha</label>
        <input type="password" required />
        <label>Ano</label>
        <select required>
          <option value="1">1º Ano</option>
          <option value="2">2º Ano</option>
          <option value="3">3º Ano</option>
        </select>
        <button type="button" onClick={handleAddStudent}>Cadastrar</button>
      </form>
      <button className='voltar' onClick={() => navigate(-1)}>Voltar</button>
      </div>
    </div>
  );
}

export default AddStudent;
