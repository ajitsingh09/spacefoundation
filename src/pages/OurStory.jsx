import { Box, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import img from "../assets/img.jpg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import VideoPlayer from "./video";
import PlayCircleTwoToneIcon from "@mui/icons-material/PlayCircleTwoTone";
import BACK from "../assets/BACK.png";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import ylo from "../assets/ylo.png";
import ylo2 from "../assets/ylo2.png";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import Hovercard from "./Hovercard";
const OurStory = () => {
  return (
    <>
      <Stack
        direction="row"
        sx={{
          backgroundColor: "white",
          height: "100vh",
        }}
      >
        <Stack sx={{ backgroundColor: "white", width: "60%", height: "100vh" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <img
              src={img}
              alt="img"
              style={{ width: "600PX", padding: "100px 0 0 0" }}
            /> */}
            <VideoPlayer />
            <Typography variant="h7" sx={{ padding: "10px 0 0 40px " }}>
              Growing up in poverty, kids face tough challenges: hunger and
              malnutrition, limited access to education and medical services,
              gang violence, social discrimination and isolation. But it doesn’t
              have to be that way.
            </Typography>
          </Box>
        </Stack>
        <Stack sx={{ backgroundColor: "white", width: "50%" }}>
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
          <Typography textAlign="center" marginTop="10px">
            <a href="/" style={{ textDecoration: "none", textAlign: "center" }}>
              Meet more kids{" "}
            </a>
            <ArrowForwardIcon color="#ffcd00" />
          </Typography>
        </Stack>
      </Stack>
      {/* /////////////////////////////////////////////// */}
      <Stack
        direction="row"
        sx={{ width: "100%", height: "fit-content", paddingTop: "5%" }}
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
            fontWeight="400"
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
            organizations. Our crowdhope activities are taken place around the
            world,let contribute to them with us by your hand to be a better
            life.
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
            Croudhelp founded 25 years ago as the American Institute of
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
            style={{ width: "370PX", height: "300px" }}
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
      {/* //////////////////////////////////////////////// */}
      <Box
        width="100%"
        height="583px"
        sx={{
          backgroundColor: "#2c2b3b",
          left: "-177px",
          backgroundImage: `url(${BACK})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 150px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
          }}
        >
          <Typography
            sx={{
              content: "''",
              width: "70px",
              height: "4px",
              backgroundColor: "#ffcd00",
            }}
          ></Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "300px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: { xs: "none", lg: "block" } }}>
            <img
              src={ylo}
              alt=""
              style={{ transform: "translate(150px,120px)" }}
            />
          </Box>
          <Box textAlign="center" sx={{ width: "100%" }}>
            <Stack width="100%" justifyContent="center" alignItems="center">
              <Box sx={{ textAlign: "center", width: "900px" }}>
                <Typography variant="h4" color="white" fontWeight="bold">
                  Quickly and Easily Find the right Charity 953,128 people
                  raising funds now
                </Typography>
                <br></br>
                <br></br>
                <br></br>
              </Box>
              <Box
                textAlign="center"
                width="800px"
                justifyContent="center"
                alignItems="center"
              >
                <Typography
                  variant="h5"
                  color="grey"
                  fontSize="18px"
                  lineHeight="1.5"
                >
                  We do not compare all brands in the market, or all products
                  offered by all brands. We do not arrange products from these
                  brands for you directly, but we will refer you to our trusted
                  partner who can. Learn more about our partnership
                </Typography>
              </Box>
            </Stack>
          </Box>
          <img
            src={ylo2}
            alt=""
            style={{ transform: "translate(-150px,120px)" }}
          />
        </Box>
        <Stack
          direction="row"
          width="100%"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              width: "15%",
              color: "black",
              backgroundColor: "WHITE",
              "&:hover": { backgroundColor: "#ffcd00" },
              fontWeight: "bold",
            }}
          >
            GET STARTED
          </Button>
          <Stack direction="row" gap="10px">
            <PhoneOutlinedIcon
              sx={{
                color: "#ffcd00",
                cursor: "pointer",
                fontSize: "50px",
                paddingLeft: "40px",
              }}
            />
            <Typography
              variant="h4"
              color="white"
              sx={{ display: "flex", alignItems: "center" }}
            >
              +91 9218302999
            </Typography>
          </Stack>
        </Stack>
        <Box></Box>
      </Box>

      {/* //////////////////////////////////////////////// */}
      <Box width="100%" height="1203px" sx={{ backgroundColor: "white" }}>
        <Box>
          <Stack textAlign="center" justifyContent="end" height="150px">
            <Typography variant="h4" fontWeight="bold">
              {" "}
              LATEST CAUSES
            </Typography>
          </Stack>
          <Stack
            justifyContent="center"
            alignItems="center"
            height="100px"
            direction="row"
            gap="15px"
          >
            <Typography
              sx={{
                content: "''",
                width: "70px",
                height: "3px",
                backgroundColor: "#ffcd00",
              }}
            ></Typography>
            <CheckBoxOutlinedIcon sx={{ color: "#ffcd00" }} />
          </Stack>
          <Stack
            textAlign="center"
            justifyContent="center"
            alignItems="center"
            height="70px"
          >
            <Typography variant="h6" width="700px" color="grey">
              The Justgiving charity provides enhanced services over and above
              what the NHS funds.
            </Typography>
          </Stack>
          <br></br>

          <Stack
            direction={"row"}
            gap="10px"
            height="500px"
            flexWrap={"wrap"}
            justifyContent="center"
            alignItems="center"
            zIndex="1"
          >
            <Hovercard />
            
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default OurStory;
