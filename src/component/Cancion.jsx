import { Box, Button, Link, Typography } from "@mui/material";

const Cancion = () => {
  return (
    <Box
      sx={{
        bgcolor: "#FBF8F1",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "40vh",
        justifyContent: "center",
        textAlign: "center",
        gap:"2vh"
      }}
    >
      <img src="https://res.cloudinary.com/dqqbiacuz/image/upload/v1737229067/Song_woyeh6.png" alt="song" />
      <Box sx={{ width: "85%" }}>
        <Typography
          sx={{ fontSize: "20px", fontWeight: "300", fontStyle: "normal" }}
        >
          ¿Cuál es la canción que no debe faltar en la PlayList de la fiesta?
        </Typography>
      </Box>
      <Link
      href={"https://docs.google.com/forms/d/1CtLA3aXfxQJyHO-Q7ogSmS1nmq4T8Nk6CKNGym91_K0/edit"}
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
          }}
        >
          SUGERIR CANCIÓN
        </Button>
      </Link>
    </Box>
  );
};

export default Cancion;
