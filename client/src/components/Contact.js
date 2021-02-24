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
    width: "100%",
    padding: "30px",
  },
  textField: {
    margin: "10px",
    background: "rgba(120,120,120,0.15)",
  },
  labelColor: {
    color: "#f57c00",
  },
  fontColor: {
    color: "white",
    letterSpacing: "0.6px",
    lineHeight: 1.6,
  },
});

function Contact({ contactRef }) {
  const [contact, setContact] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const classes = useStyles();

  const handleChange = (e) => {
    const { name, value } = e.target;
    e.preventDefault();
    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitForm = (ev) => {
    ev.preventDefault();
    const { name, email, message } = contact;
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();

    if (name === "" || email === "" || message === "") {
      setStatus("ERROR");
      return;
    }
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
        setContact({ name: "", email: "", message: "" });
      } else {
        setStatus("EMAILERROR");
      }
    };
    xhr.send(data);
  };

  return (
    <Grid innerRef={contactRef} container className={classes.container}>
      <Grid
        justify="center"
        alignItems="center"
        direction="column"
        container
        className={classes.layer}
      >
        <Grid item style={{ minWidth: "40%" }} className="fade-in">
          <Typography align="center" variant="h3" style={{ color: "white" }}>
            Contact Me
          </Typography>
          <Grid container justify="center">
            <form
              onSubmit={submitForm}
              action="https://formspree.io/f/xrgovnna"
              method="POST"
              noValidate
              autoComplete="off"
              className={classes.form}
            >
              <TextField
                name="name"
                value={contact.name}
                label="Full Name"
                fullWidth
                variant="filled"
                color="secondary"
                className={`${classes.root} ${classes.textField}`}
                InputLabelProps={{ className: classes.labelColor }}
                InputProps={{ className: classes.fontColor }}
                onChange={handleChange}
              />
              <TextField
                name="email"
                value={contact.email}
                label="Your Email"
                fullWidth
                variant="filled"
                color="secondary"
                className={`${classes.root} ${classes.textField}`}
                InputLabelProps={{ className: classes.labelColor }}
                InputProps={{ className: classes.fontColor }}
                onChange={handleChange}
              />
              <TextField
                name="message"
                value={contact.message}
                label="Message"
                fullWidth
                multiline
                rows={10}
                variant="filled"
                className={`${classes.root} ${classes.textField}`}
                InputLabelProps={{ className: classes.labelColor }}
                InputProps={{ className: classes.fontColor }}
                color="secondary"
                onChange={handleChange}
              />
              <Grid
                container
                justify="flex-end"
                style={{ margin: "10px 0 0 10px" }}
              >
                {status === "ERROR" ? (
                  <Typography variant="h5" style={{ color: "white" }}>
                    Please fill out all fields.
                  </Typography>
                ) : status === "SUCCESS" ? (
                  <Typography variant="h5" style={{ color: "white" }}>
                    Thanks! I'll be in contact soon.
                  </Typography>
                ) : status === "EMAILERROR" ? (
                  <Typography variant="h5" style={{ color: "white" }}>
                    Invalid Email.
                  </Typography>
                ) : null}

                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  style={{ marginLeft: "20px" }}
                >
                  Submit
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Contact;
