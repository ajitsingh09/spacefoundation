import React, { useState, useEffect } from "react";
import {
  LinearProgress,
  Typography,
  Box,
  linearProgressClasses,
} from "@mui/material";
import { donation } from "../../../dummydata";
const Progressbar2 = ({ raised, goals, clr }) => {
  // const raisedAmount = 46303;
  // const goalAmount = 95000;
  const targetPercentage = Math.floor((raised / goals) * 100);

  const [animationPercentage, setAnimationPercentage] = useState(0);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnimationPercentage(targetPercentage);
    }, 1000);

    return () => clearTimeout(animationTimeout);
  }, [targetPercentage]);

  return (
    <Box style={{ position: "relative", display: "inline-block" }}>
      <LinearProgress
        variant="determinate"
        value={animationPercentage}
        size={"large"}
        thickness={5}
        style={{}}
        sx={{
          bgcolor: "grey",
          [`& .${linearProgressClasses.bar}`]: {
            backgroundColor: clr,
          },
          height: 20,
        }}
      />
      <Typography
        variant="body1"
        component="div"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {`${animationPercentage}%`}
      </Typography>
    </Box>
  );
};

export default Progressbar2;
