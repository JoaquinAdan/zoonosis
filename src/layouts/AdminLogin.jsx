import React, { useState } from "react";
import AdminForm from "../components/AdminForm"
import AdminFooter from "../components/AdminFooter";
import logoMuni from "../assets/logo-municipal.png";
import useBreakpoint from "../hooks/useBreakpoint";
import "../login.css"

const AdminLogin = () => {
  const [side, setSide] = useState(false);
  const matches = useBreakpoint("lg");
  const matchesMD = useBreakpoint("md")

  return (
    <div className="home-container">
      {matches && <div
        className="home"
        style={
          side
            ? { flex: 1.5, transition: ".5s ease" }
            : { flex: 2, transition: ".5s ease" }
        }
        onClick={() => setSide(false)}
      >
        <a href="https://www.campana.gob.ar/" style={{ cursor: "pointer" }}>
          <img
            className="logo"
            src={logoMuni}
            alt="logo municipalidad de campana"
          />
        </a>
      </div>} 
      <AdminForm setSide={setSide} />

      {matchesMD && <AdminFooter />}
    </div>
  );
};

export default AdminLogin;
