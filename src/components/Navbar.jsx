import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import SButton from "./utils/SButton";
import SubNav from "./SubNav";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ position: "absolute", top: 0, width: "100%" }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{
            height: "22vh",
            width: "95%",
            outline: "1px solid red",
            // paddingX: "2rem",
          }}
        >
          <Box>
            <Link to={"/"}>
              <img src={logo} alt="logo" style={{ width: "200px" }} />
            </Link>
          </Box>
          <Stack
            direction={"row"}
            alignItems={"center"}
            sx={{ color: "white" }}
          >
            <Typography color={"white"}>Need Help</Typography>
            <Typography color={"white"}>Explore the crowd Hope</Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} gap={2}>
            <FacebookIcon sx={{ color: "white" }} />
            <InstagramIcon sx={{ color: "white" }} />
            <TwitterIcon sx={{ color: "white" }} />
            <LinkedInIcon sx={{ color: "white" }} />
            <PinterestIcon sx={{ color: "white" }} />
          </Stack>
          <SButton title="Login" />
          <Stack justifyContent={"center"} alignItems={"center"}>
            <Typography color={"white"}>123-456-7890</Typography>
            <Typography color={"white"}>
              <PhoneInTalkOutlinedIcon sx={{ fontSize: "36px" }} />
            </Typography>
          </Stack>
          <Stack direction={"row"}>
            <Stack
              direction="row"
              justifyContent="space-evenly"
              alignContent="center"
              spacing={2}
              sx={{ color: "white", height: 50, paddingRight: 10 }}
            >
              <div
                style={{ display: "flex", alignItems: "center" }}
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={() => handleMouseLeave(1)}
              >
                <Box
                  sx={{
                    position: "relative",
                  }}
                >
                  <Link to="/our-story">
                    <Box
                      display={"flex"}
                      justifyContent="center"
                      alignItems={"center"}
                    >
                      <Typography
                        variant="body2"
                        component="span"
                        alignSelf="center"
                        display="inline-block"
                        sx={{ color: "white" }}
                      >
                        Our Story
                      </Typography>
                      <KeyboardArrowDownIcon sx={{ color: "white" }} />
                    </Box>
                  </Link>

                  <Stack
                    sx={{
                      opacity: isPopoverOpen(1) ? 1 : 0,
                      transition: "opacity 0.5s ease-in-out",
                      position: "absolute",
                      top: 50,
                      color: "black",
                      height: isPopoverOpen(1) ? "auto" : 0,
                      overflow: "hidden",
                      backgroundColor: "rgb(232, 232, 223,1)",
                      padding: isPopoverOpen(1) ? 2 : 0,
                      zIndex: 1,
                    }}
                  >
                    <Link to="#">
                      <Typography sx={{ p: 1 }}>Space Group</Typography>
                    </Link>
                    <Link to="/our-story/mission-vision">
                      <Typography sx={{ p: 1 }}>Mission & Vission</Typography>
                    </Link>
                    <Link to="/our-story/awards-recognitions">
                      <Typography sx={{ p: 1 }}>
                        Awards & Recognitions
                      </Typography>
                    </Link>
                  </Stack>
                </Box>
              </div>
              <div
                style={{ display: "flex", alignItems: "center" }}
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={() => handleMouseLeave(2)}
              >
                <Box
                  sx={{
                    position: "relative",
                  }}
                >
                  <Link to="/our-work">
                    <Box
                      display={"flex"}
                      justifyContent="center"
                      alignItems={"center"}
                    >
                      <Typography
                        variant="body2"
                        component="span"
                        alignSelf="center"
                        display="inline-block"
                        sx={{ color: "white" }}
                      >
                        Our Work
                      </Typography>
                      <KeyboardArrowDownIcon sx={{ color: "white" }} />
                    </Box>
                  </Link>

                  <Stack
                    sx={{
                      opacity: isPopoverOpen(2) ? 1 : 0,
                      transition: "opacity 0.5s ease-in-out",
                      position: "absolute",
                      top: 50,
                      color: "black",
                      backgroundColor: "rgb(232, 232, 223,1)",
                      height: isPopoverOpen(2) ? "auto" : 0,
                      overflow: "hidden",
                      padding: isPopoverOpen(2) ? 2 : 0,
                      zIndex: 1,
                      width: 200,
                    }}
                  >
                    <Link to="#">
                      <Typography sx={{ p: 1 }}>Events</Typography>
                    </Link>
                    <Link to="/our-work/world-space-week">
                      <Typography sx={{ p: 1 }}>World Space Week</Typography>
                    </Link>
                    <Link to="/our-work/all-india-asteroid-search-campaign">
                      <Typography sx={{ p: 1 }}>
                        All India Aestroid search campaign
                      </Typography>
                    </Link>
                    <Link to="#">
                      <Typography sx={{ p: 1 }}>Projects</Typography>
                    </Link>
                    <Link to="/our-work/sgvpk">
                      <Typography sx={{ p: 1 }}>
                        SPACE Gram Vigran Prachar Kendra : SGVPK
                      </Typography>
                    </Link>
                    <Link to="#">
                      <Typography sx={{ p: 1 }}>SPACE CALENDER</Typography>
                    </Link>
                  </Stack>
                </Box>
              </div>
              <div
                style={{ display: "flex", alignItems: "center" }}
                onMouseEnter={() => handleMouseEnter(3)}
                onMouseLeave={() => handleMouseLeave(3)}
              >
                <Box
                  sx={{
                    position: "relative",
                  }}
                >
                  <Link to="/our-impact">
                    <Box
                      display={"flex"}
                      justifyContent="center"
                      alignItems={"center"}
                    >
                      <Typography
                        variant="body2"
                        component="span"
                        alignSelf="center"
                        display="inline-block"
                        sx={{ color: "white" }}
                      >
                        IMPACT STORIES
                      </Typography>
                      <KeyboardArrowDownIcon sx={{ color: "white" }} />
                    </Box>
                  </Link>

                  <Stack
                    sx={{
                      opacity: isPopoverOpen(3) ? 1 : 0,
                      transition: "opacity 0.5s ease-in-out",
                      position: "absolute",
                      top: 50,
                      color: "black",
                      backgroundColor: "rgb(232, 232, 223,1)",
                      height: isPopoverOpen(3) ? "auto" : 0,
                      overflow: "hidden",
                      backgroundColor: "rgb(232, 232, 223,1)",
                      padding: isPopoverOpen(3) ? 2 : 0,
                      zIndex: 1,
                      width: 200,
                    }}
                  >
                    <Link to="/our-impact/fighting-against-light-pollution">
                      <Typography sx={{ p: 1 }}>
                        FIGHTING AGAINST LIGHT POLLUTION
                      </Typography>
                    </Link>
                  </Stack>
                </Box>
              </div>
              <div
                style={{ display: "flex", alignItems: "center" }}
                onMouseEnter={() => handleMouseEnter(4)}
                onMouseLeave={() => handleMouseLeave(4)}
              >
                <Box
                  sx={{
                    position: "relative",
                  }}
                >
                  <Link to="#">
                    <Box
                      display={"flex"}
                      justifyContent="center"
                      alignItems={"center"}
                    >
                      <Typography
                        variant="body2"
                        component="span"
                        alignSelf="center"
                        display="inline-block"
                        sx={{ color: "white" }}
                      >
                        TAKE ACTIONS
                      </Typography>
                      <KeyboardArrowDownIcon sx={{ color: "white" }} />
                    </Box>
                  </Link>

                  <Stack
                    sx={{
                      opacity: isPopoverOpen(4) ? 1 : 0,
                      transition: "opacity 0.5s ease-in-out",
                      position: "absolute",
                      top: 50,
                      color: "black",
                      backgroundColor: "rgb(232, 232, 223,1)",
                      height: isPopoverOpen(4) ? "auto" : 0,
                      overflow: "hidden",
                      padding: isPopoverOpen(4) ? 2 : 0,
                      zIndex: 1,
                      width: 200,
                    }}
                  >
                    <Link to="/donate">
                      <Typography sx={{ p: 1 }}>DONATE NOW</Typography>
                    </Link>
                    <Link to="/volunteer">
                      <Typography sx={{ p: 1 }}>VOLUNTEER US</Typography>
                    </Link>
                  </Stack>
                </Box>
              </div>
              <div
                style={{ display: "flex", alignItems: "center" }}
                onMouseEnter={() => handleMouseEnter(5)}
                onMouseLeave={() => handleMouseLeave(5)}
              >
                <Box
                  sx={{
                    position: "relative",
                  }}
                >
                  <Link to="#">
                    <Box
                      display={"flex"}
                      justifyContent="center"
                      alignItems={"center"}
                    >
                      <Typography
                        variant="body2"
                        component="span"
                        alignSelf="center"
                        display="inline-block"
                        sx={{ color: "white" }}
                      >
                        Media
                      </Typography>
                      <KeyboardArrowDownIcon sx={{ color: "white" }} />
                    </Box>
                  </Link>

                  <Stack
                    sx={{
                      opacity: isPopoverOpen(5) ? 1 : 0,
                      transition: "opacity 0.5s ease-in-out",
                      position: "absolute",
                      top: 50,
                      color: "black",
                      backgroundColor: "rgb(232, 232, 223,1)",
                      height: isPopoverOpen(5) ? "auto" : 0,
                      overflow: "hidden",
                      padding: isPopoverOpen(5) ? 2 : 0,
                      zIndex: 1,
                      width: 200,
                    }}
                  >
                    <Link to="/space-in-news">
                      <Typography sx={{ p: 1 }}>SPACE IN NEWS</Typography>
                    </Link>
                  </Stack>
                </Box>
              </div>
              <div
                style={{ display: "flex", alignItems: "center" }}
                onMouseEnter={() => handleMouseEnter(6)}
                onMouseLeave={() => handleMouseLeave(6)}
              >
                <Box
                  sx={{
                    position: "relative",
                  }}
                >
                  <Link to="/contact-us">
                    <Box
                      display={"flex"}
                      justifyContent="center"
                      alignItems={"center"}
                    >
                      <Typography
                        variant="body2"
                        component="span"
                        alignSelf="center"
                        display="inline-block"
                        sx={{ color: "white" }}
                      >
                        CONTACT US
                      </Typography>
                      <KeyboardArrowDownIcon sx={{ color: "white" }} />
                    </Box>
                  </Link>

                  <Stack
                    sx={{
                      opacity: isPopoverOpen(6) ? 1 : 0,
                      transition: "opacity 0.5s ease-in-out",
                      position: "absolute",
                      top: 50,
                      color: "black",
                      backgroundColor: "rgb(232, 232, 223,1)",
                      height: isPopoverOpen(6) ? "auto" : 0,
                      overflow: "hidden",
                      backgroundColor: "rgb(232, 232, 223,1)",
                      padding: isPopoverOpen(6) ? 2 : 0,
                      zIndex: 1,
                      width: 200,
                    }}
                  >
                    <Link to="#">
                      <Typography sx={{ p: 1 }}>CAREERS</Typography>
                    </Link>
                    <Link to="#">
                      <Typography sx={{ p: 1 }}>GLOBAL</Typography>
                    </Link>
                  </Stack>
                </Box>
              </div>
            </Stack>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{ w: 100, h: 100 }}
            >
              <Button variant="contained" onClick={() => navigate("/donate")}>
                Donate Now
              </Button>
            </Box>
          </Stack>
        </Stack>

        <SubNav />
      </Stack>
    </>
  );
};

export default Navbar;
