import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { sponser } from "../../dummydata";

const Spondser = () => {
  return (
    <Stack
      width={"100%"}
      height={"350px"}
      direction={"row"}
      gap={"30px"}
      justifyContent={"center"}
      paddingTop={"10%"}
      sx={{ backgroundColor: "white" }}
    >
      {sponser.map((val, index) => (
        <Box
        key={index}
          sx={{
            width: "270px",
            height: "200px",
            backgroundColor: "#EEEEEE",
            position: "relative",
          }}
        >
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            position={"relative"}
            gap={"10px"}
          >
            <img
              src={val.cover}
              alt=""
              style={{ width: "126px", height: "116px", paddingTop: "8%" }}
            />
            <Box
              sx={{
                content: "''",
                backgroundColor: "rgba(255, 205, 0, 0.7)",
                width: "58px",
                height: "58px",
                position: "absolute",
                borderRadius: "50px",
                left: "47px",
                bottom: "35px",

                zIndex: "0",
              }}
            ></Box>
            <Box>
              <Typography variant="h5">{val.Name}</Typography>
            </Box>
          </Stack>
        </Box>
      ))}
    </Stack>
  );
};

export default Spondser;
