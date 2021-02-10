import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import background from "../public/Background.jpg";

const useStyles = makeStyles({
  container: {
    height: "100%",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
  },
});

function Projects(props) {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item>
        <h1>Projects!</h1>
      </Grid>
    </Grid>
  );
}

export default Projects;
