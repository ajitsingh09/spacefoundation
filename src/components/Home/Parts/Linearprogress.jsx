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
          width:"300px",
          bgcolor: "#f1f1f1",
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
          bgcolor:clr,
          color:"white",
          position: "absolute",
          top: "50%",
          p:"4px",
          left: `${animationPercentage}%`,
          transform: "translate(-50%, -50%)",
        }}
      >
        {`${animationPercentage}%`}
      </Typography>
    </Box>
  );
};

export default Progressbar2;
