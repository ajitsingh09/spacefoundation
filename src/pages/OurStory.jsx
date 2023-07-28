import React from "react";
import { Box, Typography, Stack } from "@mui/material";

const Ourstory = () => {
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
          <h2>Home/{location.pathname.split("/")[1]}</h2>
        </Box>
      </>
    </div>
  );
};

export default Ourstory;
