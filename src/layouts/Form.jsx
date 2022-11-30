import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button, } from "@mui/material";
import { Container } from "@mui/system";
import { ThemeProvider, createTheme } from "@mui/material";
import { formTheme } from "../utils/themes";
import MapDogResponsive from "../features/MapDogResponsive";
import InputAdornment from '@mui/material/InputAdornment';
import { GoHome, GoPerson, GoDeviceMobile, GoMail, GoCalendar } from "react-icons/go";
import { HiPhone, HiOfficeBuilding, HiOutlineClipboardList } from "react-icons/hi";
import { GiDogHouse, GiArchiveRegister, GiHealthCapsule, GiSittingDog, GiSniffingDog, GiHealthNormal } from "react-icons/gi";
import GeneroBtn from "../components/GeneroRadio";
import DetalleRadio from "../components/DetalleRadio";
import logoMuni from "../assets/logo-municipal.png";
import useBreakpoint from "../hooks/useBreakpoint";
import "../formStyles.css";


const FormZoo = () => {
  const matches = useBreakpoint("xl");
  const [value, setValue] = React.useState("Si");
  const [selectedFile, setSelectedFile] = useState(null);
  
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <ThemeProvider theme={createTheme(formTheme)}>
      <div className="home-container">
        {matches && (
          <div
            className="home"
            onClick={() => setSide(false)}
            style={{ flex: 1, position: "fixed",width: "600px", left: 0}}
          >
            <a href="https://www.campana.gob.ar/" style={{ cursor: "pointer" }}>
              <img
                className="logo"
                src={logoMuni}
                alt="logo municipalidad de campana"
              />
            </a>
          </div>
        )}
        <Container maxWidth="md" sx={matches && {ml: "650px"}}>
          <Box
            className="main-container"
            component="form"
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: "30ch",
                marginLeft: "6.5rem",
              },
              bgcolor: "#fafafa",
            }}
            noValidate
            autoComplete="off"
          >
            <div className="main-wrapper">
              <h1>Registro Municipal de Perros Potencialmente Peligrosos</h1>
              <div id="datos_propietario" className="datos_prop">
                
                {/* DATOS PROPIETARIO */}
                <h3>DATOS PROPIETARIO</h3>
                <p>Nombre y Apellido</p>
                
                <TextField
                  required
                  id="filled-required"
                  placeholder="Nombre"
                  variant="filled"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <GoPerson />
                      </InputAdornment>
                    ),
                  }}
                  />

                <TextField
                  required
                  id="filled-required"
                  placeholder="Apellido"
                  variant="filled"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                         <GoPerson />
                      </InputAdornment>
                    ),
                  }}
                />

                <p>Datos Generales</p>
                <TextField
                  required
                  label="Fecha Nacimiento"
                  id="filled-required"
                  variant="filled"
                  type="date"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <GoCalendar />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  id="filled-required"
                  placeholder="Domicilio"
                  variant="filled"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <GoHome />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  id="filled-required"
                  placeholder="Telefono"
                  variant="filled"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <GoDeviceMobile />
                      </InputAdornment>
                    ),
                  }}
                  />

                <TextField
                  id="filled-required"
                  placeholder="Telefono Alt."
                  variant="filled"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <HiPhone />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  id="filled-required"
                  placeholder="Email"
                  variant="filled"
                  type="mail"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <GoMail />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>

              <hr />
              {/* DATOS CRIADORES */}
              <div id="datos_criadores">
                <h3>CRIADORES (Completar en el caso que corresponda)</h3>
                <p>Nombre del criadero</p>
                <div>
                  <TextField
                    id="filled-required"
                    placeholder="Criadero"
                    variant="filled"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <GiDogHouse />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    id="filled-required"
                    placeholder="Registro FCA/Kennel/etc"
                    variant="filled"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <GiArchiveRegister />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <p>Registro</p>
                <div>
                  <TextField
                    id="filled-required"
                    placeholder="N° de registro"
                    variant="filled"
                  />
                </div>
              </div>
              <hr />

              {/* DATOS PERRO */}
              <div id="datos_perro">
                <h3>DATOS CANINO</h3>
                <TextField 
                  variant="filled" 
                  placeholder="Nombre"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <GiSittingDog />
                      </InputAdornment>
                    ),
                  }} 
                />
                <TextField 
                  variant="filled" 
                  placeholder="Edad"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <GiSniffingDog />
                      </InputAdornment>
                    ),
                  }} 
                />

                <div className="radio_btn_detalle">
                  <GeneroBtn />
                </div>
                <DetalleRadio />
                <br />
              </div>
              <hr />

              {/* CANVAS INTERACTIVO */}
              <div id="canvas_seleccion">
                <h5>Señas particulares (falta de miembros, cicatrices, etc) especificar en la silueta</h5>
                <MapDogResponsive size={(0.4).toString()}/>
              </div>

              <hr />

              {/* DETALLES SANITARIOS */}
              <h3>DETALLES SANITARIOS</h3>
              
              <div className="vacunas_combo">
                <FormControl id="castracion-btn">
                  <FormLabel>Castración</FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="Si"
                      control={<Radio />}
                      label="Si"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>

                <FormControl id="castracion-btn">
                  <FormLabel>Antirrabica</FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="Si"
                      control={<Radio />}
                      label="Si"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>

                <FormControl id="castracion-btn">
                  <FormLabel>Quintuple</FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="Si"
                      control={<Radio />}
                      label="Si"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
                
                <div >
                  <TextField
                    variant="filled"
                    placeholder="Veterinario actuante"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <GiHealthNormal />
                        </InputAdornment>
                      ),
                    }} 
                    />

                  <TextField
                    required
                    label="Fecha Adiestramiento"
                    type="date"
                    id="filled-required"
                    placeholder="Telefono Alt."
                    variant="filled"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <HiPhone />
                        </InputAdornment>
                      ),
                    }}
                    />
                </div>
              </div>

              <br />
              <p>Datos Veterinario</p>
              <TextField
                required
                id="filled-required"
                placeholder="Nombre"
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <GoPerson />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                required
                id="filled-required"
                placeholder="Apellido"
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <GoPerson />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                required
                id="filled-required"
                placeholder="Domicilio laboral"
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <GiHealthCapsule />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                required
                id="filled-required"
                placeholder="Telefono"
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <HiPhone />
                    </InputAdornment>
                  ),
                }}
              />

              <br />
              <h3 className="adjuntar_titulo">
                Adjuntar 6 fotografías de frente, trasera, laterales y 3/4
                perfiles derecho e izquierdo.
              </h3>
              <div className="file_uploader">
                <input
                  multiple
                  type="file"
                  value={selectedFile}
                  onChange={(e) => setSelectedFile(e.target.files[0])}
                />
              </div>
            </div>
            <br />
            <hr />

            {/* ADIESTRADOR */}
            <h3>ADIESTRADOR</h3>
            <TextField
              required
              id="filled-required"
              placeholder="Nombre"
              variant="filled"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <GoPerson />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              required
              id="filled-required"
              placeholder="Apellido"
              variant="filled" 
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <GoPerson />
                  </InputAdornment>
                ),
              }}
              />

            <p>Datos Generales</p>
            <TextField required
              id="filled-required"
              placeholder="Fecha Nacimiento"
              variant="filled"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <GoCalendar />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              required
              id="filled-required"
              placeholder="Domicilio"
              variant="filled"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <GoHome />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              required
              id="filled-required"
              placeholder="Telefono"
              variant="filled"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <GoDeviceMobile />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              required
              label="Fecha Adiestramiento"
              type="date"
              id="filled-required"
              placeholder="Telefono Alt."
              variant="filled"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <HiPhone />
                  </InputAdornment>
                ),
              }}
            />
            <br />
            <hr />

            {/* SEGURO */}
        <h3>SEGURO Resp. CIVIL</h3>
        <TextField required
          id="filled-required"
          placeholder="Aseguradora"
          variant="filled"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <HiOfficeBuilding />
              </InputAdornment>
            ),
          }}
        />

        <TextField required
          id="filled-required"
          placeholder="Agente Productor"
          variant="filled"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <GoPerson />
              </InputAdornment>
            ),
          }}
        />

        <TextField required
          id="filled-required"
          placeholder="Póliza N°"
          variant="filled"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <HiOutlineClipboardList />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          required
          label="Vencimiento Póliza"
          type="date"
          id="filled-required"
          placeholder="Telefono Alt."
          variant="filled"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <HiPhone />
              </InputAdornment>
            ),
          }}
        />


            {/* BOTONERA */}
            <div className="form_btn">
              <Button variant="contained">Cancelar</Button>
              <Button color="success" variant="contained">
                Enviar
              </Button>
            </div>
            <br />
            <div></div>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}


export default FormZoo