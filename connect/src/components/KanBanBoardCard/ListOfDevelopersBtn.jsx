import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import { MenuItem, Menu, ListItemIcon, ListItemText, Avatar } from '@material-ui/core'
import { PersonAdd } from '@material-ui/icons'
import { cardMaterialStyle } from '../../styles/cardMaterialStyle'
import { developers } from '../developers'
export default function ListOfDevelopersBtn({ devs }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const classes = cardMaterialStyle()
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div>
      <IconButton
        className={classes.icon}
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <PersonAdd />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {developers.map(d => (
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Avatar className={classes.avatar}>{d.avatar}</Avatar>
            </ListItemIcon>
            <ListItemText primary={d.name} secondary={d.role} />
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}
