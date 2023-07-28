import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import img from "../../assets/img.jpg";
import PlayCircleTwoToneIcon from "@mui/icons-material/PlayCircleTwoTone";

const AboutSection = () => {
  return (
    <Stack sx={{ backgroundColor: "white" }}>
      <Stack
        direction="row"
        sx={{
          width: "100%",
          height: "fit-content",
          paddingTop: "5%",
        }}
      >
        <Box
          sx={{
            width: "80%",
            height: "500px",
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
          }}
        ></Box>
        <Box sx={{ padding: "10px 0 0 40px" }}>
          <Typography
            variant="H5"
            fontWeight="bold"
            color="#ffcd00"
            fontSize="18px"
          >
            ABOUT SPACE
          </Typography>
          <Typography
            variant="h3"
            paddingTop="40PX"
            fontSize="45px"
            fontWeight="500"
          >
            Our mission extends beyond the Charity and into the communities that
            we serve.
          </Typography>
          <Typography
            sx={{
              content: "''",
              width: "70px",
              height: "3px",
              backgroundColor: "#ffcd00",
              transform: "translate(0, 20px)",
            }}
          ></Typography>
          <Typography variant="h6" paddingTop="40PX">
            We are Space foundation / non-profit/ fundraising/ NGO
            organizations. Our Space Foundation activities are taken place
            around the world,let contribute to them with us by your hand to be a
            better life.
          </Typography>
        </Box>
      </Stack>
      <Stack direction="row" sx={{ width: "100%", height: "fit-content" }}>
        <Box
          sx={{
            width: "86%",
            height: "350px",
            backgroundColor: "white",
            position: "relative",
            left: "177px",
            transform: "translate(0, -80px)",
            display: "flex",
          }}
        >
          <Typography padding="50px 0 0 70px">
            Space Foundation founded 25 years ago as the American Institute of
            Philanthropy (AIP), is America’s most independent, assertive charity
            watchdog . CharityWatch does not merely repeat what a charity
            reports using simplistic or automated formulas.
            <br></br>
            <br></br>
            We dive deep to let you know how efficiently a charity will use your
            donation to fund the programs you want to support. CharityWatch
            exposes nonprofit abuses and advocates
          </Typography>
          <img
            src={img}
            alt="img"
            style={{ width: "370px", height: "300px" }}
          />
        </Box>
        <Box>
          <PlayCircleTwoToneIcon
            sx={{
              transform: "translate(-70px,20px)",
              fontSize: "7rem",
              color: "grey",
              cursor: "pointer",
            }}
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default AboutSection;
