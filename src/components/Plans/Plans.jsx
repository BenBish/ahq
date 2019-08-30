/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import iconDownArrow from "../../assets/icon-down-arrow.svg";

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
        <label className="sr-only" htmlFor="plans">
          Plans
        </label>
        <select
          css={css`
            background: url(${iconDownArrow}) no-repeat right 0.75rem center/7px
              6px;
            font-size: 14px;

            @media (min-width: 992px) {
              width: 90%;
            }
          `}
          name="plans"
          className="custom-select"
          value={activePlan}
          onChange={selectPlan}
          id="plans"
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
