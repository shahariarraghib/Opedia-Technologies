import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Container,
} from "@mui/material";

import React from "react";
import DetailsModal from "./DetailsModal";

const SingleProduct = ({ product }) => {
  console.log(product);
  const { title, image, price } = product;

  //   console.log(product);
  // modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Container sx={{ mt: 1, mb: 5 }}>
      <Card
        sx={{ maxWidth: 500, borderRadius: 5 }}
        style={{
          height: "400px",
        }}
      >
        <CardMedia
          height="200"
          component="img"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price {price}
          </Typography>
        </CardContent>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={handleOpen} size="small">
            Show Details
          </Button>
        </Box>
      </Card>

      <DetailsModal
        product={product}
        open={open}
        handleClose={handleClose}
      ></DetailsModal>
    </Container>
  );
};

export default SingleProduct;
