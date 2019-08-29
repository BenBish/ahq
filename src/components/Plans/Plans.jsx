import React, { Fragment, useContext } from "react";

import SubscriptionContext from "../../context/SubscriptionContext";

const Plans = () => {
  const { plans, activePlan, setActivePlan } = useContext(SubscriptionContext);

  const selectPlan = e => {
    setActivePlan(e.target.value);
  };

  return (
    <Fragment>
      <h2>Plan</h2>
      <div className="form-group">
        <select
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
        <small className="form-text text-muted">
          Only plans you can downgrade or upgrade to are shown.
        </small>
      </div>
    </Fragment>
  );
};

export default Plans;
