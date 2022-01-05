import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import store from "../redux/store";
import NavBar from "../components/NavBar";
import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ReduxProvider store={store}>
      <NavBar />
      <Component {...pageProps} />
    </ReduxProvider>
  );
}

export default MyApp;
