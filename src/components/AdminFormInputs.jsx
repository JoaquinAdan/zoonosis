import React from "react";
import { useState, useEffect } from "react";
// import { GiPadlockOpen, GiPadlock } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import AdminInputsResponsive from "../features/AdminInputsResponsive";
import useAuth from "../hooks/useAuth"

const AdminFormInputs = () => {
  const initialState = "";
  const [inputNameText, setInputNameText] = useState(initialState);
  const [inputPassword, setInputPassword] = useState(initialState);
  const [selected, setSelected] = useState("");
  const [isError, setIsError] = useState("");
  const [password, setPasword] = useState(false);
  const navigate = useNavigate();

  const { saveAuthInStorage} = useAuth();

  //MANEJADOR DE INPUTS
  const inputN = document.getElementById("input-name");
  const inputP = document.getElementById("input-password");

  const handleInputNameChange = () => {
    setInputNameText(inputN.value);
  };

  const handleInputPasswordChange = () => {
    setInputPassword(inputP.value);
  };

  const handleCheckboxChange = (e) => {
    setSelected(e.target.checked);
    // console.log(e.target.checked);

    if (e.target.checked === false) {
      localStorage.removeItem("nombre", inputNameText);
      localStorage.removeItem("contraseña", inputPassword);
      localStorage.setItem("toggle-switch", false);
    }
  };

  const dependencie =
    inputNameText !== initialState &&
    inputPassword !== initialState &&
    inputNameText != null &&
    inputPassword != null;

  const saveData = (e) => {
    e.preventDefault()
    if (dependencie) {
      if (selected === true) {
        saveAuthInStorage({inputNameText, inputPassword})
      }
      if (inputNameText !== "" && inputPassword !== "") {
        localStorage.setItem("toggle-switch", selected === true);
      }
      // navigate("/admin/zoonosis");
    }
    if (inputNameText === "" && inputPassword === "") {
      setTimeout(() => {
        setIsError("vacio");
      }, 0);
      setTimeout(() => {
        setIsError("");
      }, 3000);
    } else if (inputNameText === "" && inputPassword.length > 1) {
      setTimeout(() => {
        setIsError("nombre");
      }, 0);
      setTimeout(() => {
        setIsError("");
      }, 3000);
    } else if (inputPassword === "" && inputNameText.length > 1) {
      setTimeout(() => {
        setIsError("apellido");
      }, 0);
      setTimeout(() => {
        setIsError("");
      }, 3000);
    }
  };

  // RECIBIR INFORMACION DE LOCAL STORAGE

  const getNameData = () => {
    return localStorage.getItem("nombre");
  };

  const getPasswordData = () => {
    return localStorage.getItem("contraseña");
  };

  const getToggleData = () => {
    return localStorage.getItem("toggle-switch") === "true";
  };

  useEffect(() => {
    if (window.localStorage.length === 1) {
      const inputP = document.getElementById("input-password");
      const inputN = document.getElementById("input-name");
      if (inputP.value === "" || inputN.value === "") {
        setInputPassword(inputPassword);
        setInputNameText(inputNameText);
      } else {
        setInputPassword(inputP.value);
        setInputNameText(inputN.value);
      }
    } else {
      setInputNameText(getNameData());
      setInputPassword(getPasswordData());
      setSelected(getToggleData());
    }
  }, []);

  return (
    <AdminInputsResponsive
      isError={isError}
      saveData={saveData}
      selected={selected}
      password={password}
      handleInputNameChange={handleInputNameChange}
      setPasword={setPasword}
      inputNameText={inputNameText}
      inputPassword={inputPassword}
      handleInputPasswordChange={handleInputPasswordChange}
      handleCheckboxChange={handleCheckboxChange}
    />
  );
};

export default AdminFormInputs;
