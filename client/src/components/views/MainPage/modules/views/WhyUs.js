import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import Chat from '../../images/chat-24px.svg'
import Movie from '../../images/movie-24px.svg'
import Secure from '../../images/security-24px.svg'


const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function WhyUs(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/static/themes/onepirate/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={Chat}
                alt="news"
              />
              <Typography variant="h6" className={classes.title}>
                Latest SL News
              </Typography>
              <Typography variant="h5">
                {'Get all the latest news from every corner of Sierra Leone, here on Salone 24/7'}
                {', and all news are from credible and authentic sources.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={Movie}
                alt="movie"
              />
              <Typography variant="h6" className={classes.title}>
                Movie Centre
              </Typography>
              <Typography variant="h5">
                {'Our movie and video center is your one stop place for every content in the movie industry,'}
                {'with you having the abilty to manage your videos.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={Secure}
                alt="secure"
              />
              <Typography variant="h6" className={classes.title}>
                Max Security
              </Typography>
              <Typography variant="h5">
                {'No need to worry about your personal data '}
                {'we assure of maximum protection of your data.'}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

WhyUs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WhyUs);
