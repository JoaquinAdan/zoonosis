import React, { useState } from "react";
import siluetaPerro from "../assets/dog/silueta-perro-full.png";
// import siluetaPerro from "../assets/dog/silueta-perro.png";
import orejaIzquierda from "../assets/dog/orejaIzquierda-perro.png";
import orejaDerecha from "../assets/dog/orejaDerecha-perro.png";
import cabeza from "../assets/dog/cabeza-perro.png";
import hocico from "../assets/dog/hocico-perro.png";
import cuello from "../assets/dog/cuello-perro.png";
import pecho from "../assets/dog/pecho-perro.png";
import pataIzquierdaAdelante from "../assets/dog/pataIzquierdaAdelante-perro.png";
import pataIzquierdaAtras from "../assets/dog/pataIzquierdaAtras-perro.png";
import pataderechaAdelante from "../assets/dog/pataderechaAdelante-perro.png";
import pataderechaAtras from "../assets/dog/pataderechaAtras-perro.png";
import lomo from "../assets/dog/lomo-perro.png";
import cola from "../assets/dog/cola-perro.png";
import TextField from "@mui/material/TextField";
import useBreakpoint from "../hooks/useBreakpoint";
import "../dog.css";

const MapDogResponsive = ({ size }) => {
  const [partBody, setPartBody] = useState("");
  const [description, setDescription] = useState("");
  const matches = useBreakpoint("md");

  const handleTextFieldChange = (e) => {
    console.log(e.target.value);
    setDescription(e.target.value);
  };

  const clearDescription = () => {
    setDescription("");
  };

  return (
    <div
      style={
        !matches
          ? { display: "flex", alignItems: "center", flexDirection: "column" }
          : { display: "flex", alignItems: "center", flexDirection: "row" }
      }
    >
      <div
        style={{
          position: "relative",
          width: `calc(880px * ${size})`,
          height: `calc(600px * ${size})`,
        }}
      >
        <img
          style={{ position: "absolute", width: `calc(880px * ${size})` }}
          src={siluetaPerro}
        />
        <img
          className="body-parts"
          src={orejaIzquierda}
          style={{ width: `calc(90px * ${size})`, right: `calc(164px *${size})`, top: `calc(14px * ${size})` }}
          onClick={() => {
            setPartBody("orejaIzq");
            clearDescription();
          }}
        />
        <img
          className="body-parts"
          src={orejaDerecha}
          style={{ width: `calc(90px * ${size})`, right: `calc(302px *${size})`, top: `calc(14px * ${size})` }}
          onClick={() => {
            setPartBody("orejaDer");
            clearDescription();
          }}
        />
        <img
          className="body-parts"
          src={cabeza}
          style={{ width: `calc(120px * ${size})`, right: `calc(217px *${size})`, top: `calc(35px * ${size})` }}
          onClick={() => {
            setPartBody("cabeza");
            clearDescription();
          }}
        />
        <img
          className="body-parts"
          src={hocico}
          style={{ width: `calc(70px * ${size})`, right: `calc(242px *${size})`, top: `calc(105px * ${size})` }}
          onClick={() => {
            setPartBody("hocico");
            clearDescription();
          }}
        />
        <img
          className="cuello-responsive body-parts"
          src={cuello}
          style={{ width: `calc(90px * ${size})`, right: `calc(248px *${size})`, top: `calc(165px * ${size})` }}
          onClick={() => {
            setPartBody("cuello");
            clearDescription();
          }}
        />
        <img
          className="lomo-responsive body-parts"
          src={lomo}
          style={{ width: `calc(310px * ${size})`, left: `calc(263px *${size})`, bottom: `calc(221px * ${size})` }}
          onClick={() => {
            setPartBody("lomo");
            clearDescription();
          }}
        />
        <img
          className="pecho-responsive body-parts"
          src={pecho}
          style={{ width: `calc(120px * ${size})`, right: `calc(243px *${size})`, top: `calc(221px * ${size})` }}
          onClick={() => {
            setPartBody("pecho");
            clearDescription();
          }}
        />
        <img
          className="pata-derecha-adelante-responsive body-parts"
          src={pataderechaAdelante}
          style={{ width: `calc(60px * ${size})`, right: `calc(293px *${size})`, bottom: `calc(28px * ${size})` }}
          onClick={() => {
            setPartBody("pataDerAde");
            clearDescription();
          }}
        />
        <img
          className="pata-derecha-atras-responsive body-parts"
          src={pataderechaAtras}
          style={{ width: `calc(150px * ${size})`, left: `calc(215px *${size})`, bottom: `calc(24px * ${size})` }}
          onClick={() => {
            setPartBody("pataDerAtr");
            clearDescription();
          }}
        />
        <img
          className="cola-responsive body-parts"
          src={cola}
          style={{ width: `calc(110px * ${size})`, left: `calc(166px *${size})`, top: `calc(156px * ${size})` }}
          onClick={() => {
            setPartBody("cola");
            clearDescription();
          }}
        />
        <img
          className="pata-izquierda-adelante-responsive body-parts"
          src={pataIzquierdaAdelante}
          style={{ width: `calc(60px * ${size})`, right: `calc(253px *${size})`, bottom: `calc(64px * ${size})` }}
          onClick={() => {
            setPartBody("pataIzqAde");
            clearDescription();
          }}
        />
        <img
          className="pata-izquierda-atras-responsive body-parts"
          src={pataIzquierdaAtras}
          style={{ width: `calc(115px * ${size})`, left: `calc(289px *${size})`, bottom: `calc(41px * ${size})` }}
          onClick={() => {
            setPartBody("pataIzqAtr");
            clearDescription();
          }}
        />
      </div>
      <div className="dog-textfield">
        <span
          style={{
            alignSelf: "flex-start",
            marginBottom: "10px",
            marginLeft: "30px",
          }}
        >
          Parte del cuerpo: {partBody === "" && " -"}
          {partBody === "orejaIzq" && " Oreja izquierda"}
          {partBody === "orejaDer" && " Oreja derecha"}
          {partBody === "cabeza" && " Cabeza"}
          {partBody === "hocico" && " Hocico"}
          {partBody === "cuello" && " Cuello"}
          {partBody === "pecho" && " Pecho"}
          {partBody === "lomo" && " Lomo"}
          {partBody === "pataIzqAde" && " Pata izquierda adel."}
          {partBody === "pataIzqAtr" && " Pata izquierda atrás"}
          {partBody === "pataDerAde" && " Pata derecha adel."}
          {partBody === "pataDerAtr" && " Pata derecha atrás"}
          {partBody === "cola" && " Cola"}
        </span>

        <TextField
          id="outlined-multiline-static"
          label="Descripción"
          multiline
          rows={5}
          onChange={handleTextFieldChange}
          sx={{ width: "100%" }}
          helperText="max. 500 carácteres"
          inputProps={{ maxLength: 500 }}
          value={description}
        />
      </div>
    </div>
  );
};

export default MapDogResponsive;
