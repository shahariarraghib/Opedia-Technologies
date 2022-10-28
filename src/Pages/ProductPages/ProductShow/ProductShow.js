import { Box, Grid, Container, Button } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SingleProduct from "./SingleProduct";
import CircularProgress from "@mui/material/CircularProgress";
const ProductShow = () => {
  const [products, setProduct] = useState([]);
  const [show, setShow] = useState(6);
  const [lodding, setLooding] = useState(true);
  const handleClick = () => {
    setShow(show + 6);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLooding(false);
      });
  }, []);
  const numberOfItems = show ? show : 0;
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 1, md: 1 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {products.slice(0, numberOfItems).map((product) => (
            <Grid item xs={12} sm={4} md={4}>
              <SingleProduct key={product.id} product={product}></SingleProduct>
            </Grid>
          ))}
        </Grid>
      </Box>

      {lodding ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <></>
      )}

      {show < products.length ? (
        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <Button onClick={() => handleClick()}>See more</Button>
        </Box>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default ProductShow;
