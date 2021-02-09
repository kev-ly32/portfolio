import React from "react";
import { IconButton, Grid, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
];

const useStyles = makeStyles((theme) => ({
  container: {
    height: "70%",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  aboutContainer: {
    height: "70%",
    width: "60%",
    border: "2px solid black",
  },
  aboutBody: {
    textAlign: "center",
  },
}));

function About(props) {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.container}>
      <Grid container alignItems="center" className={classes.aboutContainer}>
        <Grid item md={4} className={classes.aboutBody}>
          <h1>Picture</h1>
        </Grid>
        <Grid item md={8} className={classes.aboutBody}>
          <h2 style={{ marginBottom: "3%" }}>About Me</h2>
          <p>Full stack web developer specializing in React development</p>
          <p>Full stack web developer specializing in React development</p>
          <p style={{ marginBottom: "3%" }}>
            Full stack web developer specializing in React development
          </p>
          {logos.map((logo, i) => (
            <img key={i} src={logo} alt="logo" />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default About;
