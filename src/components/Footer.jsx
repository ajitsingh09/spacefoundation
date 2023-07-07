import { Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        widht: "100%",
        color: "white",
        height: 300,
        backgroundColor: "#5b5151",
      }}
    >
      <Typography variant="h2">Footer</Typography>
    </Box>
  );
};

export default Footer;
