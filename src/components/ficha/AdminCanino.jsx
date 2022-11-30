import React from "react";
import { Box } from "@mui/material";
import AdminDatum from "./components/AdminDatum";

const grid = {
  display: "grid",
  gridTemplateColumns: "50% 50%",
  gap: "20px",
  alignItems: "start",
  mb: 5,
  width: "95%",
};

const AdminCanino = ({ dataDog, isLoading }) => {
  console.log(dataDog)
  return (
    <div className="data-dog">
      <h3 style={{ textTransform: "uppercase", color: "#4428a2",
          alignSelf: "flex-start", paddingLeft: "2.5%"}}>Canino:</h3>
      <Box sx={grid}>
        <AdminDatum
          title="Nombre:"
          text={dataDog?.canino?.nombre}
          isLoading={isLoading}
        />
        <AdminDatum
          title="Edad:"
          text={dataDog?.canino?.edad}
          isLoading={isLoading}
        />
        <AdminDatum
          title="Estado:"
          text={
            dataDog?.estado === 0
              ? "Pendiente"
              : dataDog?.estado === 1
              ? "Aceptado"
              : dataDog?.estado === 2 && "Rechazado"
          }
          isLoading={isLoading}
        />
        <AdminDatum
          title="Color del pelo:"
          text={dataDog?.canino?.pelajeColor}
          isLoading={isLoading}
        />
        <AdminDatum
          title="Tamaño del pelo:"
          text={dataDog?.canino?.pelajeTamaño}
          isLoading={isLoading}
        />
        <AdminDatum
          title="Raza:"
          text={dataDog?.canino?.raza}
          isLoading={isLoading}
        />
        <AdminDatum
          title="Tamaño:"
          text={dataDog?.canino?.tamaño}
          isLoading={isLoading}
        />
        <AdminDatum
          title="Sexo:"
          text={
            dataDog?.canino?.sexo === false
              ? "Perro"
              : dataDog?.canino?.sexo === true && "Perra"
          }
          isLoading={isLoading}
        />
      </Box>
    </div>
  );
};

export default AdminCanino;
