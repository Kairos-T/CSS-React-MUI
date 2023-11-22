import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@mui/material/Drawer";

// Importing MUI components to handle lists in the menu
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

// Icons for menu items
import MenuIcon from "@mui/icons-material/Menu";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Home from "@material-ui/icons/Home";
import Apps from "@material-ui/icons/Apps";
import ContactMail from "@material-ui/icons/ContactMail";

// Importing image
import CatImage from './cat.png';

const drawerWidth = 250;
const useStyles = makeStyles((theme) => ({

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  title: {
    flexGrow: 1,
    color: "white",
  },
  menuSlider: {
    width: drawerWidth,
    height: "100%",
  },
  drawerContainer: {
    width: drawerWidth,
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
  listItem: {
    color: "black",
  },
  listItemIcon: {
    color: "black",
    minWidth: "36px",
  },
}));


const menuItems = [
  { listIcon: <Home />, listText: "Home", listPath: "/" },
  { listIcon: <AssignmentInd />, listText: "Resume", listPath: "/resume" },
  { listIcon: <Apps />, listText: "Portfolio", listPath: "/portfolio" },
  { listIcon: <ContactMail />, listText: "Contact", listPath: "/contact" },
];

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => {

    setOpen(open);
  };

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawer(true)}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <img src={CatImage} alt="cat" style={{ marginRight: '10px', height: '30px', width: 'auto' }} />
          <Typography variant="h6" className={classes.title}>
            CSS Assignment
          </Typography>
          <List sx={{ display: { xs: "none", md: "flex" } }}>
            {menuItems.map((item, index) => (
              <ListItem
                button
                key={item.listText}
                component="a"
                href={item.listPath}
              >
                <ListItemIcon className={classes.listItemIcon}>
                  {item.listIcon}
                </ListItemIcon>
                <ListItemText primary={item.listText} className={classes.listItem} />
              </ListItem>
            ))}
          </List>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={open}
        onClose={() => toggleDrawer(false)}
        onClick={() => toggleDrawer(false)}
      >
        <div className={classes.menuSlider}>
          <List>
            {menuItems.map((item, index) => (
              <ListItem
                button
                key={item.listText}
                component="a"
                href={item.listPath}
              >
                <ListItemIcon className={classes.listItemIcon}>
                  {item.listIcon}
                </ListItemIcon>
                <ListItemText primary={item.listText} className={classes.listItem} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;