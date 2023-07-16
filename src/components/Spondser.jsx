import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import uits from "../assets/uits.png";
const Spondser = () => {
  return (
    <Stack width={"100vh"} height={"350px"}>
      <Box
        sx={{
          width: "300px",
          height: "250px",
          backgroundColor: "lightgrey",
          boxShadow: "1px 2px 7px 0px rgb(8, 8, 8)",
          position: "relative",
        }}
      >
        <Stack justifyContent={"center"} alignItems={"center"}>
          <img src={uits} alt="" style={{ width: "200px", height: "170px" }} />
          <Box
            sx={{
              content: "''",
              width: "150px",
              height: "100px",
              backgroundColor: "#ffcd00",
              borderRadius: "50%",
              position: "absolute",
              opacity: 0.5,
            }}
          ></Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Spondser;
