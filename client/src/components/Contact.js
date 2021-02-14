import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
  form: {
    minWidth: "25%",
    background: "rgba(120,120,120,0.8)",
    padding: "2em",
  },
  input: {
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
          <Typography color="secondary" variant="h3">
            Contact Me
          </Typography>
          <form
            action="mailto:kev_ly32@hotmail.com"
            method="post"
            encType="text/plain"
          >
            <TextField
              fullWidth
              margin="normal"
              color="secondary"
              label="Your Email"
              name="email"
              value={contact.email}
              onChange={handleChange}
              InputProps={{ className: classes.input }}
            />
            <TextField
              fullWidth
              margin="normal"
              multiline
              rows={20}
              color="secondary"
              label="Message"
              name="message"
              value={contact.message}
              onChange={handleChange}
              InputProps={{ className: classes.input }}
            />
            <Button type="submit" color="secondary">
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Contact;
