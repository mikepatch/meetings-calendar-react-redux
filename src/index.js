import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { Reset } from "styled-reset";

import App from "./app/App";
import store from "./app/store";
import GlobalFonts from "./fonts/fonts";
import GlobalStyles from "./GlobalStyles";

const root = createRoot(document.querySelector("#root"));
root.render(
  <Provider store={store}>
    <Reset />
    <GlobalFonts />
    <GlobalStyles />
    <App />
  </Provider>
);
