import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const TaskForm = ({ onAddTask, editedTask, onUpdateTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  // Set initial values for taskName and taskDescription if editedTask exists
  useEffect(() => {
    if (editedTask) {
      setTaskName(editedTask.task.taskName);
      setTaskDescription(editedTask.task.taskDescription);
    }
  }, [editedTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editedTask) {
      // If editing an existing task, call onUpdateTask with updated task data
      onUpdateTask({ ...editedTask.task, taskName, taskDescription });
    } else {
      // If adding a new task, call onAddTask with new task data
      onAddTask({ taskName, taskDescription });
    }
    setTaskName('');
    setTaskDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Task Name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            fullWidth
            required
            InputProps={{ style: { backgroundColor: '#fff', height: '60px' } }} // Set white background and height for input field
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Task Description"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            fullWidth
            multiline
            rows={4}
            InputProps={{ style: { backgroundColor: '#fff', height: '300px' } }} // Set white background and height for input field
          />
        </Grid>
        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
          <Button type="submit" variant="contained" color="primary" style={{ backgroundColor: '#FFA500', width: '50%', fontSize: '0.8rem' }}>
            {editedTask ? 'Update Task' : 'Add Task'} {/* Change button text based on whether editing or adding a task */}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default TaskForm;
