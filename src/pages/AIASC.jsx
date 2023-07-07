import React from "react";
import { Box, Typography } from "@mui/material";

const AIASC = () => {
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
          <Typography variant="h1">
            All india asteroid serach campaign
          </Typography>
        </Box>
      </>
    </div>
  );
};

export default AIASC;
