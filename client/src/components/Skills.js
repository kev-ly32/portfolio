import React from "react";
import { Button, IconButton, Grid, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import background from "../public/Background.jpg";

const skills = [
  {
    title: "React Development",
    logos: [
      "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/react_xdhtjl.png",
      "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/redux_r4cguj.png",
    ],
    description:
      "React is my go-to framework for front end development. Together with Redux, this pair provides a clean way to write and maintain code.",
  },
  {
    title: "Front End Development",
    logos: [
      "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/html_otphxd.png",
      "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/css_un8uqf.png",
      "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/javascript_cpxt37.png",
    ],
    description:
      "HTML, CSS, and JavaScript are used together with React to build my web applications. See my projects below.",
  },
  {
    title: "Back End Development",
    logos: [
      "https://res.cloudinary.com/de5gzocha/image/upload/v1612922901/Portfolio/nodejs_stx37t.png",
    ],
    description:
      "Using Node.js as my back end environment allows me to easily set up servers with JavaScript.",
  },
  {
    title: "Design",
    logos: [
      "https://res.cloudinary.com/de5gzocha/image/upload/v1612841260/Portfolio/bootstrap_mkoxvy.png",
      "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/mui_f1zwfn.png",
    ],

    description:
      "I use Bootstrap and Material-UI as my CSS frameworks to create attractive applications for great look and feel.",
  },
  {
    title: "Databases",
    logos: [
      "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/mongodb_s43pgt.png",
      "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/postgresql_truxlj.png",
    ],
    description:
      "MongoDB and PostgreSQL provide flexibility in database structuring for modern web development.",
  },
  {
    title: "Version Control",
    logos: [
      "https://res.cloudinary.com/de5gzocha/image/upload/v1614024722/Portfolio/git_hliike.png",
    ],
    description:
      "I use Git together with GitHub to track changes and code management.",
  },
];

const useStyles = makeStyles((theme) => ({
  sectionContainer: {
    minHeight: " 100%",
    maxHeight: "300%",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
  },
  layer: {
    padding: "50px 0",
    backgroundColor: "rgba(0,0,0,0.5)",
    // height: "100%",
  },

  skills: {
    height: " 300px",
    display: "flex",
    justifyContent: "center",
  },
  skillsLogos: {
    textAlign: "center",
  },
  paper: {
    background: "rgba(120,120,120,0.4)",
    height: "100%",
    width: "100%",
    color: "white",
    display: "flex",
    justifyContent: "center",
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

function Skills({ skillsRef }) {
  const classes = useStyles();
  return (
    <Grid innerRef={skillsRef} container className={classes.sectionContainer}>
      <Grid
        container
        alignItems="center"
        justify="center"
        className={classes.layer}
      >
        <Grid
          container
          alignItems="center"
          style={{ width: "60%", height: "100%" }}
        >
          <Typography style={{ color: "white" }} variant="h3">
            Skills
          </Typography>
          <Grid container spacing={2}>
            {skills.map((skill, i) => (
              <Grid
                key={i}
                item
                xs={12}
                md={6}
                lg={4}
                className={classes.skills}
              >
                <Paper square className={classes.paper}>
                  <Grid
                    container
                    justify="center"
                    style={{ width: "90%", textAlign: "center" }}
                  >
                    <Grid item xs={12} className={classes.skillsLogos}>
                      {skill.logos.map((logo, i) => (
                        <img src={logo} key={i} alt={logo} />
                      ))}
                    </Grid>
                    <Typography variant="h5">{skill.title}</Typography>
                    <Typography variant="body1">{skill.description}</Typography>
                  </Grid>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Skills;
