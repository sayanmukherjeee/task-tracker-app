import React, { useState } from 'react';
import { Grid, AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import DoneAllIcon from '@mui/icons-material/DoneAll'; // Import the icon for completed tasks
import SettingsIcon from '@mui/icons-material/Settings'; // Import the settings icon
import WbSunnyIcon from '@mui/icons-material/WbSunny'; // Import sun icon
import Brightness2Icon from '@mui/icons-material/Brightness2'; // Import moon icon

const TaskTrackerApp = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]); // State to store completed tasks
  const [drawerOpen, setDrawerOpen] = useState(false); // State to control drawer open/close
  const [themeOpen, setThemeOpen] = useState(false); // State to control theme option open/close
  const [darkTheme, setDarkTheme] = useState(false); // State to track the current theme

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleCheckTask = (index) => {
    const checkedTask = tasks[index];
    setCompletedTasks([...completedTasks, checkedTask]); // Move checked task to completed tasks
    setTasks(tasks.filter((_, i) => i !== index)); // Remove checked task from main tasks
  };

  const handleThemeToggle = () => {
    setThemeOpen(!themeOpen); // Toggle the theme option open/close
  };

  const handleDarkThemeToggle = () => {
    setDarkTheme(!darkTheme); // Toggle the dark theme
  };

  const handleDayThemeToggle = () => {
    setDarkTheme(false); // Set dark theme to false (day theme)
  };

  return (
    <Grid container style={{ backgroundColor: darkTheme ? '#452c14' : '#FFDAB9', color: darkTheme ? '#fff' : 'inherit' }}>
      <Grid item xs={12}>
        <AppBar position="fixed" style={{ backgroundColor: darkTheme ? '#6d4c23' : 'darkorange' }}> {/* Keep navbar color consistent */}
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Task Tracker
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <IconButton color="inherit" onClick={handleThemeToggle}>
                <SettingsIcon />
              </IconButton>
              {themeOpen && (
                <div style={{ marginLeft: '10px', color: 'white', display: 'flex', alignItems: 'center' }}>
                  <Typography variant="body1" style={{ marginRight: '5px', fontFamily: 'Arial', fontWeight: 'bold', fontSize: '1.1rem' }}>Theme</Typography>
                  <IconButton color="inherit" onClick={handleDayThemeToggle}>
                    <WbSunnyIcon />
                  </IconButton>
                  <IconButton color="inherit" onClick={handleDarkThemeToggle}>
                    <Brightness2Icon />
                  </IconButton>
                </div>
              )}
            </div>
          </Toolbar>
        </AppBar>
        <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
          <List>
            <ListItem button onClick={handleDrawerToggle} style={{ backgroundColor: darkTheme ? '#6d4c23' : 'darkorange' }}>
              <ListItemIcon>
                <DoneAllIcon />
              </ListItemIcon>
              <ListItemText primary="Complete Task List" style={{ color: darkTheme ? '#fff' : 'inherit' }} />
            </ListItem>
            {completedTasks.map((task, index) => (
              <ListItem key={index}>
                <ListItemText primary={task.taskName} secondary={task.taskDescription} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Grid>
      <Grid item xs={12} md={2.3}></Grid>
      <Grid item xs={12} md={7}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} style={{ marginTop: '100px' }}>
            <TaskForm onAddTask={handleAddTask} />
          </Grid>
          <Grid item xs={12} style={{ marginTop: '15px' }}> {/* Adjust the marginTop value as needed */}
            <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} onCheckTask={handleCheckTask} darkTheme={darkTheme} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TaskTrackerApp;