import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <IconContext.Provider value={{ color: "#fff" }}>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
          }}
        >
          <Toolbar>
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="start"
              onClick={showSidebar}
              sx={{ mr: 2 }}
            >
              <MenuIcon sx={{ fontSize: "44px" }} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <nav style={{ width: "100vw" }}>
          <Drawer
            variant="temporary"
            anchor="left"
            sx={{
              width: "250px",
              "& .MuiDrawer-paper": {
                width: "250px",
                backgroundColor: "#fff",
              },
            }}
            open={sidebar}
            onClose={showSidebar}
          >
            <List>
              <ListItem>
                <IconButton onClick={showSidebar}>
                  <AiIcons.AiOutlineClose color="primary" />
                </IconButton>
                <Typography variant="h6" align="center" color="primary" ml={3}>
                  MM Hotel
                </Typography>
              </ListItem>
              <Divider />
              {SidebarData.map((item, index) => (
                <ListItem
                  key={index}
                  onClick={showSidebar}
                  sx={{ "&:hover": { backgroundColor: "#800080" } }}
                >
                  <ListItemButton alignItems="center">
                    {item.icon}
                    <ListItemText
                      primary={item.title}
                      sx={{ textAlign: "center", fontSize: "26px !important" }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;
