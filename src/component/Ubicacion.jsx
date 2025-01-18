import { Box, Button, Link, Typography } from '@mui/material'
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";


const Ubicacion = ({data, bounce}) => {
  return (
    <Box
    sx={{
      bgcolor: "#8C8C8C",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "60vh",
      justifyContent: "space-around",
      textAlign: "center",
    }}
  >
    <Box>
      <CalendarMonthTwoToneIcon
        sx={{
          color: "#FBF8F1",
          fontSize: "50px",
          fill: "none", // Elimina el relleno
          stroke: "#FBF8F1", // Define el color de las líneas
          strokeWidth: 0.5, // Controla el grosor de las líneas
        }}
      />
      <Typography
        sx={{ color: "#FBF8F1", fontSize: "24px", fontWeight: "500" }}
      >
        ¿Cuándo?
      </Typography>
      <Typography
        sx={{ color: "#FBF8F1", fontSize: "18px", fontWeight: "300" }}
      >
        Sábado 22 de Febrero de 2025
      </Typography>
      <Typography
        sx={{ color: "#FBF8F1", fontSize: "18px", fontWeight: "300" }}
      >
        ---
      </Typography>
      <Typography
        sx={{ color: "#FBF8F1", fontSize: "18px", fontWeight: "300" }}
      >
        21:00 HS
      </Typography>
    </Box>
    <Box sx={{ marginBottom: "2vh" }}>
      <LocationOnTwoToneIcon
        sx={{
          color: "#FBF8F1",
          fontSize: "50px",
          fill: "none",
          stroke: "#FBF8F1",
          strokeWidth: 0.5,
          animation: `${bounce} 2s infinite`,
        }}
      />
      <Typography
        sx={{ color: "#FBF8F1", fontSize: "24px", fontWeight: "500" }}
      >
        ¿Dónde?
      </Typography>
      <Typography
        sx={{ color: "#FBF8F1", fontSize: "18px", fontWeight: "300" }}
      >
        Salón Gran Milazzo
      </Typography>
      <Typography
        sx={{ color: "#FBF8F1", fontSize: "18px", fontWeight: "300" }}
      >
        ---
      </Typography>
      <Typography
        sx={{ color: "#FBF8F1", fontSize: "18px", fontWeight: "300" }}
      >
        Sarmiento 559
      </Typography>
      <Link
        href={data.location}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ textDecoration: "none" }}
      >
        <Button
          variant="contained"
          sx={{
            color: "#4F4F4F",
            border: "0.5px solid #4F4F4F",
            background: "#FBF8F1",
            marginTop: "0.5vh",
          }}
        >
          VER MAPA
        </Button>
      </Link>
    </Box>
  </Box>  )
}

export default Ubicacion