import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className='container'>
      <h2>Dashboard</h2>
      <div className='margin'>
      <button onClick={() => navigate('/dashboard/add-student')}>Cadastrar Aluno</button>
      <button onClick={() => navigate('/dashboard/class-list')}>Lista de Turmas</button>
      <div className='margin'>
      <button className='voltar' onClick={() => navigate(-1)}>Voltar</button>
      </div>
      </div>
    </div>
  );
}

export default Dashboard;
