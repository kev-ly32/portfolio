import React from "react";
import { AppBar, Toolbar, Button, Grid } from "@material-ui/core";
import "../public/Navbar.css";

function Navbar(props) {
  const navLinks = ["Projects", "About", "Resume", "Contact"];

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Grid container justify="center" spacing={5}>
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
