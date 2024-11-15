import React, { useState } from 'react'

export default function authServices() {
  const [authLoading, setAuthLoading] = useState(false);

  const url = 'http://localhost:3000/auth';

  const logIn = async (formData) => {
    setAuthLoading(true);

    await fetch(`${url}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(formData)
    })
    .then((response) => response.json())
    .then((result) => {
        console.log(result)
        if(result.success && result.body.token){
            localStorage.setItem('auth',
                JSON.stringify({
                    token: result.body.token,
                    user: result.body.user
                })
            )
        }
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        setAuthLoading(false)
    })
  }

  const logOut = () => {
    localStorage.removeItem('auth');
  }

  const signUp = async (formData) => {
    setAuthLoading(true);

    await fetch(`${url}/cadastro`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(formData)
    })
    .then((response) => response.json())
    .then((result) => {
        console.log(result)
        if(result.success && result.body.token){
            localStorage.setItem('auth',
                JSON.stringify({
                    token: result.body.token,
                    user: result.body.user
                })
            )
        }
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        setAuthLoading(false)
    })
  }

  return { signUp, logIn, logOut, authLoading }
}