import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import PortfolioIcon from "@mui/icons-material/PermMedia";
import SkillsIcon from "@mui/icons-material/Construction";
import ContactIcon from "@mui/icons-material/Call";
import HomeIcon from "@mui/icons-material/Home";
import { withRouter } from "react-router-dom";

function Navbar(props) {
  const [value, setValue] = React.useState(props.location.pathname);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    setValue(props.location.pathname);
  }, [props.location.pathname]);

  return (
    <Paper className="navbar-wrapper bottom" elevation={3}>
      <BottomNavigation
        className="navbar"
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="Home"
          value="/"
          icon={<HomeIcon />}
          onClick={() => {
            props.history.push("/");
          }}
        />
        <BottomNavigationAction
          label="Portfolio"
          value="/portfolio"
          icon={<PortfolioIcon />}
          onClick={() => {
            props.history.push("/portfolio");
          }}
        />
        <BottomNavigationAction
          label="Education"
          value="/education"
          icon={<SchoolIcon />}
          onClick={() => {
            props.history.push("/education");
          }}
        />
        <BottomNavigationAction
          label="Skills"
          value="/skills"
          icon={<SkillsIcon />}
          onClick={() => {
            props.history.push("/skills");
          }}
        />
        <BottomNavigationAction
          label="Contact"
          value="/contact"
          icon={<ContactIcon />}
          onClick={() => {
            props.history.push("/contact");
          }}
        />
      </BottomNavigation>
    </Paper>
  );
}

export default withRouter(Navbar);
