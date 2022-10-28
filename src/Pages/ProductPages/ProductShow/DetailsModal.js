import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const DetailsModal = ({ open, handleClose, product }) => {
  const { description, category, rating } = product;
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Discription: {description}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          category: {category}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          rating: count -{rating.count}
          rate -{rating.rate}
        </Typography>
      </Box>
    </Modal>
  );
};

export default DetailsModal;
