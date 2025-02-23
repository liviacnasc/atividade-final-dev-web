import React, { useState } from 'react'

export default function alunosServices() {
  const [ alunosLoading, setAlunosLoading ] = useState(false);
  const [ refetchAlunos, setRefetchAlunos ] = useState(true);
  const [ alunosList, setAlunosList ] = useState([]);
  const [ response, setResponse ] = useState('');

  const url = import.meta.env.VITE_REACT_APP_BACKEND_BASEURL;

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
            setResponse(result.body)
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

  const addAluno = (formData) => {
    setAlunosLoading(true);

    fetch(`${url}/alunos/adicionar-aluno`, {
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
            setResponse(result.body)
        }
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        setAlunosLoading(false)
    })
  }

  return { getAlunos, getAlunoById, alunosLoading, refetchAlunos, alunosList, addAluno, response }
}