import React from "react";
import { Button, IconButton, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const logos = [
  {
    link:
      "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/html_otphxd.png",
    name: "HTML5",
  },
  {
    link:
      "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/css_un8uqf.png",
    name: "CSS3",
  },
  {
    link:
      "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/javascript_cpxt37.png",
    name: "Javascript",
  },
  {
    link:
      "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/react_xdhtjl.png",
    name: "React",
  },
  {
    link:
      "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/redux_r4cguj.png",
    name: "Redux",
  },
  {
    link:
      "https://res.cloudinary.com/de5gzocha/image/upload/v1612841260/Portfolio/bootstrap_mkoxvy.png",
    name: "Bootstrap",
  },
  {
    link:
      "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/mui_f1zwfn.png",
    name: "Material-UI",
  },
  {
    link:
      "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/mongodb_s43pgt.png",
    name: "MongoDB",
  },
  {
    link:
      "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/postgresql_truxlj.png",
    name: "PostgreSQL",
  },
  {
    link:
      "https://res.cloudinary.com/de5gzocha/image/upload/v1612922901/Portfolio/nodejs_stx37t.png",
    name: "Node.js",
  },
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
          <Grid container justify="center">
            {logos.map((logo, i) => (
              <div key={i} style={{ maxWidth: "50px", height: "70px" }}>
                <img className={classes.logo} src={logo.link} alt="logo" />
                <p className="logoName" style={{ fontSize: "13px" }}>
                  {logo.name}
                </p>
              </div>
            ))}
          </Grid>
          {/* <br />
          <Button variant="outlined" style={{ marginTop: "5%" }}>
            See My Resume
          </Button> */}
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
