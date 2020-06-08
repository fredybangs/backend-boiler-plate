import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import AppBar from '../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';
import { Button } from '@material-ui/core'

const styles = (theme) => ({
  title: {
    fontSize: '220%',
    textDecoration: 'none',
    fontWeight: 'bolder',
    fontDisplay: 'block',
    color: 'white',
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
    textDecoration: 'none'
  },
  linkSecondary: {
    color: theme.palette.secondary.main,

  },
});

function AppAppBar(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <Link
            to="/"
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
          >
            {'Salone 24/7'}
          </Link>
          <div className={classes.right}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              to="/sign-in"
            >
              <Button
                color="secondary"
                variant="contained"
                size="large"
                className={classes.button}
                component="a"
                
              >
                Sign In
              </Button>
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
              to="/sign-up"
            >
              <Button
                color="secondary"
                variant="contained"
                size="large"
                className={classes.button}
                component="a"
                
              >
                Sign Up
              </Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
