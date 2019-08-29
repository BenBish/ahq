import React, { useContext } from "react";

import SubscriptionContext from "../../context/SubscriptionContext";

const Summary = () => {
  const { activePlan, activeAddOns } = useContext(SubscriptionContext);

  return (
    <div className="mb-5">
      <h2>Summary</h2>
      <h3>Plan Selected</h3>
      <p>{activePlan}</p>

      <h3>Add-ons Selected</h3>
      {activeAddOns.map((addOn, index) => (
        <p key={index}>{addOn}</p>
      ))}
    </div>
  );
};

export default Summary;
