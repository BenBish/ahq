/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";

import SubscriptionContext from "../../context/SubscriptionContext";

const Plans = () => {
  const { plans, activePlan, setActivePlan } = useContext(SubscriptionContext);

  const selectPlan = e => {
    setActivePlan(e.target.value);
  };

  return (
    <div
      css={css`
        margin-bottom: 35px;
      `}
    >
      <h2>Plan</h2>
      <div className="form-group">
        <select
          css={css`
            font-size: 14px;

            @media (min-width: 992px) {
              width: 90%;
            }
          `}
          name="plans"
          className="custom-select"
          value={activePlan}
          onChange={selectPlan}
        >
          {plans.map((plan, index) => (
            <option
              key={index}
              value={plan.name}
            >{`${plan.name} ${plan.description}`}</option>
          ))}
        </select>
        <p className="form-text text-muted">
          Only plans you can downgrade or upgrade to are shown.
        </p>
      </div>
    </div>
  );
};

export default Plans;