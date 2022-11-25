import React from "react";
import { useState, useEffect } from "react";
// import { GiPadlockOpen, GiPadlock } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import AdminInputsDesk from "../features/AdminInputsDesk";
import useBreakpoint from "../hooks/useBreakpoint"

const AdminFormInputs = () => {
  const matches = useBreakpoint("sm")
  const initialState = "";
  const [inputNameText, setInputNameText] = useState(initialState);
  const [inputLastNameText, setInputLastNameText] = useState(initialState);
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  const [password, setPasword] = useState(false);
  const navigate = useNavigate();

  //MANEJADOR DE INPUTS
  const inputN = document.getElementById("input-name");
  const inputLN = document.getElementById("input-last-name");

  const handleInputNameChange = () => {
    setInputNameText(inputN.value);
  };

  const handleInputLastNameChange = () => {
    setInputLastNameText(inputLN.value);
  };

  const handleCheckboxChange = (e) => {
    setSelected(e.target.checked);
    // console.log(e.target.checked);

    if (e.target.checked === false) {
      localStorage.removeItem("nombre", inputNameText);
      localStorage.removeItem("contraseña", inputLastNameText);
      localStorage.setItem("toggle-switch", false);
    }
  };

  const dependencie =
    inputNameText !== initialState &&
    inputLastNameText !== initialState &&
    inputNameText != null &&
    inputLastNameText != null;

  const saveData = () => {
    if (dependencie) {
      if (selected === true) {
        localStorage.setItem("nombre", inputNameText);
        localStorage.setItem("contraseña", inputLastNameText);
      }
      if (inputNameText !== "" && inputLastNameText !== "") {
        localStorage.setItem("toggle-switch", selected === true);
      }
      navigate("/admin/zoonosis");
    }
    if (inputNameText === "" || inputLastNameText === "") {
      setTimeout(() => {
        setError("vacio");
      }, 0);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  // RECIBIR INFORMACION DE LOCAL STORAGE

  const getNameData = () => {
    return localStorage.getItem("nombre");
  };

  const getLastNameData = () => {
    return localStorage.getItem("contraseña");
  };

  const getToggleData = () => {
    return localStorage.getItem("toggle-switch") === "true";
  };

  useEffect(() => {
    if (window.localStorage.length === 1) {
      const inputLN = document.getElementById("input-last-name");
      const inputN = document.getElementById("input-name");
      if (inputLN.value === "" || inputN.value === "") {
        setInputLastNameText(inputLastNameText);
        setInputNameText(inputNameText);
      } else {
        setInputLastNameText(inputLN.value);
        setInputNameText(inputN.value);
      }
    } else {
      // setNombre(getNameData());
      setInputNameText(getNameData());
      // setApellido(getLastNameData());
      setInputLastNameText(getLastNameData());
      setSelected(getToggleData());
    }
  }, []);

  return (
      <AdminInputsDesk
        error={error}
        saveData={saveData}
        selected={selected}
        password={password}
        handleInputNameChange={handleInputNameChange}
        setPasword={setPasword}
        inputNameText={inputNameText}
        inputLastNameText={inputLastNameText}
        handleInputLastNameChange={handleInputLastNameChange}
        handleCheckboxChange={handleCheckboxChange}
      />
  );
};

export default AdminFormInputs;
