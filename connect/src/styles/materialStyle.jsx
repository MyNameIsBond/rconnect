import { makeStyles } from '@material-ui/core/styles'

const grid = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary
  },
  header: {
    color: theme.palette.text.primary,
    padding: theme.spacing(1)
  }
}))

export { grid }
