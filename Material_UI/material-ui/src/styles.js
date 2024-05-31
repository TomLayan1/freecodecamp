// To style
import { makeStyles } from '@material-ui/core/styles';

// Create a hook called 'useStyles' that is equal to the function 'makeStyles' above
// Pass in a call back function into the makeStyles function that returns an object that contains all the styles
const useStyles = makeStyles((theme) => ({
  navIcon: {
    marginRight: '20px'
  },
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  buttons: {
    marginTop: '40px'
  },
  cardGrid: {
    paddingTop: '20px 0'
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%'
    // same as 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    background: theme.palette.background.paper,
    padding: '50px 0'
  }
}));

export default useStyles;