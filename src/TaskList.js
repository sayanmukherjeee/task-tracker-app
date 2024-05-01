import React from 'react';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';

const TaskList = ({ tasks, onDeleteTask, onEditTask, onCheckTask, darkTheme }) => {
  return (
    <List style={{ backgroundColor: darkTheme ? '#333' : '#FFF', color: darkTheme ? '#FFF' : 'inherit' }}>
      {tasks.map((task, index) => (
        <ListItem key={index}>
          <ListItemText primary={task.taskName} secondary={task.taskDescription} style={{ color: darkTheme ? '#FFF' : 'inherit' }} />
          <IconButton style={{ color: darkTheme ? '#FFF' : 'inherit' }} onClick={() => onEditTask(index)}>
            <EditIcon />
          </IconButton>
          <IconButton style={{ color: darkTheme ? '#FFF' : 'inherit' }} onClick={() => onDeleteTask(index)}>
            <DeleteIcon />
          </IconButton>
          <IconButton style={{ color: darkTheme ? '#FFF' : 'inherit' }} onClick={() => onCheckTask(index)}>
            <CheckIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;
