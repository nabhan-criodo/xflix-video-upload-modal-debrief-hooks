import { SnackbarProvider } from "notistack";
import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <SnackbarProvider
      maxSnack={1}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center"
      }}
      preventDuplicate
    >
      <App />
    </SnackbarProvider>
  </StrictMode>,
  rootElement
);
