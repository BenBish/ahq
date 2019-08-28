/** @jsx jsx */
import { Fragment } from "react";
import { Global, css, jsx } from "@emotion/core";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header/Header";

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
          body {
            color: #3a4347;
          }
          h1 {
            color: #1a2225;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-weight: normal;
          }
          h2,
          h3 {
            color: #1a2225;
            font-family: Karbon-SemiBold, sans-serif;
          }
        `}
      />
      <Header />
      <div className="container">
        <h1>Change subscription</h1>
      </div>
    </Fragment>
  );
};

export default App;
