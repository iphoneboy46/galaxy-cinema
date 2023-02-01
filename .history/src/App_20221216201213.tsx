import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { publicRoutes } from "./routes/publicRoutes";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="login-form">
        <Login />
      </div>
      <Routes>
        {publicRoutes.map((router, index) => {
          const Page = router.component;

          return (
            <Route key={index} path={router.path} element={<Page />}></Route>
          );
        })}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
