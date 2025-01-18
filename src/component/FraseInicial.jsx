import { Box, Typography } from "@mui/material";

const FraseInicial = () => {
  return (
    <Box
      id="frase-inicial"
      sx={{
        height: "30vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "#FBF8F1",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{ fontFamily: "Montserrat", width: "85%", fontSize: "20px", color: "#8C8C8C" }}
      >
        ¡Te espero para compartir esta noche única, inolvidable y mágica!
      </Typography>
      <Typography
        sx={{ fontSize: "30px", color: "#4F4F4F", letterSpacing: "15px" }}
      >
        •••
      </Typography>
    </Box>
  );
};

export default FraseInicial;
