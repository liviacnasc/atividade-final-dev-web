import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Alunos from '../pages/dashboard/Alunos';
import LandingPage from '../pages/LandingPage';
import Turmas from '../pages/dashboard/Turmas';
import Charts from '../pages/dashboard/Charts';
import { Auth } from '../pages/auth/Auth';
import Layout from '../pages/Layout';
import AlunoForm from '../components/forms/AlunoForm';

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
						path: 'auth',
						element: <Auth/>
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
									children: [
										{
											index: true,
											element: <Alunos/>
										},
										{
											path: 'adicionar-aluno',
											element:<AlunoForm/>
										}
									]
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