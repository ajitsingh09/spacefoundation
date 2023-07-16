import React from "react";
import { Stack, Typography } from "@mui/material";
import DarkButton from "../components/utils/DarkButton";
import Button from "../components/utils/Button";
const HeroSection = ({ data }) => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh", pb: 5 }}
      key={data.title}
    >
      <Typography
        variant="h6"
        color={"secondary"}
        fontFamily={"UbuntuMedium"}
        pb={3}
        className="fade-in-animation"
      >
        {data.title}
      </Typography>
      <Typography
        variant="h1"
        fontFamily={"UbuntuMedium"}
        sx={{ color: "white" }}
        className="fade-in-animation"
      >
        {data.subtitle}
      </Typography>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ height: 200 }}
      >
        <Typography
          variant="h6"
          className="fade-in-animation"
          pt={4}
          sx={{ color: "white" }}
        >
          {data.description1}
        </Typography>
        <Typography
          variant="h6"
          className="fade-in-animation"
          pb={4}
          sx={{ color: "white" }}
        >
          {data.description2}
        </Typography>
      </Stack>
      <Stack pt={2} className="fade-in-animation" flexDirection={"row"} gap={4}>
        <DarkButton
          sx={{
            width: 250,
            height: 75,
            outlineColor: "#ffcd00",
            fontSize: 20,
          }}
        >
          {data.button1}
        </DarkButton>
        <Button
          sx={{
            width: 250,
            height: 75,
            outlineColor: "#ffcd00",
            fontSize: 20,
          }}
        >
          {data.button2}
        </Button>
      </Stack>
    </Stack>
  );
};

export default HeroSection;
