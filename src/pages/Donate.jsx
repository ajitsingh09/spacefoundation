import React from "react";
import { Box, Typography } from "@mui/material";
import Donatenow from "../components/Home/Parts/Donatenow";

const Donate = () => {
  return ( 
    <div>
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
          <Typography variant="h1">Donate Now</Typography>
        </Box>
        <Donatenow />
      </>
    </div>
  );
};

export default Donate;
