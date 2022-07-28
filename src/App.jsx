import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainLayout from "./components/MainLayout/MainLayout";

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout />
    </ThemeProvider>
  );
};

export default App;
