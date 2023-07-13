import React, { useState } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import SButton from "./utils/SButton";
import SubNav from "./SubNav";
const Navbar = () => {
  const navigate = useNavigate();
  const [popoverOpen, setPopoverOpen] = useState(0);
  const handleMouseEnter = (id) => {
    setPopoverOpen(id);
  };
  const handleMouseLeave = (id) => {
    setPopoverOpen(0);
  };
  const isPopoverOpen = (id) => {
    return popoverOpen === id;
  };
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
        </Stack>

        <SubNav />
      </Stack>
    </>
  );
};

export default Navbar;
