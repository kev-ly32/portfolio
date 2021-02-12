import React, { useState } from "react";
import { Grid, Typography, Card, CardMedia } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { makeStyles } from "@material-ui/core/styles";
import background from "../public/Background.jpg";

const projects = [
  "https://res.cloudinary.com/de5gzocha/image/upload/v1613008132/Portfolio/employee-database_tlmo9d.png",
  "https://res.cloudinary.com/de5gzocha/image/upload/v1613008132/Portfolio/aptitude-bank_m9khsm.png",
  "https://res.cloudinary.com/de5gzocha/image/upload/v1613008132/Portfolio/noted_wwosxj.png",
];

const useStyles = makeStyles({
  container: {
    height: "80%",
    backgroundColor: "#F5F5F5",
    padding: "5% 0",
    // backgroundImage: `url(${background})`,
    // backgroundSize: "cover",
    // backgroundAttachment: "fixed",
    // backgroundPosition: "center",
  },
  header: {
    height: "10%",
    textAlign: "center",
  },
  projectsContainer: {
    width: "90%",
    margin: "0 auto",
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
});

function Projects(props) {
  const classes = useStyles();
  const [project, setProject] = useState("");

  const handleClick = (e) => {
    let projectId = e.currentTarget.id;
    setProject(projects[projectId]);
  };
  return (
    <Grid justify="center" container className={classes.container}>
      <Grid item xs={12} className={classes.header}>
        <Typography variant="h4">Projects!</Typography>
      </Grid>
      <Grid spacing={4} container className={classes.projectsContainer}>
        {projects.map((project, i) => (
          <Grid key={i} item xs={12} sm={6} md={4} style={{ height: "350px" }}>
            <Card square>
              <CardMedia className={classes.project} image={project} />
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
              <Typography
                name="2"
                className="layerContent"
                style={{ fontSize: "20px" }}
              >
                Project Details
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid container>
        <h1>Project details</h1>
        <img src={project} alt={project} />
      </Grid>
    </Grid>
  );
}

export default Projects;
