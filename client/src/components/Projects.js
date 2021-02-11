import React from "react";
import { Grid, Typography, Card, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import background from "../public/Background.jpg";

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
    height: " 300px",
  },
});

function Projects(props) {
  const classes = useStyles();
  return (
    <Grid justify="center" container className={classes.container}>
      <Grid item xs={12} className={classes.header}>
        <Typography variant="h4">Projects!</Typography>
      </Grid>
      <Grid spacing={4} container className={classes.projectsContainer}>
        <Grid item md={4}>
          <Card>
            <CardMedia
              className={classes.project}
              image="https://res.cloudinary.com/de5gzocha/image/upload/v1613008132/Portfolio/employee-database_tlmo9d.png"
            />
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card>
            <CardMedia
              className={classes.project}
              image="https://res.cloudinary.com/de5gzocha/image/upload/v1613008132/Portfolio/aptitude-bank_m9khsm.png"
            />
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card>
            <CardMedia
              className={classes.project}
              image="https://res.cloudinary.com/de5gzocha/image/upload/v1613008132/Portfolio/noted_wwosxj.png"
            />
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Projects;
