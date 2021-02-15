import React, { useState } from "react";
import { Button, Grid, Typography, Card, CardMedia } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { makeStyles } from "@material-ui/core/styles";

const projects = [
  {
    name: "Flow Database",
    img:
      "https://res.cloudinary.com/de5gzocha/image/upload/v1613008132/Portfolio/employee-database_tlmo9d.png",
    description:
      "Employee database application that allows users to update an individual database to manage employee data for a particular company.",
    stack: [
      "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/html_otphxd.png",
      "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/css_un8uqf.png",
      "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/javascript_cpxt37.png",
      "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/react_xdhtjl.png",
      "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/mongodb_s43pgt.png",
      "https://res.cloudinary.com/de5gzocha/image/upload/v1612922901/Portfolio/nodejs_stx37t.png",
    ],
    github: "https://github.com/kev-ly32/Flow-Database.git",
    site: "https://flow-employee-database.herokuapp.com/",
  },
  {
    name: "Aptitude Bank",
    img:
      "https://res.cloudinary.com/de5gzocha/image/upload/v1613008132/Portfolio/aptitude-bank_m9khsm.png",
    description:
      "Banking app featuring full user authentication and real time balance updates. Aptitude Bank also features the ability to send and receive money to other users and updates account transaction history for all balance updates.",
    stack: [
      "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/html_otphxd.png",
      "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/css_un8uqf.png",
      "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/javascript_cpxt37.png",
      "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/react_xdhtjl.png",
      "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/redux_r4cguj.png",
      "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/mongodb_s43pgt.png",
      "https://res.cloudinary.com/de5gzocha/image/upload/v1612922901/Portfolio/nodejs_stx37t.png",
    ],
    github: "https://github.com/kev-ly32/aptitude-bank.git",
    site: "https://aptitudebank.herokuapp.com/",
  },
  {
    name: "Noted",
    img:
      "https://res.cloudinary.com/de5gzocha/image/upload/v1613008132/Portfolio/noted_wwosxj.png",
    description:
      "Personalized note taking app with full user authentication. App features the ability to not only add, update, and remove notes, but also allows users to move each note within the dashboard whereever they please, organizing them in a way that suits their needs. Note position is updated in real time and saves to a Postgresql database.",
    stack: [
      "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/html_otphxd.png",
      "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/css_un8uqf.png",
      "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/javascript_cpxt37.png",
      "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/react_xdhtjl.png",
      "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/mui_f1zwfn.png",
      "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/postgresql_truxlj.png",
      "https://res.cloudinary.com/de5gzocha/image/upload/v1612922901/Portfolio/nodejs_stx37t.png",
    ],
    github: "https://github.com/kev-ly32/noted.git",
    site: "https://have-it-noted.herokuapp.com/",
  },
];

const useStyles = makeStyles({
  container: {
    backgroundColor: "#F5F5F5",
    padding: "5% 0",
  },
  header: {
    height: "10%",
    textAlign: "center",
  },
  projectsContainer: {
    width: "90%",
    margin: "0 auto 5% auto",
  },
  project: {
    zIndex: "1",
    height: " 300px",
    position: "relative",
  },
  layer: {
    height: "300px",
    zIndex: "2",
    position: "relative",
    top: "-300px",
    color: "white",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    "& .layerContent": { display: "none" },
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.75)",
      cursor: "pointer",
    },
    "&:hover .layerContent": { display: "flex" },
  },
  description: {
    paddingLeft: "5%",
  },
});

function Projects({ projectsRef }) {
  const classes = useStyles();
  const [project, setProject] = useState("");

  const handleClick = (e) => {
    let projectId = e.currentTarget.id;
    setProject(projects[projectId]);
  };
  return (
    <Grid
      innerRef={projectsRef}
      justify="center"
      container
      className={classes.container}
    >
      <Grid item xs={12} className={`${classes.header} fade-in`}>
        <Typography gutterBottom variant="h4">
          Projects!
        </Typography>
      </Grid>
      <Grid spacing={4} container className={classes.projectsContainer}>
        {projects.map((project, i) => (
          <Grid
            key={i}
            item
            xs={12}
            sm={6}
            md={4}
            className="fade-in"
            style={{ height: "350px" }}
          >
            <Card square>
              <CardMedia className={classes.project} image={project.img} />
            </Card>
            <Grid
              container
              direction="column"
              className={classes.layer}
              onClick={handleClick}
              id={i}
            >
              <VisibilityIcon
                className="layerContent"
                style={{ fontSize: "30px" }}
              />
              <Typography className="layerContent" style={{ fontSize: "20px" }}>
                {project.name}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid container justify="center">
        <Grid container style={{ width: "90%" }} className="fade-in">
          {project !== "" ? (
            <>
              <Grid item xs={12}>
                <Typography gutterBottom variant="h4">
                  {project.name}
                </Typography>
              </Grid>
              <Grid item md={7}>
                <img
                  src={project.img}
                  alt={project.img}
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    width: "auto",
                    height: "auto",
                  }}
                />
              </Grid>
              <Grid item md={5} className={classes.description}>
                <Typography color="secondary" variant="h6">
                  Description:
                </Typography>
                <p> {project.description}</p>
                <Typography color="secondary" variant="h6">
                  Tech stack:
                </Typography>
                {project.stack.map((logo, i) => (
                  <img key={i} src={logo} alt={logo} />
                ))}
                <Grid
                  container
                  justify="center"
                  spacing={3}
                  style={{ marginTop: "5%" }}
                >
                  <Grid item>
                    <a
                      href={project.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <Button variant="outlined">View Site</Button>
                    </a>
                  </Grid>
                  <Grid item>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <Button variant="outlined">View Code</Button>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
            </>
          ) : null}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Projects;
