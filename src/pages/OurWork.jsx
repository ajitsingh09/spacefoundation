import React from "react";
import { Box, Typography } from "@mui/material";

const OurWork = () => {
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
        <Typography variant="h1">Our Work</Typography>
      </Box>
    </>
  );
};

export default OurWork;
