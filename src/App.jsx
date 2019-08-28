/** @jsx jsx */
import { Fragment } from "react";
import { Global, css, jsx } from "@emotion/core";
import logo from "./assets/logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Fragment>
      <Global
        styles={css`
          @font-face {
            font-family: Karbon-SemiBold;
            src: url("/fonts/Karbon-Semibold.woff2") format("woff2"),
              url("/fonts/Karbon-Semibold.woff") format("woff");
            font-weight: 600;
            font-style: normal;
          }
          h1 {
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-weight: normal;
          }
          h2,
          h3 {
            font-family: Karbon-SemiBold, sans-serif;
          }
        `}
      />

      <div className="container">
        <header>
          <img src={logo} alt="Autopilot" />
          <h1>Change subscription</h1>
        </header>
      </div>
    </Fragment>
  );
};

export default App;
