import React from "react";
import { Button, IconButton, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "80%",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  aboutContainer: {
    height: "50%",
    width: "60%",
  },

  aboutImage: {
    height: "200px",
    display: "flex",
    // justifyContent: "center",
  },
  logo: {
    background: "none",
    transition: "background 50ms ease-in",
    "&:hover": {
      background: "rgb(245, 124, 0, 0.09)",
      borderRadius: "13px",
    },
    "&+ .logoName": {
      display: "none",
    },
    "&:hover + .logoName": {
      display: "block",
    },
  },
}));

function About({ aboutRef, scroll }) {
  const classes = useStyles();

  return (
    <Grid
      innerRef={aboutRef}
      container
      direction="column"
      justify="center"
      className={classes.container}
    >
      <Grid
        container
        // justify="center"
        // alignItems="center"
        className={`${classes.aboutContainer} fade-in`}
      >
        <Grid item xs={12}>
          <Typography variant="h3">About Me</Typography>
        </Grid>

        <Grid item xs={12} lg={4} className={classes.aboutImage}>
          <img
            src="https://res.cloudinary.com/de5gzocha/image/upload/v1613622911/Portfolio/KevinLy_glphuk.jpg"
            alt="Kevin Ly"
            // style={{ height: "100%", borderRadius: "150px" }}
          />
        </Grid>
        <Grid item xs={12} lg={8}>
          <p style={{ marginBottom: "3%" }}>
            Nice to meet you! My name's Kevin and I'm a web developer with a
            passion for{" "}
            <span style={{ color: "#f57c00" }}>full stack development</span>. My
            goal is to provide a meaningful impact to the projects I work on to
            create
            <span style={{ color: "#f57c00" }}> beautiful</span> and
            <span style={{ color: "#f57c00" }}> functional</span> web
            applications.
          </p>
          <hr style={{ marginBottom: "3%" }} />
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                Name: <span className="aboutInfo">Kevin Ly</span>
              </Typography>
              <Typography variant="body1">
                From: <span className="aboutInfo">Toronto, ON</span>
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1">
                Email: <span className="aboutInfo"> kevin.ly153@gmail.com</span>
              </Typography>
            </Grid>
            <Grid item xs={12} style={{ marginTop: "5%" }}>
              <Button color="secondary" variant="outlined">
                View Resume
              </Button>
              <Button
                color="primary"
                variant="outlined"
                style={{ marginLeft: "20px" }}
              >
                Projects
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* <IconButton
        className={`${classes.button} fade-in`}
        onClick={scroll}
        style={{ top: "10%" }}
      >
        <ExpandMoreIcon fontSize="large" color="secondary" />
      </IconButton> */}
    </Grid>
  );
}

export default About;
