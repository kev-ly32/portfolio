import React from "react";
import { AppBar, Toolbar, Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../public/Navbar.css";

const useStyles = makeStyles((theme) => ({
  title: {
    width: "10%",
    textAlign: "center",
  },
}));

function Navbar(props) {
  const navLinks = ["Projects", "About", "Resume", "Contact"];
  const classes = useStyles();
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Kevin Ly
        </Typography>
        <Grid container justify="flex-end" spacing={3}>
          {navLinks.map((link, i) => (
            <Grid item>
              <Button key={i} color="inherit">
                {link}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
