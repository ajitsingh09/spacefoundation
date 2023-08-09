import React, { useState, useEffect } from "react";
import {
  LinearProgress,
  Typography,
  Box,
  linearProgressClasses,
} from "@mui/material";
const Progressbar3 = ({ raised, goals, clr }) => {
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
    <Box sx={{ position: "relative", display: "inline-block", width:"100%" }}>
      <LinearProgress
        variant="determinate"
        value={animationPercentage}
        size={"large"}
        thickness={5}
        sx={{
          width: "100%",
          bgcolor: "#444444",
          [`& .${linearProgressClasses.bar}`]: {
            backgroundColor: clr,
          },
          height: 5,
        }}
      />
      <Typography
        variant="body1"
        component="div"
        sx={{
          bgcolor: clr,
          color: "white",
          position: "absolute",
          top: "50%",
          p: "4px",
          left: `${animationPercentage}%`,
          transform: "translate(-50%, -50%)",
        }}
      >
        {`${animationPercentage}%`}
      </Typography>
    </Box>
  );
};

export default Progressbar3;
