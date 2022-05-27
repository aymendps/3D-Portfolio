import React from "react";
import { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Zoom,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { withRouter } from "react-router-dom";

function DrawerMenu(props) {
  const [isOpen, setIsOpen] = useState(false);
  const takeQuestIndex = 1;

  const menu = [
    { text: "Home" },
    { text: "Take The Quest" },
    { text: "About" },
    { text: "Portfolio" },
    { text: "Skills" },
    { text: "Contact" },
  ];

  const menuItems = menu.map((element, index) => {
    return (
      <ListItem
        sx={{
          padding: "24px 16px",
        }}
        key={element.text + index}
        button
        onClick={() => {
          setIsOpen(false);
          props.history.push(
            index === takeQuestIndex
              ? "/quest"
              : "/" + element.text.toLowerCase()
          );
        }}
        className="drawer-menu-item"
      >
        <ListItemText
          className="drawer-menu-text"
          color="inherit"
          primary={element.text}
          sx={{ color: index === takeQuestIndex && "cyan" }}
        />
      </ListItem>
    );
  });

  return (
    <>
      <IconButton
        className="drawer-menu-button"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <Zoom in={isOpen === false}>
          <MenuIcon />
        </Zoom>
        <Zoom in={isOpen === true}>
          <CloseIcon sx={{ position: "absolute" }} />
        </Zoom>
      </IconButton>
      <Drawer
        PaperProps={{
          sx: {
            bgcolor: "var(--blue_bg)",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          },
        }}
        anchor="left"
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <List className="drawer-menu-list">{menuItems}</List>
      </Drawer>
    </>
  );
}

export default withRouter(DrawerMenu);
