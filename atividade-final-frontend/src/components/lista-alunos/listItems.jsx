import { ExpandLess, ExpandMore, Person } from '@mui/icons-material'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

export default function ListItemsAlunos({alunosData}) {
  
  return (
    alunosData.map((aluno) =>
        <ListItem key={aluno._id} sx={{display: 'flex', flexFlow: 'column', alignItems: 'start'}} divider>
          <ListItemText primary={`${aluno.nome} ${aluno.sobrenome}`} secondary={`CPF: ${aluno.cpf}`}/>
          {aluno.turma.flat().map((turma) => <ListItemText secondary={`Turma: ${turma.nome_turma}`}/>)}
        </ListItem>
      )
  )
}
