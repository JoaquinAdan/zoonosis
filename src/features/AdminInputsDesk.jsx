import React from "react";
import TextField from "@mui/material/TextField";
import { FiEye, FiEyeOff } from "react-icons/fi";
import useBreakpoint from "../hooks/useBreakpoint";

const AdminInputsDesk = ({
  error,
  saveData,
  selected,
  password,
  handleInputNameChange,
  setPasword,
  inputNameText,
  inputLastNameText,
  handleInputLastNameChange,
  handleCheckboxChange,
}) => {
  const matches = useBreakpoint("sm");
  return (
    <>
      <div className={matches ? "input-container" : "input-container-mobile"}>
        <TextField
          error={error ? true : false}
          id="input-name"
          // label={selected ? inputNameText : "Nombre"}
          label="Usuario"
          variant="standard"
          onChange={handleInputNameChange}
          className={matches ? "input" : "input-mobile"}
          value={selected ? inputNameText : inputNameText}
        />
      </div>
      <div className={matches ? "input-container eye-container" : "input-container-mobile eye-container"}>
        <TextField
          error={error ? true : false}
          id="input-last-name"
          // label={selected ? inputLastNameText : "Apellido"}
          label="Contraseña"
          type={password ? "text" : "password"}
          variant="standard"
          onChange={handleInputLastNameChange}
          className={matches ? "input" : "input-mobile"}
          // value={selected ? inputLastNameText : undefined}
          value={inputLastNameText}
        />

        <div className={matches ? "eye-position" : "eye-position-mobile"} onClick={() => setPasword(!password)}>
          {password ? (
            <FiEyeOff className="eye eye-close" />
          ) : (
            <FiEye className="eye eye-open" />
          )}
        </div>
      </div>
      {error ? (
        <div className="error-relative">
          <div className="error-container">
            <span className="error">Debe completar los campos</span>
          </div>
        </div>
      ) : null}
      <div className="actives-container">
        <div className="checkbox-container">
          <input
            type="checkbox"
            className="checkbox"
            // onClick={() => setCheck(!check)}
            onChange={handleCheckboxChange}
            checked={selected}
          />
          <span className={matches ? "span-text" : "span-text-mobile"}>Recordar usuario</span>
        </div>
        {/* <button className="button" onClick={saveData}>
      INGRESAR
    </button> */}
        <button className="button" onClick={saveData}>
          INGRESAR
        </button>
      </div>
    </>
  );
};

export default AdminInputsDesk;
