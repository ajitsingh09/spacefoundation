import { createTheme } from "@mui/material/styles";
import "../Fonts/font.css";

const theme = createTheme({
  typography: {
    fontFamily: "Ubuntu,UbuntuMedium,SourceSans3, sans-serif",
  },
  palette: {
    secondary: {
      main: "#ffcc00",
    },
  },
});

export default theme;
