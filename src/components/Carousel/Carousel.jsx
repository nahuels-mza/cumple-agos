import React from "react";
import { Box, ImageList, ImageListItem } from "@mui/material";
import photo2 from "../../assets/lengua.jpeg";
import photo3 from "../../assets/buzo-rojo.jpeg";
import sillon from "../../assets/agosMainPic.jpg";
import pile from "../../assets/pile.jpg";
import hada2 from "../../assets/hada2.PNG";
import plaza2 from "../../assets/plaza2.jpg";
import montaña from "../../assets/montaña.jpg";
import escalera3 from "../../assets/escalera3.png";
import lentes from "../../assets/lentes.jpg";


import useCarouselStyles from "./Carousel.module";

const Carousel = () => {
  const classes = useCarouselStyles();

  const itemData = [

    {
      img: sillon,
      title: "sillon",
    },
    {
      img: photo3,
      title: "photo3",
    },

    {
      img: escalera3,
      title: "escalera3",
    },
    {
      img: pile,
      title: "pile",
      style: {objectPosition: '20%'}
    },

    {
      img: montaña,
      title: "montaña",
    },

    {
      img: hada2,
      title: "hada2",
      style:{objectPosition: 'top'}
    },
    {
      img: plaza2,
      title: "plaza2",
    },

    {
      img: photo2,
      title: "photo2",
    },


    {
      img: lentes,
      title: "lentes",
    },






  ];

  return (
    <Box component="section">
      <ImageList
        className={classes.image}
        // sx={{ width: 900 /* height: 450 */ }}
        rowHeight={200}
        variant='masonry'
        cols={3}
        gap={15}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=161&fit=crop&auto=format`}
              srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={item.style ? item.style : {}}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default Carousel;
