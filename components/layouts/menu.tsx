import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import TimelineIcon from "@material-ui/icons/Timeline";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import { MenuType } from "../../types/menu.types";
import Link from "next/link";
import { useRouter } from "next/router";

const drawerWidth = 280;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundImage: 'url("/static/img/background_menu.png")',
      backgroundRepeat: "no-repeat",
      backgroundColor: "#f2fcff",
      backgroundPosition: "bottom",
    },
    drawerContainer: {
      overflow: "auto",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    isActive: {
      backgroundColor: "#338bff",
      color: "#FFF",
    },
    banner: {
      height: 290,
      width: "100%",
    },
  })
);

const menus: MenuType[] = [
  { title: "Stock", icon: <HomeWorkIcon />, path: "/stock" },
  { title: "Report", icon: <TimelineIcon />, path: "/report" },
];

export default function Menu() {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <img
          src="/static/img/menu_banner.jpg"
          alt=""
          className={classes.banner}
        />
        <Divider />

        <List>
          {menus.map(({ title, icon, path }, index) => {
            const rootPath = "/" + router.pathname.split("/")[1];
            return (
              <Link href={path}>
                <ListItem
                  button
                  key={title}
                  className={rootPath == path ? classes.isActive : ""}
                >
                  <ListItemIcon
                    style={{ color: rootPath == path ? "white" : "black" }}
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText primary={title} />
                </ListItem>
              </Link>
            );
          })}
        </List>
      </div>
    </Drawer>
  );
}
