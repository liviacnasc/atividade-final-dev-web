import { ExpandLess, ExpandMore, Person } from '@mui/icons-material'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import NestedItem from './NestedItem'

export default function ListItems({turmasData}) {
  return (
    turmasData.map((turmas) =>
        <ListItem key={turmas._id} sx={{display: 'flex', flexFlow: 'column', alignItems: 'start'}} divider>
          <ListItemText primary={turmas.nome_turma} secondary={`Turno: ${turmas.turno}`}/>
          <ListItemText secondary={`Ano Letivo: ${turmas.ano_letivo}`}/>
          <NestedItem aluno={turmas.alunos.flat()}/>
        </ListItem>
      )
  )
}
