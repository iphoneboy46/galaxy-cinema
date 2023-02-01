import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import MovieContextProvider from "./components/MovieContext/MovieContext";
import UserContextProvider from "./components/UserContext/UserContext";
import InfoContextProvider, { InfoContext } from './components/TotalContext/TotalContext';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
  <InfoContextProvider>
     <UserContextProvider>
        <MovieContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </MovieContextProvider>
     </UserContextProvider>
  </InfoContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
