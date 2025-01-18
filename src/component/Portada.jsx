import { Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Portada = ({ data, bounce }) => {
  const handleScroll = () => {
    const fraseInicial = document.getElementById("frase-inicial");
    if (fraseInicial) {
      fraseInicial.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <img
        src={data.imgCover}
        alt="Portada"
        style={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
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
          zIndex: 1,
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
            marginBottom: "10vh",
            animation: `${bounce} 2s infinite`,
            cursor: "pointer", // Hace que se vea como un botón
          }}
          onClick={handleScroll} // Llama a la función para hacer scroll
        />
      </Box>
    </Box>
  );
};

export default Portada;
