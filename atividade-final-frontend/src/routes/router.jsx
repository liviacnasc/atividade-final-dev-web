import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Alunos from '../pages/Alunos';
import LandingPage from '../pages/LandingPage';
import Turmas from '../pages/Turmas';
import Charts from '../pages/Charts';
import { Auth } from '../pages/auth/Auth';
import Layout from '../components/Layout';

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