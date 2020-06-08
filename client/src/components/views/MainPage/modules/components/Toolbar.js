import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

export const styles = (theme) => ({
  root: {
    height: 64,
    [theme.breakpoints.down('xs')]: {
      height: 100,
    },
  },
});

export default withStyles(styles)(Toolbar);
