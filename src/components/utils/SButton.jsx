import { Button } from "@mui/material";
import { styled } from "@mui/system";

const SButton = styled(Button)({
  width: 100,
  height: 40,
  color: "#d1d1d1",
  backgroundColor: "transparent",
  paddingLeft: 5,
  paddingRight: 5,
  borderRadius: 0,
  transition: "background-color 0.3s ease",
  outline: "1px solid #d1d1d1",
  outlineWidth: 0.5,
  textTransform: "none",

  "&:hover": {
    backgroundColor: "#ffcc00",
    transition:
      "background-color 0.3s ease-in-out 0.2s,color 0.3s ease-in-out 0.2s",
    color: "black",
  },
});

export default SButton;
