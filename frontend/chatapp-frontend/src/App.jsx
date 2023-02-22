import { BrowserRouter } from "react-router-dom";

import { Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Home from "./scene/home";

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <BrowserRouter>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <main>
            <Routes>
              <Route index path="/" element={<Home />} />
            </Routes>
          </main>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </BrowserRouter>
  );
};

export default App;
