import { Box, Typography } from "@mui/material";

const ConfirmacionAsistencia = ({ phoneNumber }) => {
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
        gap: "2vh",
      }}
    >
      <Typography
        sx={{
          fontSize: "24px",
          width: "75%",
          fontWeight: "500",
          color: "#8C8C8C",
        }}
      >
        ¿Venis a festejar? ¡Confirmá tu asistencia!
      </Typography>

      <a
        href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
          "¡Hola! Quiero confirmar mi asistencia <3"
        )}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://res.cloudinary.com/dqqbiacuz/image/upload/v1737229066/icon-whatsapp_x5ztyg.png"
          alt="icon-whatsApp"
        />
      </a>
    </Box>
  );
};

export default ConfirmacionAsistencia;
