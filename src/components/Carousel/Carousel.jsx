import React from "react";
import { Box, ImageList, ImageListItem } from "@mui/material";
import photo from "../../assets/photo1.png";
import photo1 from "../../assets/vestido-amarillo.jpeg";
import photo2 from "../../assets/lengua.jpeg";
import photo3 from "../../assets/buzo-rojo.jpeg";
// import useCarouselStyles from "./Carousel.module";

const Carousel = () => {
  // const classes = useCarouselStyles();

  const itemData = [
    {
      img: photo,
      title: "Breakfast",
      rows: 2,
      cols: 2,
    },
    {
      img: photo1,
      title: "Burger",
    },
    {
      img: photo2,
      title: "Camera",
    },
    {
      img: photo3,
      title: "Coffee",
      cols: 2,
    },
    {
      img: photo,
      title: "Hats",
      cols: 2,
    },
    {
      img: photo1,
      title: "Honey",
      author: "@arwinneil",
      rows: 2,
      cols: 2,
    },
    {
      img: photo3,
      title: "Basketball",
    },
    {
      img: photo,
      title: "Fern",
    },
    {
      img: photo1,
      title: "Mushrooms",
      cols: 2,
    },
  ];

  return (
    <Box component="section">
      <ImageList
        sx={{ width: 500 /* height: 450 */ }}
        variant="woven"
        cols={3}
        gap={5}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=161&fit=crop&auto=format`}
              srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default Carousel;
