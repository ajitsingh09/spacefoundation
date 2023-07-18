import { Typography } from "@mui/material";
import React from "react";
import { Box, Stack, TextField } from "@mui/material";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import Button from "./utils/Button";
import MobileScreenShareOutlinedIcon from "@mui/icons-material/MobileScreenShareOutlined";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import Map from "./HexaMap";

const Footer = () => {
  return (
    <Box>
      <Box
        display="flex"
        justifyContent={"center"}
        sx={{
          widht: "100%",
          height: "660px ",
          color: "white",
          backgroundColor: "#3e3d3d",
        }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          sx={{
            width: "1200px",
            height: "400px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Stack direction={"row"} width={"100%"} paddingTop={"60px"}>
            <Box width={"33%"}>
              <Box
                paddingLeft={"45px"}
                display={"flex"}
                flexDirection={"column"}
                gap={"25px"}
              >
                <Link to={"/"}>
                  <img src={logo} alt="logo" style={{ width: "180px" }} />
                </Link>
                <Typography color={"grey"}>
                  SPACE aims to create Link scientifically aware society and
                  contribute to the technological and social development of the
                  country.
                </Typography>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  gap={3}
                  sx={{ cursor: "pointer" }}
                >
                  <FacebookIcon
                    sx={{ color: "white", fontSize: 20 }}
                    className="mainNavLInks"
                  />
                  <InstagramIcon
                    sx={{ color: "white", fontSize: 20 }}
                    className="mainNavLInks"
                  />
                  <TwitterIcon
                    sx={{ color: "white", fontSize: 20 }}
                    className="mainNavLInks"
                  />
                  <LinkedInIcon
                    sx={{ color: "white", fontSize: 20 }}
                    className="mainNavLInks"
                  />
                  <PinterestIcon
                    sx={{ color: "white", fontSize: 20 }}
                    className="mainNavLInks"
                  />
                </Stack>
                <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
                  <Button>
                    <Typography>Donate Us</Typography>
                  </Button>
                  <Button>
                    <Typography>Volunteer</Typography>
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box width={"33%"}>
              <Box width={"350px"} height={"500px"}>
                <Map />
              </Box>
            </Box>
            <Box
              width={"350px"}
              height={"400px"}
              sx={{
                boxShadow: "1px 2px 7px 0px rgb(8, 8, 8)",
              }}
            >
              <Stack
                justifyContent="center"
                alignItems="center"
                height="100px"
                direction="column"
                gap="15px"
              >
                {" "}
                <Typography variant="h6" fontWeight="bold">
                  Quick Contact
                </Typography>
                <Typography
                  sx={{
                    content: "''",
                    width: "70px",
                    height: "2px",
                    backgroundColor: "#ffcd00",
                  }}
                ></Typography>
              </Stack>
              <Stack gap={"15px"} marginLeft={"25px"}>
                <Box display={"flex"} flexDirection={"row"} gap={"15px"}>
                  <ContactsOutlinedIcon />
                  <Stack className="mainNavLInks">
                    <Typography style={{ color: "white" }}>Address</Typography>
                    <Typography>
                      <Link
                        to="/"
                        style={{ textDecoration: "none", color: "grey" }}
                      >
                        Plot No. 3, Institutional Area Ramleela Ground, Sector
                        11 Dwarka, New Delhi, Delhi, 110075, India
                      </Link>
                    </Typography>
                  </Stack>
                </Box>
                <Box display={"flex"} flexDirection={"row"} gap={"15px"}>
                  <ForwardToInboxOutlinedIcon />
                  <Stack>
                    <Typography>Email</Typography>
                    <Typography>
                      <Link
                        to="/"
                        style={{ textDecoration: "none", color: "grey" }}
                      >
                        getintouch@space-foundation.org
                      </Link>
                    </Typography>
                  </Stack>
                </Box>
                <Box display={"flex"} flexDirection={"row"} gap={"15px"}>
                  <MobileScreenShareOutlinedIcon />
                  <Stack>
                    <Typography>Phone no.</Typography>
                    <Typography>
                      <Link
                        to="/"
                        style={{ textDecoration: "none", color: "grey" }}
                      >
                        +919250901086
                      </Link>
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Stack>

          <Box>
            <Typography
              sx={{
                content: "''",
                width: "1200px",
                height: "1px",
                backgroundColor: "grey",
              }}
            ></Typography>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Box
                height={"100px"}
                display={"flex"}
                flexDirection={"row"}
                gap={"20px"}
                alignItems={"center"}
              >
                <Link to="/" className="mainNavLInks">
                  SPONSDER A CHILD
                </Link>
                <Link to="/" className="mainNavLInks">
                  NEWSROOM
                </Link>
                <Link to="/" className="mainNavLInks">
                  ABOUT US
                </Link>
                <Link to="/" className="mainNavLInks">
                  CONTACT US
                </Link>
                <Link to="/" className="mainNavLInks">
                  FAQ
                </Link>
              </Box>
              <Box
                height={"80px"}
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
              >
                <TextField
                  id="standard-basic"
                  label="Standard"
                  variant="standard"
                />
                <SendOutlinedIcon />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          backgroundColor: "white",
          height: "70px",
          width: "100%",
        }}
      >
        <Typography>Copyrights © 2023 SPACE All rights reserved.</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
