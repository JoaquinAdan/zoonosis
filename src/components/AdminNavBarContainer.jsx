import React, { useState } from "react";
import { Link } from "react-router-dom";
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

const AdminNavBarContainer = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

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
              : { justifyContent: "flex-end" }
          }
        >
          {window.location.pathname.includes("zoonosis/") && (
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
          )}
          <div
            onClick={handleMenu}
            style={{
              display: "flex",
              placeContent: "center",
              cursor: "pointer",
            }}
          >
            <Typography>Usuario</Typography>
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
            <MenuItem component={Link} to="/admin" onClick={handleClose}>
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
