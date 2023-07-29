import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Button from "../utils/Button";

const Number = () => {
  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={"20px"}
      sx={{
        width: "100%",
        height: "200px",
        backgroundColor: "#ffcd00",
        opacity: "0.9",
        backgroundImage: "radial-gradient(#ffffff 0.9px, #ffcd00 0.9px)",
        backgroundSize: "18px 18px",
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        gap={"50px"}
        justifyContent={"center"}
      >
        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          width={"14%"}
          color={"white"}
          gap={"10px"}
        >
          <Typography fontSize={"60px"} fontWeight={"bold"}>
            22
          </Typography>
          <Typography variant="h6" fontSize={"18px"} fontWeight={"bold"}>
            Years of Excellence
          </Typography>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          width={"22%"}
          color={"white"}
          gap={"10px"}
        >
          <Typography variant="h3" fontSize={"60px"} fontWeight={"bold"}>
            40000+
          </Typography>
          <Typography variant="h7" fontWeight={"bold"}>
            Plastic Bottles Reused
          </Typography>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          width={"19%"}
          color={"white"}
          gap={"10px"}
        >
          <Typography variant="h3" fontSize={"60px"} fontWeight={"bold"}>
            1500+
          </Typography>
          <Typography variant="h7" fontWeight={"bold"}>
            Incredible Volunteer
          </Typography>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          width={"19%"}
          color={"white"}
          gap={"10px"}
        >
          <Typography variant="h3" fontSize={"60px"} fontWeight={"bold"}>
            1000+
          </Typography>
          <Typography variant="h7" fontWeight={"bold"}>
            Foundation Initiatives
          </Typography>
        </Box>
      </Stack>
      <Box>
        <Button
          variant="contained"
          sx={{
            width: "150px",
            color: "#ffcd00",
            backgroundColor: "white",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "white", color: "#ffcc00" },
          }}
        >
          Donate Now
        </Button>
      </Box>
    </Stack>
  );
};

export default Number;
