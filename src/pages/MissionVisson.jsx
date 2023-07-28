import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import Eventshero from "../components/Home/Parts/Eventshero";

const MissionVisson = () => {
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
          <Typography variant="h1">mission and vission</Typography>
        </Box>
        <Eventshero/>
      </>
    </div>
  );
};

export default MissionVisson;
