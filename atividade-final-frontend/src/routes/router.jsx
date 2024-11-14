import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import App from '../App';
import Layout from '../components/layout';
import Alunos from '../pages/Alunos';
import Login from '../pages/auth/Login';
import Registro from '../pages/auth/Cadastro';
import LandingPage from '../pages/LandingPage';
import Turmas from '../pages/Turmas';
import Charts from '../pages/Charts';
import Cadastro from '../pages/auth/Cadastro';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        children: [
					{
						index: true,
						element: <LandingPage/>,
									
					},
					{
						path: 'login',
						element: <Login/>
					},
					{
						path: 'cadastro',
						element: <Cadastro/>
					},
					{
							path: 'dashboard',
							element: <Layout/>,
							children: [
								{
									index: true,
									element: <Charts/>
								},
								{
									path:'alunos',
									element: <Alunos/>
								},
								{
									path: 'turmas',
									element: <Turmas/>
								}
							]
					}
        ],
    },
])