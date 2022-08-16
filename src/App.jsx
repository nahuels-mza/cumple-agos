import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainLayout from "./components/MainLayout/MainLayout";
import "./index.css";

const theme = createTheme({
  typography: {
    fontFamily: ["Arial"].join(","),
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout />
    </ThemeProvider>
  );
};

export default App;
