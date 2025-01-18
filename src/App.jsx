  import { useState } from "react";
  import { Box, keyframes } from "@mui/material";
  import portada from "./img/Portada.jpeg";
  import { ThemeProvider } from "@mui/material/styles";
  import theme from "./theme"; // Importa el theme
  import Countdown from "./component/Countdwn";
  import Portada from "./component/Portada";
  import FraseInicial from "./component/FraseInicial";
  import Ubicacion from "./component/Ubicacion";
  import DressCode from "./component/DressCode";
  import ConfirmacionAsistencia from "./component/ConfirmacionAsistencia";
  import Regalos from "./component/Regalos";
  import Cancion from "./component/Cancion";
  import Footer from "./component/Footer";

  const db = {
    name: "Francesca",
    date: "2025-02-22T21:00:00",
    location: "https://maps.app.goo.gl/bJnGpusFtJhVEJ9aA",
    imgCover: portada,
    imgBank: "src/img/CBU.png",
    phoneNumber: "5492216072514",
  };
  const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
  `;

  function App() {
    const [data] = useState(db);
    

    return (
      <>
       
        {/* Aplica el theme */}
        <ThemeProvider theme={theme}>
          {" "}
          {/*Portada*/}
          <Portada data={data} bounce={bounce} />
          {/*Frase inicial */}
          <FraseInicial />
          {/*Locacion */}
          <Ubicacion data={data} bounce={bounce} />
          {/*Dress code */}
          <DressCode />
          {/*Contador*/}
          <Countdown targetDate={data.date} />
          <ConfirmacionAsistencia phoneNumber={data.phoneNumber} />
          {/*foto - 1*/}
          <Box
            sx={{
              height: "80vh",
              display: "flex",
              justifyContent: "center",
              bgcolor: "#FBF8F1",
            }}
          >
            <Box>
              <img src="https://res.cloudinary.com/dqqbiacuz/image/upload/v1737229067/img2_r1hwxv.png" />
            </Box>
          </Box>
          {/*regalos*/}
          <Regalos imgCbu={data.imgBank} />
          {/*canciones*/}
          <Cancion />
          {/*foto - 2*/}
          <Box
            sx={{
              height: "40vh",
              display: "flex",
              justifyContent: "center",
              bgcolor: "#FBF8F1",
              alignItems:"center"
            }}
            
          >
            <Box>
              <img src="https://res.cloudinary.com/dqqbiacuz/image/upload/v1737229067/img3_ij5dqk.png" />
            </Box>
          </Box>
          {/* footer*/ }
          <Footer/>

        </ThemeProvider>
        
      </>
    );
  }

  export default App;
