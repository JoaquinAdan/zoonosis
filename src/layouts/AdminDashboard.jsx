import React, { useState, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import AdminNavBarContainer from "../components/AdminNavBarContainer";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-community/styles/ag-theme-material.css";
import "../dashboard.css";
import { AG_GRID_LOCALE_ES } from "../utils/locale.es";
import { useNavigate } from "react-router-dom";
import pataIcon from "../assets/paw.svg";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [rowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
  ]);

  const [columnDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
    {
      field: "masInformacion",
      headerName: "Más información",
      cellRenderer: (p) => (
        <div
          className="button-to-data"
          onClick={() => navigate("/admin/zoonosis/id")}
        >
          <img
            style={{ width: "20px" }}
            src={pataIcon}
            alt="icono de pata de perro"
          />
          Ver al perro
        </div>
      ),
    },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      resizable: true,
      suppressMovable: true,
      filter: true,
      flex: 1,
      sortable: true,
      minWidth: 130,
    };
  }, []);


  const localeText = useMemo(() => {
    return AG_GRID_LOCALE_ES;
  }, []);

  return (
    <AdminNavBarContainer>
      <div
        style={{
          height: "100vh",
          display: "flex",
          placeContent: "center",
          marginTop: "20px",
        }}
      >
        <div
          className="ag-theme-material"
          style={{
            height: 400,
            width: "98%",
            border: "1px solid #e2e2e2",
          }}
        >
          <AgGridReact
            animateRows={true}
            domLayout="autoHeight"
            // pagination={true}
            // paginationPageSize={12}
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            localeText={localeText}
            rowSelection="multiple"
          ></AgGridReact>
        </div>
      </div>
    </AdminNavBarContainer>
  );
};

export default AdminDashboard;
