import React, { useState } from "react";
import {
  IconButton,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

import background from "../public/Background.jpg";

const useStyles = makeStyles({
  container: {
    height: "80%",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
  },
  layer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    height: "100%",
  },
  // form: {
  //   minWidth: "25%",
  //   background: "rgba(120,120,120,0.2)",
  //   padding: "2em",
  // },
  contactText: {
    color: "white",
  },
});

function Contact(props) {
  const [contact, setContact] = useState({ email: "", message: "" });
  console.log(contact);
  const classes = useStyles();

  const handleChange = (e) => {
    const { name, value } = e.target;
    e.preventDefault();
    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <Grid container className={classes.container}>
      <Grid
        justify="center"
        alignItems="center"
        direction="column"
        container
        className={classes.layer}
      >
        <Grid item className={classes.form}>
          <Typography align="center" variant="h3" color="secondary">
            Contact Me
          </Typography>
          <Grid container justify="center">
            <Grid item>
              <IconButton href="mailto:kev_ly32@hotmail.com">
                <MailOutlineIcon fontSize="large" style={{ color: "white" }} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                href="https://www.linkedin.com/in/kevin-ly-b7720b13a/"
                target="_blank"
              >
                <LinkedInIcon fontSize="large" style={{ color: "white" }} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton href="https://github.com/kev-ly32" target="_blank">
                <GitHubIcon fontSize="large" style={{ color: "white" }} />
              </IconButton>
            </Grid>
            <Grid container justify="center">
              <Button
                variant="contained"
                fontSize="large"
                // style={{ color: "white" }}
              >
                Resume
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Contact;
