import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Button from "../utils/Button";

const Number = () => {
  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={4}
      py={4}
      sx={{
        width: "100%",
        backgroundColor: "#ffcd00",
        opacity: "0.9",
        backgroundImage: "radial-gradient(#ffffff 0.9px, #ffcd00 0.9px)",
        backgroundSize: "18px 18px",
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        gap={5}
        justifyContent={"center"}
        flexWrap={"wrap"}
      >
        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          width={"14%"}
          color={"white"}
          gap={"10px"}
          sx={{
            width: 200,
          }}
        >
          <Typography fontSize={"60px"} fontWeight={"bold"}>
            22
          </Typography>
          <Typography
            variant="h6"
            fontSize={"18px"}
            fontWeight={"bold"}
            sx={{ width: 150 }}
          >
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
          sx={{
            width: 300,
          }}
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
          sx={{
            width: 300,
          }}
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
          sx={{
            width: 300,
          }}
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
            fontSize:"18px",
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
