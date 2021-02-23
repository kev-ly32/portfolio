import React from "react";
import { AppBar, Toolbar, Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    width: "10%",
    textAlign: "center",
  },
}));

function Navbar({ aboutScroll, projectsScroll, skillsScroll, contactScroll }) {
  const navLinks = ["About", "Skills", "Projects", "Contact", "Resume"];
  const classes = useStyles();
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Kevin Ly
        </Typography>
        <Grid container justify="flex-end" spacing={3}>
          {navLinks.map((link, i) => (
            <Grid
              key={i}
              item
              onClick={
                link === "About"
                  ? aboutScroll
                  : link === "Projects"
                  ? projectsScroll
                  : link === "Skills"
                  ? skillsScroll
                  : link === "Contact"
                  ? contactScroll
                  : ""
              }
            >
              {link !== "Resume" ? (
                <Button color="inherit">{link}</Button>
              ) : (
                <Button variant="outlined" color="inherit">
                  <span style={{ color: "#f57c00" }}>{link}</span>
                </Button>
              )}
            </Grid>
          ))}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
