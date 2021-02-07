import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "40%",
    width: "70%",
    margin: "0 auto",
    // textAlign: "center",
    alignItems: "center",
  },
}));

function Intro(props) {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item sm={12} md={6}>
        <Typography variant="h3">IMAGE</Typography>
      </Grid>
      <Grid item sm={12} md={6}>
        <Typography variant="subtitle1" component="h6">
          Web Developer
        </Typography>
        <Typography color="secondary" variant="h2">
          Kevin Ly
        </Typography>
        <Typography variant="body1">
          I'm a web developer specializing in the MERN stack
          <br />
          Looking for full stack positions
        </Typography>
        <Button color="primary" variant="outlined">
          Contact
        </Button>
      </Grid>
    </Grid>
  );
}

export default Intro;
