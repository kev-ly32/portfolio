import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "80%",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  aboutContainer: {
    width: "60%",
    padding: "10% 0",
  },

  aboutImage: {
    height: "200px",
    display: "flex",
    marginBottom: "30px",
  },
  aboutText: {
    marginBottom: "3%",
    lineHeight: "1.5",
    letterSpacing: "0.4px",
  },
  aboutTextHighlight: {
    color: "#f57c00",
    fontWeight: "550",
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
          <p className={classes.aboutText}>
            Nice to meet you! My name is Kevin and I'm a web developer with a
            passion for{" "}
            <span className={classes.aboutTextHighlight}>
              full stack development
            </span>
            . I currently do quality assurance for a market research company and
            am now looking for greater challenges to express my creativity and
            technical skills. As a web developer, my goal is to create
            <span className={classes.aboutTextHighlight}> beautiful</span> and
            <span className={classes.aboutTextHighlight}> functional</span> web
            applications to enhance the{" "}
            <span className={classes.aboutTextHighlight}> user experience</span>
            .
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
                style={{ margin: "15px 15px 15px 0" }}
              >
                <span style={{ paddingRight: "10px" }}>LinkedIn</span>
                <LinkedInIcon style={{ fontSize: 20 }} />
              </Button>
              <Button
                variant="contained"
                href="https://github.com/kev-ly32"
                target="_blank"
                style={{ margin: "15px 0" }}
              >
                <span style={{ paddingRight: "10px" }}>GitHub</span>
                <GitHubIcon style={{ fontSize: 20 }} />
              </Button>
            </Grid>
            <Grid item xs={12} style={{ marginTop: "5%" }}>
              <Button variant="contained" color="secondary" onClick={scroll}>
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
