import React from "react";
import { AppBar, Toolbar, Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    width: "20%",
    color: "#f57c00",
    // textAlign: "center",
    paddingLeft: "20px",
  },
}));

function Navbar({ aboutScroll, projectsScroll, skillsScroll, contactScroll }) {
  const navLinks = ["About", "Skills", "Projects", "Contact"];
  const classes = useStyles();
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Kevin
        </Typography>
        <Grid container justify="flex-end" spacing={2}>
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
                  : contactScroll
              }
            >
              <Button color="inherit">{link}</Button>
            </Grid>
          ))}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
