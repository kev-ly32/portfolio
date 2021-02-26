import React, { useState } from "react";
import { Button, Grid, Typography, Card, CardMedia } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { makeStyles } from "@material-ui/core/styles";

const projects = [
  {
    name: "Noted",
    img:
      "https://res.cloudinary.com/de5gzocha/image/upload/v1613008132/Portfolio/noted_wwosxj.png",
    description: `Noted is a personalized note taking app featuring full user 
      authentication using Passport.js and utilizes Material-UI as the front 
      end framework for an enhanced experience. This App features CRUD 
      capabilities and allows users to position each note by dragging them 
      within the dashboard wherever they please, organizing them in a way 
      that suits their needs. Note position is persisted when users log out by 
      saving their relative coordinates to a PostgreSQL database.`,
    stack: [
      {
        link:
          "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/html_otphxd.png",
        name: "HTML5",
      },
      {
        link:
          "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/css_un8uqf.png",
        name: "CSS3",
      },
      {
        link:
          "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/javascript_cpxt37.png",
        name: "Javascript",
      },
      {
        link:
          "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/react_xdhtjl.png",
        name: "React",
      },
      {
        link:
          "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/mui_f1zwfn.png",
        name: "Material-UI",
      },
      {
        link:
          "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/postgresql_truxlj.png",
        name: "PostgreSQL",
      },
      {
        link:
          "https://res.cloudinary.com/de5gzocha/image/upload/v1612922901/Portfolio/nodejs_stx37t.png",
        name: "Node.js",
      },
    ],
    github: "https://github.com/kev-ly32/noted.git",
    site: "https://have-it-noted.herokuapp.com/",
  },

  {
    name: "Aptitude Bank",
    img:
      "https://res.cloudinary.com/de5gzocha/image/upload/v1613008132/Portfolio/aptitude-bank_m9khsm.png",
    description: `Aptitude Bank features full user authentication using Passport.js and 
      mimics real banking functionality. These features include deposits and
      withdrawals, as well as money transfers between accounts or to another
      user. On top of this, transactions are logged to keep track of incoming
      and outgoing money transfers for each account. Redux is used in this 
      application to manage the state of account balances and stores it within
      a mongoDB database.
      
      *Please note, a real SIN # is not required for
      registration.`,
    stack: [
      {
        link:
          "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/html_otphxd.png",
        name: "HTML5",
      },
      {
        link:
          "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/css_un8uqf.png",
        name: "CSS3",
      },
      {
        link:
          "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/javascript_cpxt37.png",
        name: "Javascript",
      },
      {
        link:
          "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/react_xdhtjl.png",
        name: "React",
      },
      {
        link:
          "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/redux_r4cguj.png",
        name: "Redux",
      },
      {
        link:
          "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/mongodb_s43pgt.png",
        name: "MongoDB",
      },
      {
        link:
          "https://res.cloudinary.com/de5gzocha/image/upload/v1612922901/Portfolio/nodejs_stx37t.png",
        name: "Node.js",
      },
    ],
    github: "https://github.com/kev-ly32/aptitude-bank.git",
    site: "https://aptitudebank.herokuapp.com/",
  },
  {
    name: "Flow Employee Database",
    img:
      "https://res.cloudinary.com/de5gzocha/image/upload/v1613008132/Portfolio/employee-database_tlmo9d.png",
    description: `Flow is an employee database application that allows users, 
        perhaps from Human Resources, to update an individual database 
        containing employee information for a company. This is a full CRUD app 
        featuring local authentication using Passport.js and search functionality.
      `,
    stack: [
      {
        link:
          "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/html_otphxd.png",
        name: "HTML5",
      },
      {
        link:
          "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/css_un8uqf.png",
        name: "CSS3",
      },
      {
        link:
          "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/javascript_cpxt37.png",
        name: "Javascript",
      },
      {
        link:
          "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/react_xdhtjl.png",
        name: "React",
      },
      {
        link:
          "https://res.cloudinary.com/de5gzocha/image/upload/v1612841339/Portfolio/mongodb_s43pgt.png",
        name: "MongoDB",
      },
      {
        link:
          "https://res.cloudinary.com/de5gzocha/image/upload/v1612922901/Portfolio/nodejs_stx37t.png",
        name: "Node.js",
      },
    ],
    github: "https://github.com/kev-ly32/Flow-Database.git",
    site: "https://flow-employee-database.herokuapp.com/",
  },
];

const useStyles = makeStyles({
  container: {
    backgroundColor: "#F5F5F5",
    padding: "7% 0",
  },
  header: {
    height: "10%",
    width: "90%",
    paddingLeft: "16px",
  },
  projectsContainer: {
    width: "90%",
    margin: "0 auto 5% auto",
  },
  project: {
    zIndex: "1",
    height: " 300px",
    position: "relative",
  },
  layer: {
    height: "300px",
    zIndex: "2",
    position: "relative",
    top: "-300px",
    color: "white",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    "& .layerContent": { display: "none" },
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.75)",
      cursor: "pointer",
    },
    "&:hover .layerContent": { display: "flex" },
  },
  description: {
    paddingLeft: "5%",
  },
  projectDescription: {
    marginBottom: "3%",
    lineHeight: "1.4",
    letterSpacing: "0.4px",
  },
  logo: {
    background: "none",
    transition: "background 50ms ease-in",
    "&:hover": {
      background: "rgb(245, 124, 0, 0.09)",
      borderRadius: "13px",
    },
    "&+ .logoName": {
      display: "none",
    },
    "&:hover + .logoName": {
      display: "block",
    },
  },
});

function Projects({ projectsRef }) {
  const classes = useStyles();
  const [project, setProject] = useState("");
  const [showProject, setShowProject] = useState(false);

  const handleClick = (e) => {
    let projectId = e.currentTarget.id;
    setShowProject(false);
    if (project === "") {
      setShowProject(true);
      setProject(projects[projectId]);
    } else {
      setTimeout(() => {
        setShowProject(true);
        setProject(projects[projectId]);
      }, 290);
    }
  };
  return (
    <Grid
      innerRef={projectsRef}
      justify="center"
      container
      className={classes.container}
    >
      <Grid item className={`${classes.header} fade-in`}>
        <Typography gutterBottom variant="h3">
          Projects
        </Typography>
      </Grid>
      <Grid spacing={4} container className={classes.projectsContainer}>
        {projects.map((project, i) => (
          <Grid
            key={i}
            item
            xs={12}
            sm={6}
            md={4}
            className="fade-in"
            style={{ height: "350px" }}
          >
            <Card square>
              <CardMedia className={classes.project} image={project.img} />
            </Card>
            <Grid
              container
              direction="column"
              className={classes.layer}
              onClick={handleClick}
              id={i}
            >
              <VisibilityIcon
                className="layerContent"
                style={{ fontSize: "30px" }}
              />
              <Typography className="layerContent" style={{ fontSize: "20px" }}>
                {project.name}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid container justify="center">
        <Grid
          container
          style={{ width: "90%" }}
          className={showProject ? "project-fade-in appear" : "project-fade-in"}
        >
          {project !== "" ? (
            <>
              <Grid item xs={12}>
                <Typography gutterBottom variant="h4">
                  {project.name}
                </Typography>
              </Grid>
              <Grid item md={7}>
                <img
                  src={project.img}
                  alt={project.img}
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    width: "auto",
                    height: "auto",
                  }}
                />
              </Grid>
              <Grid item md={5} className={classes.description}>
                <Typography color="secondary" variant="h6">
                  Description:
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.projectDescription}
                >
                  {" "}
                  {project.description}
                </Typography>
                <Typography color="secondary" variant="h6">
                  Built With:
                </Typography>
                <Grid container>
                  {project.stack.map((logo, i) => (
                    <div key={i} style={{ maxWidth: "50px", height: "70px" }}>
                      <img
                        className={classes.logo}
                        src={logo.link}
                        alt="logo"
                      />
                      <p className="logoName" style={{ fontSize: "12px" }}>
                        {logo.name}
                      </p>
                    </div>
                  ))}
                </Grid>
                <Grid
                  container
                  justify="center"
                  spacing={3}
                  style={{ marginTop: "5%" }}
                >
                  <Grid item>
                    <a
                      href={project.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <Button variant="outlined">View Site</Button>
                    </a>
                  </Grid>
                  <Grid item>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <Button variant="outlined">View Code</Button>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
            </>
          ) : null}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Projects;
