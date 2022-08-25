import React from "react";
import { Box, ImageList, ImageListItem } from "@mui/material";
import photo from "../../assets/photo1.png";
import photo1 from "../../assets/vestido-amarillo.jpeg";
import photo2 from "../../assets/lengua.jpeg";
import photo3 from "../../assets/buzo-rojo.jpeg";
import sillon from "../../assets/agosMainPic.jpg";
import pile from "../../assets/pile.jpg";
import drink from "../../assets/drink.jpg";
import face from "../../assets/IMG_4085.jpg";
import lila from "../../assets/lila.png";
import blackwhite from "../../assets/IMG_3429.jpg";
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
      title: "pile",
    },
    {
      img: lila,
      title: "lila",
    },
    {
      img: photo2,
      title: "photo2",
    },
    {
      img: photo,
      title: "photo",
    },
    {
      img: photo1,
      title: "photo1",
    },
    {
      img: photo3,
      title: "photo3",
    },
    {
      img: drink,
      title: "drink",
    },
    {
      img: face,
      title: "face",
    },
    {
      img: blackwhite,
      title: "blackwhite",
    },
  ];

  return (
    <Box component="section">
      <ImageList
        className={classes.image}
        sx={{ width: 900 /* height: 450 */ }}
        variant='masonry'
        cols={4}
        gap={15}
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
