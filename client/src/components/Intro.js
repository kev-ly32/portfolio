import React from "react";
import { IconButton, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import background from "../public/Background.jpg";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  sectionContainer: {
    height: "80%",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
  },
  container: {
    height: "100%",
    width: "90%",
    margin: "0 auto",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  containerText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: "150px",
  },
  layer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    height: "100%",
  },
  color: {
    color: "white",
  },
  button: {
    margin: "17% 0 10% 0",
    color: "white",
  },
}));

function Intro({ scroll }) {
  const classes = useStyles();
  return (
    <div className={classes.sectionContainer}>
      <div className={classes.layer}>
        <Grid container direction="column" className={classes.container}>
          <Grid item xs={9} className={classes.containerText}>
            <Typography
              gutterBottom
              className={`${classes.color} fade-in`}
              variant="h1"
            >
              Hi, I'm <span style={{ color: "#f57c00" }}>Kevin</span>
            </Typography>
            <Typography variant="body1" className={`${classes.color} fade-in2`}>
              Full stack web developer
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <IconButton className={classes.button} onClick={scroll}>
              <ExpandMoreIcon fontSize="large" color="secondary" />
            </IconButton>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Intro;
