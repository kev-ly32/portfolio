import React from "react";
import { IconButton, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const logos = [
  "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/html_otphxd.png",
  "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/css_un8uqf.png",
  "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/javascript_cpxt37.png",
  "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/react_xdhtjl.png",
  "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/redux_r4cguj.png",
  "https://res.cloudinary.com/de5gzocha/image/upload/v1612841260/Portfolio/bootstrap_mkoxvy.png",
  "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/mui_f1zwfn.png",
  "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/mongodb_s43pgt.png",
  "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/postgresql_truxlj.png",
  "https://res.cloudinary.com/de5gzocha/image/upload/v1612922901/Portfolio/nodejs_stx37t.png",
];

const useStyles = makeStyles((theme) => ({
  container: {
    height: "90%",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  aboutContainer: {
    height: "60%",
    width: "60%",
    border: "2px solid black",
  },
  aboutBody: {
    textAlign: "center",
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
        alignItems="center"
        className={`${classes.aboutContainer} fade-in`}
      >
        <Grid item md={4} className={classes.aboutBody}>
          <h1>Picture</h1>
        </Grid>
        <Grid item md={8} className={classes.aboutBody}>
          <h2 style={{ marginBottom: "3%" }}>About Me</h2>
          <p style={{ marginBottom: "3%" }}>
            Nice to meet you! My name's Kevin and I'm a web developer <br />
            with a passion for{" "}
            <span style={{ color: "#f57c00" }}>full stack development</span>. My
            goal is to provide
            <br /> a meaningful impact to the projects I work on to create
            <span style={{ color: "#f57c00" }}> beautiful</span> <br /> and
            <span style={{ color: "#f57c00" }}> functional</span> web
            applications.
          </p>
          <p style={{ marginBottom: "3%" }}>
            To do that, I have developed a skillset with the following
            technologies:
          </p>
          {logos.map((logo, i) => (
            <img key={i} src={logo} alt="logo" />
          ))}
        </Grid>
      </Grid>
      <IconButton
        className={`${classes.button} fade-in`}
        onClick={scroll}
        style={{ top: "10%" }}
      >
        <ExpandMoreIcon fontSize="large" color="secondary" />
      </IconButton>
    </Grid>
  );
}

export default About;
