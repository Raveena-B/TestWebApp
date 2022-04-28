import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

const NavBar = () => {
  return (
    <AppBar position="static" sx={{ background: "#F3EC92" }}>
      <Toolbar>
        <Typography
          variant="h5"
          component="div"
          color={"#D32F2F"}
          sx={{ flexGrow: 1 }}
        >
          <b>Test Web App</b>
        </Typography>
        <Stack direction={"row"} spacing={5}>
          <NavLink
            className="nav-link"
            to="/"
            style={(isActive) => ({
              color: isActive ? "green" : "blue",
            })}
          ></NavLink>
          <NavLink
            className="nav-link"
            variant="h6"
            to="/home"
            style={(isActive) => ({ color: isActive ? "green" : "blue" })}
          >
            Home
          </NavLink>
          <NavLink
            className="nav-link"
            variant="h6"
            to="/create"
            style={(isActive) => ({ color: isActive ? "green" : "blue" })}
          >
            Create
          </NavLink>
          <NavLink
            className="nav-link"
            variant="h6"
            to="/display"
            style={(isActive) => ({ color: isActive ? "green" : "blue" })}
          >
            Display
          </NavLink>
          <NavLink
            className="nav-link"
            variant="h6"
            to="/update"
            style={(isActive) => ({ color: isActive ? "green" : "blue" })}
          >
            Update
          </NavLink>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
