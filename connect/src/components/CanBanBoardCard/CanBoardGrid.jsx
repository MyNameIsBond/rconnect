import React, { useState, useEffect } from 'react'
import { Typography, Button } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import Grid from '@material-ui/core/Grid'
import { CanBanBoardCard } from './CanBoardCard'
import { AddTaskCard } from './addTaskCard'
import { grid } from '../../styles/materialStyle'

const FormRow = ({ title }) => {
  const classes = grid()
  const [showAddTask, setAddTask] = useState(Boolean)
  const [tasks, setTasks] = useState([])
  const panelHandler = () => {
    setAddTask(!showAddTask)
  }
  const addNewTask = values => {
    setTasks([...tasks, values])
  }
  const deleteTask = id => {
    tasks.splice(id, 1)
    setTasks([...tasks])
  }
  const completeTask = id => {
    tasks[id].completed = true
    setTasks([...tasks])

    return null
  }
  const taskLoop = tasks.map((task, i) => (
    <Grid item xs={12}>
      <CanBanBoardCard
        props={{ id: i }}
        task={task}
        deleteTask={deleteTask}
        completeTask={completeTask}
      />
    </Grid>
  ))
  return (
    <div>
      <Grid container xs={12} spacing={2}>
        <Grid item xs={12}>
          <Typography className={classes.header}>{title}</Typography>
          <Button color="primary" onClick={panelHandler} fullWidth className={classes.paper}>
            <Add />
          </Button>
        </Grid>
        {showAddTask ? (
          <Grid item xs={12}>
            <AddTaskCard cancel={panelHandler} addNewTask={addNewTask} />
          </Grid>
        ) : null}
        {taskLoop}
      </Grid>
    </div>
  )
}

export default FormRow
