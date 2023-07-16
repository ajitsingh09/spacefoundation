import React from "react";
import { Box, Typography } from "@mui/material";
import MyComponent from "../components/Imagehover";

const SGVPK = () => {
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
            SPACE gyaan vigyan prachar kendra
          </Typography>
          <MyComponent/>
        </Box>
      </>
    </div>
  );
};

export default SGVPK;
