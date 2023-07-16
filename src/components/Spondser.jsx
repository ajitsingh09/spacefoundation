import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { sponser } from "../dummydata";

const Spondser = () => {
  return (
    <Stack
      width={"100%"}
      height={"350px"}
      direction={"row"}
      gap={"30px"}
      justifyContent={"center"}
      paddingTop={"10%"}
    >
      {sponser.map((val) => (
        <Box
          sx={{
            width: "270px",
            height: "200px",
            backgroundColor: "#EEEEEE",
            position: "relative",
          }}
        >
          <Stack justifyContent={"center"} alignItems={"center"}>
            <img
              src={val.cover}
              alt=""
              style={{ width: "200px", height: "170px" }}
            />
          </Stack>
        </Box>
      ))}
    </Stack>
  );
};

export default Spondser;
