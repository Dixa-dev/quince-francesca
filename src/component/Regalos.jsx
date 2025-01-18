import { useState } from "react";
import { Box, Button, Typography, Modal } from "@mui/material";

const Regalos = ({ imgCbu }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        bgcolor: "#8C8C8C",
        height: "70vh",
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: "1.5vh",
        }}
      >
        <Typography
          sx={{ fontSize: "24px", fontWeight: "500", color: "#FBF8F1" }}
        >
          REGALOS
        </Typography>
        <img src="https://res.cloudinary.com/dqqbiacuz/image/upload/v1737229067/Song_woyeh6.png" alt="gift" />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.8vh",
            width: "75%",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "95%",
              height: "2px",
              backgroundColor: "#FBF8F1",
              margin: "10px 0",
            }}
          />
          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "300",
                color: "#FBF8F1",
                fontStyle: "normal",
                marginBottom: "2.5vh",
              }}
            >
              Lo más importante para mí es que puedas ser parte de esta noche especial
            </Typography>
            <Typography
              sx={{ fontSize: "20px", fontWeight: "300", color: "#FBF8F1" }}
            >
              En el caso que desees hacerme un regalo, te dejo mis datos
            </Typography>
          </Box>
          <Box
            sx={{
              width: "95%",
              height: "2px",
              backgroundColor: "#FBF8F1",
              margin: "10px 0",
            }}
          />
        </Box>

        <Button
          variant="contained"
          sx={{
            color: "#4F4F4F",
            background: "#FBF8F1",
            marginTop: "0.5vh",
            fontSize:"12px",fontWeight:"500"
          }}
          onClick={handleOpen}
        >
          DATOS
        </Button>
      </Box>

      {/* Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90vw",
            height: "90vh",
            bgcolor: "white o",
            p: 2,
            boxShadow: 24,
            borderRadius: "10px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
         
          <img src={imgCbu} alt="CBU" style={{ width: "100%", maxWidth: "300px" }} />
          <Button
            onClick={handleClose}
            sx={{
              marginTop: "10px",
              background: "#8C8C8C",
              color: "white",
              ":hover": { background: "#6C6C6C" },
            }}
          >
            Cerrar
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Regalos;
