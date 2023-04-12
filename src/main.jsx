import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/global";

import theme from './styles/theme';

import { Homee } from "./pages/Homee";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Homee />
    </ThemeProvider>
  </React.StrictMode>
);
