import React, { useState } from "react";
import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  MenuItem,
  Menu,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import arrowLeft from "../assets/arrowLeft.svg";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import pawIcon from "../assets/pawWhite.svg";

const AdminNavBarContainer = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const { logout, auth } = useAuth();
  const userName = auth.userName;
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar
          sx={
            window.location.pathname.includes("zoonosis/")
              ? { justifyContent: "space-between" }
              : { justifyContent: "space-between" }
          }
        >
          {window.location.pathname.includes("zoonosis/") ? (
            <Button
              variant="contained"
              onClick={() => navigate("/admin/zoonosis")}
              sx={{
                color: "#fafafa",
                fontWeight: 600,
                display: "flex",
                placeContent: "center",
                cursor: "pointer",
              }}
              color="secondary"
            >
              <img src={arrowLeft} alt="icono de flecha" />
              volver
            </Button>
          ) : (
            <img
              src={pawIcon}
              alt="logo"
              style={{ width: "40px", height: "40px" }}
            />
          )}
          <div
            onClick={handleMenu}
            style={{
              display: "flex",
              placeContent: "center",
              cursor: "pointer",
            }}
          >
            <Typography>{userName}</Typography>
            <AccountCircle />
          </div>
          <Menu
            sx={{ mt: "30px" }}
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              onClick={() => {
                handleClose();
                logout();
              }}
            >
              Cerrar sesión
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      {children}
    </div>
  );
};

export default AdminNavBarContainer;
