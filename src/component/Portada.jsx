import { Box, Typography } from '@mui/material'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Portada = ({data, bounce}) => {
    // Definimos la animación de rebote

  return (
    <Box
            sx={{
              width: "100%",
              height: "100vh",
              backgroundImage: `url(${data.imgCover})`,
              backgroundSize: "cover",
              backgroundPosition: "",
              backgroundRepeat: "no-repeat",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "3vh",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Alpha Brights",
                  fontSize: "65px",
                  color: "#FBF8F1",
                }}
              >
                Francesca
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: "22px",
                  marginTop: "-2.5vh",
                  color: "#FBF8F1",
                }}
              >
                | XV años |
              </Typography>
            </Box>
              {/* Flecha animada */}
              <KeyboardArrowDownIcon
              sx={{
                color: "white",
                fontSize: 50,
                marginBottom: "3vh",
                animation: `${bounce} 2s infinite`,
              }}
            />
          </Box>
          
  )
}

export default Portada