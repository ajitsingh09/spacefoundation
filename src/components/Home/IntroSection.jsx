import React from "react";
import { Stack, Typography, Box, Button } from "@mui/material";
import VideoPlayer from "./Parts/VideoPlayer";
import img from "../../assets/img.jpg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const IntroSection = () => {
  return (
    <Stack
      direction="row"
      sx={{
        backgroundColor: "white",
      }}
    >
      <Stack sx={{ width: "60%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <VideoPlayer />
          <Typography variant="h7" sx={{ padding: "10px 0 0 40px " }}>
            Growing up in poverty, kids face tough challenges: hunger and
            malnutrition, limited access to education and medical services, gang
            violence, social discrimination and isolation. But it doesn’t have
            to be that way.
          </Typography>
        </Box>
      </Stack>
      <Stack sx={{ width: "40%" }}>
        <Box sx={{ height: "85%" }}>
          <Box
            sx={{
              border: "1px solid #dbdbd9",
              transform: "translate(0,100px)",
              height: "350px",
              width: "90%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                paddingTop: "10%",
              }}
            >
              <Box sx={{ paddingTop: "5%" }}>
                <Typography variant="h7" paddingLeft="15px">
                  Change the story for
                </Typography>
                <Typography
                  variant="h5"
                  paddingLeft="15px"
                  margin="2px 0 10px 0"
                  fontWeight="bold"
                >
                  Luisa Jimena
                </Typography>
                <Typography variant="h6" paddingLeft="15px">
                  11 years old
                </Typography>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ width: "135px", padding: "10px 0 0 14px" }}
                >
                  <AccessTimeIcon />
                  <Typography variant="h7">Waiting 53 days</Typography>
                </Stack>
              </Box>

              <Box>
                <img
                  src={img}
                  alt=""
                  style={{
                    width: "211px",
                    height: "200px",
                    borderRadius: "10px",
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "25px",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  width: "70%",
                  color: "black",
                  backgroundColor: "#ffcd00",
                  "&:hover": { backgroundColor: "black", color: "white" },
                }}
              >
                Look inside her world
              </Button>
            </Box>
          </Box>
        </Box>
        <Typography variant="h7" fontWeight="bold" textAlign="center">
          How do you end global poverty? You start with kids.
        </Typography>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          sx={{
            "&:hover": { color: "#ffcd00" },
          }}
        >
          <Typography textAlign="center" marginTop="10px">
            <a
              href="/"
              className="mainNavLInks"
              style={{
                textDecoration: "none",
                textAlign: "center",
                color: "black",
              }}
            >
              Meet more kids{" "}
            </a>
          </Typography>
          <Box display={"flex"} alignItems={"end"}>
            <ArrowForwardIcon color="#ffcd00" />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default IntroSection;
