import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { UserProvider } from "./UseContext/UseContext";
import { BrowserRouter } from "react-router-dom";
import UploadFileForm from  './Components/FileUpload'
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <>
  <BrowserRouter>
    <reportWebVitals>
      <UserProvider>
        <App />
        {/* <UploadFileForm/> */}
      </UserProvider>
    </reportWebVitals>
    </BrowserRouter>
  </>
);

reportWebVitals();
