import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Button } from "@mui/material";
import altaIcon from "../assets/alta.svg";
import bajaIcon from "../assets/baja.svg";

const AdminStatus = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleMenu}
        sx={{ fontWeight: "600" }}
        color="secondary"
      >
        Cambiar estado
      </Button>
      <Menu
        sx={{ mt: "50px" }}
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
          style={{ color: "#c62828", fontWeight: "600" }}
          onClick={() => {
            handleClose();
          }}
        >
          <img src={bajaIcon} alt="icono de baja" />
          Rechazar
        </MenuItem>
        <MenuItem
          style={{ color: "#1b5e20", fontWeight: "600" }}
          onClick={() => {
            handleClose();
          }}
        >
          <img src={altaIcon} alt="icono de alta" />
          Aprobar
        </MenuItem>
      </Menu>
    </>
  );
};

export default AdminStatus;
