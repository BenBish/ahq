/** @jsx jsx */
import { Fragment } from "react";
import { Global, css, jsx } from "@emotion/core";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header/Header";
import Subscription from "./pages/Subscription/Subscription";

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
            font-size: 14px;
          }
          h1,
          h2,
          h3 {
            color: #1a2225;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-weight: normal;
          }
          h2,
          h3 {
            font-family: Karbon-SemiBold, sans-serif;
            font-size: 24px;
            margin-bottom: 4px;
          }
          h3 {
            font-size: 18px;
            margin-bottom: 6px;
          }
        `}
      />
      <Header />
      <div className="container">
        <Subscription />
      </div>
    </Fragment>
  );
};

export default App;
