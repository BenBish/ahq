/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";

import SubscriptionContext from "../../context/SubscriptionContext";

const Summary = () => {
  const { activePlan, activeAddOns } = useContext(SubscriptionContext);

  return (
    <div className="mb-5">
      <hr className="d-md-none" />
      <h2
        css={css`
          margin-bottom: 20px;
        `}
      >
        Summary
      </h2>
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-12">
          <h3>Plan Selected</h3>
          <p
            css={css`
              margin-bottom: 18px;
            `}
          >
            {activePlan}
          </p>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-12">
          <h3>Add-ons Selected</h3>
          {activeAddOns.map((addOn, index) => (
            <p
              key={index}
              css={css`
                margin-bottom: 6px;
              `}
            >
              {addOn}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Summary;
