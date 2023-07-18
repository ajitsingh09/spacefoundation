import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import Imageslider from "../components/Imageslider";
import Hovercard from "../components/Hovercard";

const OurImpact = () => {
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
          <Typography variant="h1">Impact Stories</Typography>
        </Box>
        {/* <Imageslider/> */}
        <Stack direction={"row"}>
          <Hovercard />
        </Stack>
      </>
    </div>
  );
};

export default OurImpact;
