import { Box, Typography } from '@mui/material'
import { Icon } from "@iconify/react";

const DressCode = () => {
  return (
    <Box
            sx={{
              bgcolor: "#FBF8F1",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "30vh",
              justifyContent: "center",
              textAlign: "center",
              gap:"1.5vh"
            }}
          >
            <Box
              sx={{
                width: "50%", // Esto hace que la línea ocupe el 25% del contenedor
                height: "2px", // Grosor de la línea
                backgroundColor: "#8C8C8C", // Color de la línea
                margin: "10px 0", // Márgenes si los deseas
              }}
            />
            <Typography sx={{ color:"#8C8C8C" ,fontSize: "24px", fontWeight: "500" }}>
              DRESS CODE
            </Typography>
            <img src='src\img\icon-hanger.png' alt='icon-hanger'/>
            <Typography sx={{ color:"#8C8C8C", fontSize: "24px", fontWeight: "200" }}>
              ELEGANTE{" "}
            </Typography>
            <Box
              sx={{
                width: "50%", // Esto hace que la línea ocupe el 25% del contenedor
                height: "2px", // Grosor de la línea
                backgroundColor: "#8C8C8C", // Color de la línea
                margin: "10px 0", // Márgenes si los deseas
              }}
            />
          </Box>
  )
}

export default DressCode