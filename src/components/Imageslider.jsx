import React, { useEffect, useRef } from "react";
import { Button, Typography, Grid } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = () => {
  const cards = [
    { id: 1, title: "Card 1", content: "Content 1" },
    { id: 2, title: "Card 2", content: "Content 2" },
    { id: 3, title: "Card 3", content: "Content 3" },
    { id: 4, title: "Card 4", content: "Content 4" },
    { id: 5, title: "Card 5", content: "Content 5" },
    { id: 6, title: "Card 6", content: "Content 6" },
  ];
  const carouselRef = useRef(null);

  const handleClick = (id) => {
    // Handle click event here, e.g., navigate to a new page or perform an action
    console.log(`Clicked on card ${id}`);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.slideNext();
      }
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        interval={2000}
        autoPlay
        infiniteLoop
        ref={carouselRef}
      >
        <div>
          <Grid container spacing={2}>
            {cards.slice(0, 3).map((card) => (
              <Grid item key={card.id} xs={4}>
                <div className="card">
                  <Typography variant="h6">{card.title}</Typography>
                  <Typography variant="body1">{card.content}</Typography>
                  <Button
                    variant="contained"
                    onClick={() => handleClick(card.id)}
                  >
                    View Details
                  </Button>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
        <div>
          <Grid container spacing={2}>
            {cards.slice(3).map((card) => (
              <Grid item key={card.id} xs={4}>
                <div className="card">
                  <Typography variant="h6">{card.title}</Typography>
                  <Typography variant="body1">{card.content}</Typography>
                  <Button
                    variant="contained"
                    onClick={() => handleClick(card.id)}
                  >
                    View Details
                  </Button>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </Carousel>
    </div>
  );
};

export default ImageSlider;
