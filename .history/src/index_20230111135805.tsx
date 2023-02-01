import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import MovieContextProvider from "./components/MovieContext/MovieContext";
import UserContextProvider from "./components/UserContext/UserContext";
import TotalContextProvider from "./components/TotalContext/TotalContext";
import ComboContextProvider from "./components/ComboContext/ComboContext";
import VeContextProvider from "./components/VeContext/VeContext";
import GheContextProvider from "./components/GheContext/GheContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GheContextProvider>
      <VeContextProvider>
        <ComboContextProvider>
          <TotalContextProvider>
            <UserContextProvider>
              <MovieContextProvider>
                <BrowserRouter>
                  <App />
                </BrowserRouter>
              </MovieContextProvider>
            </UserContextProvider>
          </TotalContextProvider>
        </ComboContextProvider>
      </VeContextProvider>
    </GheContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
