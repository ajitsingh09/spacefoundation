import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import Button from "../components/utils/Button";
import { useState, useEffect } from "react";
import Progressbar3 from "../components/Home/Parts/Progressbar3";

const Volunteer = () => {
  const achieved = 46303;
  const goal = 95000;
  const targetPercentage = Math.floor((achieved / goal) * 100);

  const [animationPercentage, setAnimationPercentage] = useState(0);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnimationPercentage(targetPercentage);
    }, 1000); // Adjust the duration of the animation here (in milliseconds)

    return () => clearTimeout(animationTimeout);
  }, [targetPercentage]);
  const [activebtn, setActivebtn] = useState(1);
  const handleBtnClick = (btnNumber) => {
    setActivebtn(btnNumber);
  };
  return (
    <>
      <Box
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          width: "100%",
          height: "100vh",
          color: "white",
          backgroundColor: "black",
        }}
      >
        <Stack
          width={"100%"}
          height={"120px"}
          justifyContent={"center"}
          sx={{ backgroundColor: "#444444", position: "absolute", top: "80%" }}
        >
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            direction={"row"}
            gap={15}
          >
            <Stack direction={"row"} width={"40%"}>
              <Box width={"50%"}>
                <Button
                  sx={{
                    width: "100%",
                    height: "60px",
                    outline: "none",
                    color: "white",
                    backgroundColor: "#b250d2",
                    "&:hover": { backgroundColor: "#b250d2", color: "white" },
                  }}
                >
                  <Typography variant="h6">
                    Goal Caused: ${" "}
                    <span>{parseInt(goal).toLocaleString()}</span>
                  </Typography>
                </Button>
              </Box>
              <Box width={"50%"}>
                <Button
                  sx={{
                    width: "100%",
                    height: "60px",
                    outline: "none",
                    color: "white",
                    backgroundColor: "#5c5c5c",
                    "&:hover": { backgroundColor: "#5c5c5c", color: "white" },
                  }}
                >
                  <Typography variant="h6">
                    Achieved Goal: ${" "}
                    <span>{parseInt(achieved).toLocaleString()}</span>
                  </Typography>
                </Button>
              </Box>
            </Stack>

            <Box>
              <Typography variant="h3" fontWeight={"bold"} textAlign={"Center"}>
                {animationPercentage}%
              </Typography>
              <span style={{ fontSize: "20px", letterSpacing: 2 }}>
                of our goal
              </span>
            </Box>
            <Box>
              <Typography textAlign={"Center"} variant="h3">
                4
              </Typography>
              <span style={{ fontSize: "20px", letterSpacing: 2 }}>
                Donations
              </span>
            </Box>
            <Box>
              <Button
                sx={{
                  // width: "100%",
                  // height: "0px",
                  borderRadius: "20px",
                  outline: "none",
                  color: "#444444",
                  backgroundColor: "white",
                  "&:hover": { backgroundColor: "white", color: "#444444" },
                }}
              >
                {" "}
                Donate now
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Box>
      <Stack
        width={"100%"}
        sx={{ backgroundColor: "white" }}
        alignItems={"center"}
      >
        <Stack direction={"row"} p={10}>
          <Stack width={"60%"} position={"relative"}>
            <img
              style={{ width: "100%" }}
              src="https://demoapus2.com/crowdngo/wp-content/uploads/2019/08/charity_01-670x453.jpg"
              alt=""
            />
            <Box position={"absolute"} top={"96%"} width={"100%"}>
              <Progressbar3 raised={achieved} goals={goal} clr={"#b250d2"} />
            </Box>
          </Stack>
          <Box width={"40%"} sx={{ backgroundColor: "#b250d2" }}>
            <Typography>
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit,
              numquam? Corporis nemo pariatur officia impedit, veniam possimus
              inventore odio sapiente autem quas, atque iure aliquam dolorum
              veritatis quisquam fuga. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Voluptatibus tempore laboriosam commodi
              distinctio vel unde odit repellendus, aperiam voluptates officiis
              impedit molestiae dolore veniam nobis eius! Quibusdam earum nisi
              quam. Ut!
            </Typography>
          </Box>
        </Stack>
      </Stack>
      <Stack ml={10} height="800px">
        <Stack direction={"row"} gap={5}>
          <Button
            sx={{
              outline: "none",
              color: "black",
              borderBottom: "0px solid #b250d2",
              borderBottomWidth: activebtn === 1 ? 2 : 0,
              "&:hover": { backgroundColor: "white", transition: "none" },
              transition: "none",
              fontSize: "18px",
              fontWeight: "bold",
            }}
            onClick={() => handleBtnClick(1)}
          >
            Description
          </Button>
          <Button
            sx={{
              outline: "none",
              color: "black",
              borderBottom: "0px solid #b250d2",
              borderBottomWidth: activebtn === 2 ? 2 : 0,
              transition: "none",
              fontSize: "18px",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "white", transition: "none" },
            }}
            onClick={() => handleBtnClick(2)}
          >
            btn2
          </Button>
          <Button
            sx={{
              outline: "none",
              color: "black",
              borderBottom: "0px solid #b250d2",
              borderBottomWidth: activebtn === 3 ? 2 : 0,
              "&:hover": { backgroundColor: "white", transition: "none" },
              transition: "none",
              fontSize: "18px",
              fontWeight: "bold",
            }}
            onClick={() => handleBtnClick(3)}
          >
            btn3
          </Button>
          <Button
            sx={{
              outline: "none",
              color: "black",
              borderBottom: "0px solid #b250d2",
              borderBottomWidth: activebtn === 4 ? 2 : 0,
              transition: "none",
              "&:hover": { backgroundColor: "white", transition: "none" },
              fontSize: "18px",
              fontWeight: "bold",
            }}
            onClick={() => handleBtnClick(4)}
          >
            btn4
          </Button>
        </Stack>
        <Stack pt={2} pr={8} letterSpacing={2}>
          {activebtn === 1 && (
            <Typography fontSize={16}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
              numquam repudiandae error possimus sed voluptatem necessitatibus
              illo quo odit repellendus, porro nulla nisi incidunt quia fuga
              magnam accusantium reiciendis eius? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Rerum placeat temporibus ab nesciunt
              quis mollitia, natus incidunt. Doloribus, rem itaque quam
              consequatur modi quisquam natus quidem eius ratione quos nihil.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              necessitatibus tenetur qui, mollitia suscipit in cumque repellat
              fugit unde facere iste delectus vero quo ab. Quis excepturi
              commodi dolorum. Voluptate.
            </Typography>
          )}
          {activebtn === 2 && (
            <Typography variant="h6"> this is a 2 para</Typography>
          )}
          {activebtn === 3 && (
            <Typography variant="h6"> this is a 3 para</Typography>
          )}
          {activebtn === 4 && (
            <Typography variant="h6"> this is a 4 para</Typography>
          )}
        </Stack>
      </Stack>
    </>
  );
};

export default Volunteer;
