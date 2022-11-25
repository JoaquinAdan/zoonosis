import React from "react";
import AdminFormInputs from "./AdminFormInputs";
import AdminFormText from "./AdminFormText";
import useBreakpoint from "../hooks/useBreakpoint"

const AdminForm = ({ setSide }) => {
  const matches = useBreakpoint("sm")
  return (
    <div className="container" onClick={() => setSide(true)}>
      <div className={matches ? "form-container": "form-container-mobile"}>
        <AdminFormText />
        <AdminFormInputs />
      </div>
    </div>
  );
};

export default AdminForm;
