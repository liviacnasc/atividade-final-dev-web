import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ClassList() {
  const navigate = useNavigate();
  const [selectedClass, setSelectedClass] = useState(null);

  const classes = {
    "1º Ano": ["Aluno A", "Aluno B"],
    "2º Ano": ["Aluno C", "Aluno D"],
    "3º Ano": ["Aluno E", "Aluno F"]
  };

  const handleToggleStudents = (classYear) => {
    // Se a turma já estiver selecionada, fechamos a lista; caso contrário, mostramos a lista dessa turma
    setSelectedClass(selectedClass === classYear ? null : classYear);
  };

  return (
    <div className='container'>
      <h2>Lista de Turmas</h2>
      {Object.keys(classes).map((classYear) => (
        <div className='margin' key={classYear}>
          <h3>{classYear}</h3>
          <button className='small-button' onClick={() => handleToggleStudents(classYear)}>
            {selectedClass === classYear ? "Fechar Lista" : "Listar Alunos"}
          </button>
          {selectedClass === classYear && (
            <ul>
              {classes[classYear].map((student) => (
                <li key={student}>{student}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
      <button className='voltar' onClick={() => navigate(-1)}>Voltar</button>
    </div>
  );
}

export default ClassList;

