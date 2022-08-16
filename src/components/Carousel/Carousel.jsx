import React from "react";
import { Box, ImageList, ImageListItem } from "@mui/material";
import photo from "../../assets/photo1.png";
import photo1 from "../../assets/vestido-amarillo.jpeg";
import photo2 from "../../assets/lengua.jpeg";
import photo3 from "../../assets/buzo-rojo.jpeg";
import sillon from "../../assets/agosMainPic.jpg";
import pile from "../../assets/pile.jpg";
import drink from "../../assets/drink.jpg";
import face from "../../assets/face.jpg";
import lila from "../../assets/lila.png";
import useCarouselStyles from "./Carousel.module";

const Carousel = () => {
  const classes = useCarouselStyles();

  const itemData = [
    {
      img: sillon,
      title: "sillon",
    },
    {
      img: pile,
      title: "Burger",
    },
    {
      img: lila,
      title: "Camera",
    },
    {
      img: photo2,
      title: "Coffee",
    },
    {
      img: photo,
      title: "Hats",
    },
    {
      img: photo1,
      title: "Honey",
      author: "@arwinneil",
    },
    {
      img: photo3,
      title: "Basketball",
    },
    {
      img: drink,
      title: "Fern",
    },
    {
      img: face,
      title: "Mushrooms",
    },
  ];

  return (
    <Box component="section">
      <ImageList
        className={classes.image}
        sx={{ width: 500 /* height: 450 */ }}
        variant="woven"
        cols={3}
        // gap={5}
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
