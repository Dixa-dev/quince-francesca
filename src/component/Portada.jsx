import { Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Portada = ({ data, bounce }) => {
  return (
    <Box
  sx={{
    width: "100vw",
    height: "100vh",
    position: "relative",
    overflow: "hidden", // Evita que se vea algún borde inesperado
  }}
>
  <img
    src={data.imgCover}
    alt="Portada"
    style={{
      width: "100vw",
      height: "100vh",
      objectFit: "cover", // Ajusta la imagen sin dejar bordes blancos
      position: "absolute",
      top: 0,
      left: 0,
    }}
  />
  <Box
    sx={{
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-end",
      height: "100%",
      zIndex: 1, // Para que el texto no quede detrás de la imagen
    }}
  >
    <Typography
      sx={{
        fontFamily: "Alpha Brights",
        fontSize: "50px",
        color: "#FBF8F1",
      }}
    >
      Francesca
    </Typography>
    <Typography
      sx={{
        fontFamily: "Montserrat",
        fontSize: "20px",
        marginTop: "-2vh",
        color: "#FBF8F1",
      }}
    >
      | XV años |
    </Typography>
    <KeyboardArrowDownIcon
      sx={{
        color: "white",
        fontSize: 50,
        marginBottom: "3vh",
        animation: `${bounce} 2s infinite`,
      }}
    />
  </Box>
</Box>

  );
};

export default Portada;
