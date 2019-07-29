import { makeStyles } from '@material-ui/core/styles'
import { deepPurple, grey } from '@material-ui/core/colors'

const cardMaterialStyle = makeStyles(theme => ({
  card: {
    boxShadow: 'none',
    backgroundColor: grey[100]
  },
  avatar: {
    margin: theme.spacing(1),
    height: 35,
    width: 35,
    backgroundColor: deepPurple[300],
    fontSize: theme.spacing(2)
  },
  icon: {
    marginLeft: 'auto',
    color: deepPurple[400]
  },
  completeClassIcon: {
    marginRight: 'auto',
    padding: 4
  }
}))

export { cardMaterialStyle }
