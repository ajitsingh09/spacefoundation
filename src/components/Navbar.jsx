import React, { useState } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
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
            height: "27vh",
            width: "95%",
            // outline: "1px solid red",
            // paddingX: "2rem",
          }}
        >
          <Box>
            <Link to={"/"}>
              <img src={logo} alt="logo" style={{ width: "180px" }} />
            </Link>
          </Box>
          <Stack
            direction={"row"}
            alignItems={"center"}
            sx={{ color: "white" }}
            gap={3}
          >
            <Typography color={"white"} className="mainNavLInks">
              Need Help
            </Typography>
            <Typography color={"white"} className="mainNavLInks">
              Explore the Space Foundation
            </Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} gap={3}>
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
          <SButton>
            <Typography>Login</Typography>
          </SButton>
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
