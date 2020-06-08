import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import HeaderLayout from './HeaderLayout';
import { Link } from "react-router-dom";

const backgroundImage =
  'https://www.visitsierraleone.org/wp-content/uploads/2017/11/Lumley.jpg';

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9',
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function MainPageHeader(props) {
  const { classes } = props;

  return (
    <HeaderLayout backgroundClassName={classes.background}>
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Welcome to Salone 24/7
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Your one stop online destination for News, Entertainment, Sports, Religion and more...
      </Typography>
      <Link style={{textDecoration: 'none'}} to="/sign-up">
        <Button
          color="secondary"
          variant="contained"
          size="large"
          className={classes.button}
          component="a"
          
        >
          Join Us Now
        </Button>
      </Link>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Discover the experience
      </Typography>
    </HeaderLayout>
  );
}

MainPageHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainPageHeader);
