import React, { useState } from 'react'

export default function turmasServices() {
  const [turmasLoading, setTurmasLoading] = useState(false);
  const [refetchTurmas, setRefetchTurmas] = useState(true);
  const [ turmasList, setTurmasList] = useState([]);
  const [ response, setResponse ] = useState({});

  const url = 'http://localhost:3000';

  const getTurmas = () => {
    setTurmasLoading(true);

    fetch(`${url}/turmas`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
    })
    .then((response) => response.json())
    .then((result) => {
        if(result.success){
            console.log(result.body)
            setTurmasList(result.body)
        }else{
            console.log(result)
        }
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        setTurmasLoading(false);
        setRefetchTurmas(false);
    })
  }

//   const logOut = () => {
//     localStorage.removeItem('turmas');
//   }

  const addTurma = (formData) => {
    setTurmasLoading(true);

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
        setTurmasLoading(false)
    })
  }

  return { getTurmas, turmasLoading, refetchTurmas, turmasList }
}