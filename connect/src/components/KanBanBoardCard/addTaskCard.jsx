import React, { useState } from 'react'
import {
  TextField,
  Button,
  Grid,
  Avatar,
  CardActions,
  CardContent,
  Card,
  Divider
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Send } from '@material-ui/icons'
import { deepPurple, grey } from '@material-ui/core/colors'
import ListOfDevelopersBtn from './ListOfDevelopersBtn'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  button: {
    margin: theme.spacing(1),
    marginLeft: 'auto',
    borderRadius: theme.spacing(2)
  },
  buttonCancel: {
    margin: theme.spacing(1),
    marginRight: 'auto'
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  avatar: {
    margin: theme.spacing(1),
    height: 35,
    width: 35,
    backgroundColor: deepPurple[300],
    fontSize: theme.spacing(2)
  },
  icon: {
    marginLeft: 'auto'
  },
  card: {
    boxShadow: 'none',
    backgroundColor: grey[100]
  }
}))

const AddTaskCard = ({ cancel, addNewTask }) => {
  const classes = useStyles()
  const [values, setNewToDo] = useState({
    description: String,
    developers: [],
    completed: false
  })
  const handleChange = name => event => {
    setNewToDo({ ...values, [name]: event.target.value })
  }
  const submit = () => {
    addNewTask(values)
    cancel()
  }
  return (
    <Card className={classes.card}>
      <CardContent>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            multiline
            rows="4"
            id="outlined-full-width"
            fullWidth
            label="Description"
            className={classes.textField}
            value={values.description}
            onChange={handleChange('description')}
            margin="normal"
            variant="outlined"
          />
          <Grid container>
            <Avatar className={classes.avatar}>MH</Avatar>
            <Avatar className={classes.avatar}>MH</Avatar>
            <div className={classes.icon}>
              <ListOfDevelopersBtn />
            </div>
          </Grid>
        </form>
      </CardContent>
      <Divider light />

      <CardActions>
        <Button size="small" onClick={cancel} className={classes.buttonCancel}>
          Cancel
        </Button>
        <Button
          size="small"
          onClick={submit}
          variant="outlined"
          color="default"
          className={classes.button}
        >
          Add Task
          <Send color="primary" className={classes.rightIcon} />
        </Button>
      </CardActions>
    </Card>
  )
}

export { AddTaskCard }
