import { Box, Typography } from "@mui/material"

const Footer = () => {
  return (
    <Box
     sx={{bgcolor:"#8C8C8C", height:"15vh", display:"flex", flexDirection:"column", alignItems:"center",justifyContent:"center"}}
     
    >
    <Typography
                sx={{
                  fontFamily: "Alpha Brights",
                  fontSize: "26px",
                  color: "#FBF8F1",
                  fontWeight:"100"
                }}
              >
            Te espero para festejar juntos
              </Typography>
              <Typography  sx={{
                  fontFamily: "Alpha Brights",
                  fontSize: "26px",
                  color: "#FBF8F1",
                  fontWeight:"100"
                }}>¡ Gracias !</Typography>


    </Box>
  )
}

export default Footer