import React, { useState } from 'react'
import ListOfDevelopersBtn from './ListOfDevelopersBtn'
import { cardMaterialStyle } from '../../styles/cardMaterialStyle'
import { MoreHoriz, Delete, Done } from '@material-ui/icons'
import { Card, Divider, ListItemIcon, ListItemText } from '@material-ui/core'
import {
  CardActions,
  CardContent,
  Grid,
  Menu,
  MenuItem,
  Typography,
  Avatar,
  IconButton
} from '@material-ui/core'

const KanBanBoardCard = ({ task, completeTask, deleteTask, props }) => {
  const classes = cardMaterialStyle()
  const [addUser, setIconAddUser] = useState(Boolean)
  const showUserIcon = () => {
    setIconAddUser(true)
  }
  const hideUserIcon = () => {
    setIconAddUser(false)
  }
  const devfor = () => {
    return task.developers.map(d => <Avatar className={classes.avatar}>{d.avatar}</Avatar>)
  }
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="body2" color="textPrimary" component="p">
          {task.description}
        </Typography>
        <Grid container justify="flex-end">
          <Grid item>
            <VertMenuOnCard deleteTask={deleteTask} completeTask={completeTask} props={props.id} />
          </Grid>
        </Grid>
      </CardContent>
      <Divider light />
      <CardActions onMouseEnter={showUserIcon} onMouseLeave={hideUserIcon}>
        {task.developers.length === 0 ? <Avatar className={classes.avatar}>UK</Avatar> : devfor}
        <div className={classes.icon}>
          {addUser ? <ListOfDevelopersBtn devs={task.developers} /> : null}
        </div>
      </CardActions>
    </Card>
  )
}

const VertMenuOnCard = ({ deleteTask, completeTask, props }) => {
  const classes = cardMaterialStyle()
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const del = () => {
    deleteTask(props)
    setAnchorEl(null)
  }
  const complete = () => {
    completeTask(props)
    handleClose()
  }

  return (
    <div>
      <IconButton
        className={classes.completeClassIcon}
        aria-label="Settings"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreHoriz />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={complete}>
          <ListItemIcon>
            <Done />
          </ListItemIcon>
          <ListItemText primary="Complete" />
        </MenuItem>
        <MenuItem onClick={del}>
          <ListItemIcon>
            <Delete />
          </ListItemIcon>
          <ListItemText primary="Delete" />
        </MenuItem>
      </Menu>
    </div>
  )
}

export { KanBanBoardCard }
