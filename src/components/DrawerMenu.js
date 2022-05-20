import React from "react";
import { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

function DrawerMenu(props) {
  const [isOpen, setIsOpen] = useState(false);

  const menu = [
    { text: "About" },
    { text: "Portfolio" },
    { text: "Skills" },
    { text: "Contact" },
  ];

  const menuItems = menu.map((element) => {
    return (
      <ListItem
        sx={{ padding: "24px 16px" }}
        key={element.text}
        button
        onClick={() => {
          setIsOpen(false);
          props.history.push(element.text.toLowerCase());
        }}
      >
        <ListItemText
          className="drawer-menu-text"
          color="inherit"
          primary={element.text}
        />
      </ListItem>
    );
  });

  return (
    <>
      <IconButton
        className="drawer-menu-button"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <MenuIcon fontSize="large" sx={{ color: "white" }} />
      </IconButton>
      <Drawer
        PaperProps={{
          sx: {
            bgcolor: "var(--darkbg)",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
        anchor="left"
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <Link
          onClick={() => {
            setIsOpen(false);
          }}
          style={{ borderRadius: "50%" }}
          to="/"
        >
          <div className="drawer-menu-avatar"></div>
        </Link>
        <List className="drawer-menu-list">{menuItems}</List>
      </Drawer>
    </>
  );
}

export default withRouter(DrawerMenu);
