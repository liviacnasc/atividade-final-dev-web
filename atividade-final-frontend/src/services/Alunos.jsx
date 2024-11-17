import React, { useState } from 'react'

export default function alunosServices() {
  const [ alunosLoading, setAlunosLoading ] = useState(false);
  const [ refetchAlunos, setRefetchAlunos ] = useState(true);
  const [ alunosList, setAlunosList ] = useState([]);
  const [ alunoData, setAlunoData ] = useState([]);

  const url = 'http://localhost:3000';

  const getAlunos = async () => {
    setAlunosLoading(true);

    await fetch(`${url}/alunos`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
    })
    .then(async (response) => await response.json())
    .then((result) => {
        if(result.success){
            console.log(result.body)
            setAlunosList(result.body)
        }else{
            console.log(result)
        }
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        setAlunosLoading(false);
        setRefetchAlunos(false);
    })
  }

  const getAlunoById = async (alunoId) => {
    setAlunosLoading(true);

    await fetch(`${url}/alunos/${alunoId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
    })
    .then(async (response) => await response.json())
    .then((result) => {
        if(result.success){
            console.log(result.body)
            setAlunoData(result.body)
        }else{
            console.log(result)
        }
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        setAlunosLoading(false);
        setRefetchAlunos(false);
    })
  }

//   const logOut = () => {
//     localStorage.removeItem('alunos');
//   }

  const addTurma = (formData) => {
    setAlunosLoading(true);

    fetch(`${url}/cadastro`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(formData)
    })
    .then((response) => response.json())
    .then((result) => {
        if(result.success && result.body.token){
            
        }
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        setAlunosLoading(false)
    })
  }

  return { getAlunos, getAlunoById, alunosLoading, refetchAlunos, alunosList, alunoData }
}