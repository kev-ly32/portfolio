import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Grid,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    width: "20%",
    color: "#f57c00",
    paddingLeft: "20px",
  },
  paper: {
    background: "#424242",
    color: "white",
    width: "35%",
  },
}));

function Navbar({ aboutScroll, projectsScroll, skillsScroll, contactScroll }) {
  const navLinks = ["About", "Skills", "Projects", "Contact"];
  const classes = useStyles();
  const [mobileView, setMobileView] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 700
        ? setMobileView(true)
        : setMobileView(false);
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Kevin
        </Typography>
        {!mobileView ? (
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
        ) : (
          <Grid container justify="flex-end" spacing={2}>
            <IconButton color="inherit" onClick={handleDrawerOpen}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={handleDrawerClose}
              classes={{ paper: classes.paper }}
            >
              <div>
                <List>
                  {navLinks.map((link, i) => (
                    <ListItem
                      button
                      key={i}
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
                      <ListItemText
                        primary={link}
                        style={{ textAlign: "center" }}
                      />
                    </ListItem>
                  ))}
                </List>
              </div>
            </Drawer>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
