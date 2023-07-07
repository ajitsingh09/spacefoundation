import { Box, Typography } from "@mui/material";
import React from "react";

const OurStory = () => {
  return (
    <>
      <Box
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          width: "100%",
          height: "100vh",
          color: "white",
          backgroundColor: "black",
        }}
      >
        <Typography variant="h1">Our Story</Typography>
      </Box>
    </>
  );
};

export default OurStory;
