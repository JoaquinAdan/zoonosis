import React from "react";
import useBreakpoint from "../hooks/useBreakpoint";
import AdminMapDogResponsive from "../features/AdminMapDogResponsive";
import AdminAdiestrador from "./ficha/AdminAdiestrador";
import AdminCanino from "./ficha/AdminCanino";
import AdminCriador from "./ficha/AdminCriador";
import AdminDetalleSanitario from "./ficha/AdminDetalleSanitario";
import AdminPropietario from "./ficha/AdminPropietario";
import AdminSeguro from "./ficha/AdminSeguro";
import AdminVeterinario from "./ficha/AdminVeterinario";

const AdminGridDataDogs = ({ dataDog, isLoading }) => {
  const matchesMD = useBreakpoint("md");
  return (
    <>
      <div style={{display: "flex", justifyContent: "center", width: "100%"}}>
        <AdminMapDogResponsive size={(0.5).toString()} dataDog={dataDog?.observaciones}/>
      </div>
      <div
        className="data-dog-container"
        style={
          matchesMD
            ? { gridTemplateColumns: "repeat(2, 1fr)" }
            : { gridTemplateColumns: "repeat(1, 1fr)" }
        }
      >
        <AdminAdiestrador dataDog={dataDog} isLoading={isLoading} />
        <AdminCanino dataDog={dataDog} isLoading={isLoading} />
        <AdminCriador dataDog={dataDog} isLoading={isLoading} />
        <AdminDetalleSanitario dataDog={dataDog} isLoading={isLoading} />
        <AdminPropietario dataDog={dataDog} isLoading={isLoading} />
        <AdminSeguro dataDog={dataDog} isLoading={isLoading} />
        <AdminVeterinario dataDog={dataDog} isLoading={isLoading} />
      </div>
    </>
  );
};

export default AdminGridDataDogs;
