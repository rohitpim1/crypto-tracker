import React, { Suspense, lazy } from "react";
import { makeStyles,LinearProgress } from "@material-ui/core";
import "./App.css";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Header from "./components/Header";

const Homepage = lazy(() => import("./Pages/HomePage"));
const CoinPage = lazy(() => import("./Pages/CoinPage"));

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Suspense fallback={<LinearProgress style={{ backgroundColor: "gold" }} />}>
        <Routes>
        <Route path="/crypto-tracker" element={<Homepage/>} exact />
        <Route path="/coins/:id" element={<CoinPage/>} exact />
        </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
