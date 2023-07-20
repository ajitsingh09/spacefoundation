import React, { useState, useEffect } from "react";
import { CircularProgress, Typography } from "@mui/material";

const Progressbar = ({ raised, goals }) => {
  // const raisedAmount = 46303;
  // const goalAmount = 95000;
  const targetPercentage = Math.floor((raised / goals) * 100);

  const [animationPercentage, setAnimationPercentage] = useState(0);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnimationPercentage(targetPercentage);
    }, 1000); // Adjust the duration of the animation here (in milliseconds)

    return () => clearTimeout(animationTimeout);
  }, [targetPercentage]);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <CircularProgress
        variant="determinate"
        value={animationPercentage}
        size={100}
        thickness={5}
        sx={{
          color: "#ffcd00",
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
    </div>
  );
};

export default Progressbar;
