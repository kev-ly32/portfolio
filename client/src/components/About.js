import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "80%",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  aboutContainer: {
    width: "60%",
  },

  aboutImage: {
    height: "200px",
    display: "flex",
  },
  socialMedia: {
    display: "flex",
    alignItems: "center",
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

function About({ aboutRef }) {
  const classes = useStyles();

  return (
    <Grid
      innerRef={aboutRef}
      container
      direction="column"
      justify="center"
      className={classes.container}
    >
      <Grid container className={`${classes.aboutContainer} fade-in`}>
        <Grid item xs={12}>
          <Typography style={{ marginBottom: "60px" }} variant="h3">
            About Me
          </Typography>
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
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                href="https://www.linkedin.com/in/kevin-ly-b7720b13a/"
                target="_blank"
                style={{ margin: "0 15px 15px 0" }}
              >
                <span style={{ paddingRight: "10px" }}>LinkedIn</span>
                <LinkedInIcon style={{ fontSize: 20 }} />
              </Button>
              <Button
                variant="contained"
                href="https://github.com/kev-ly32"
                target="_blank"
                style={{ margin: "0 0 15px 0" }}
              >
                <span style={{ paddingRight: "10px" }}>GitHub</span>
                <GitHubIcon style={{ fontSize: 20 }} />
              </Button>
            </Grid>
            <Grid item xs={12} style={{ marginTop: "5%" }}>
              <Button variant="contained" color="secondary">
                View Projects
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default About;
