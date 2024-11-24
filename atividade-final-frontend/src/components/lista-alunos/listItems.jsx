import { Edit, EditAttributesOutlined, EditNoteOutlined, EditRounded, ExpandLess, ExpandMore, Person, Person2Outlined, SchoolOutlined } from '@mui/icons-material'
import { Grid, Grid2, Icon, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip } from '@mui/material'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import alunosServices from '../../services/Alunos'

export default function ListItemsAlunos({alunosData}) {
  const { getAlunoById } = alunosServices();

  const handleClick = (id) => {
    getAlunoById(id);
  }
  
  return (
    alunosData.map((aluno) =>
        <ListItem key={aluno._id} divider sx={{display: 'flex', flexFlow:'column wrap', alignItems: 'stretch'}}>
          <Grid2 container>
            <Grid2 size='grow' sx={{display: 'flex', alignItems: 'center'}}>
              <ListItemText primary={`${aluno.nome} ${aluno.sobrenome}`} secondary={`CPF: ${aluno.cpf}`}/>
            </Grid2>
            <Grid2 size={6} sx={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
            </Grid2>
          </Grid2>
        </ListItem>
      )
  )
}
