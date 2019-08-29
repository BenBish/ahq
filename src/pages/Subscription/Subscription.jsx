import React, { Fragment, useState } from "react";

import SubscriptionContext from "../../context/SubscriptionContext";

import BackButton from "../../components/BackButton/BackButton";
import Plans from "../../components/Plans/Plans";

const Subscription = () => {
  const [plans] = useState([
    {
      name: "Silver",
      description: "2,000 contacts monthly"
    },
    {
      name: "Gold",
      description: "5,000 contacts monthly"
    },
    {
      name: "Platinum",
      description: "10,000 contacts monthly"
    },
    {
      name: "Platinum+",
      description: "40,000 contacts monthly"
    }
  ]);

  const [activePlan, setActivePlan] = useState("Platinum+");

  return (
    <Fragment>
      <BackButton />
      <h1 className="mb-4">Change subscription</h1>

      <div className="row">
        <SubscriptionContext.Provider
          value={{ plans, activePlan, setActivePlan }}
        >
          <div className="col-xs-12 col-lg-6">
            <Plans />
          </div>
          <div className="col-xs-12 col-lg-6">Summary</div>
        </SubscriptionContext.Provider>
      </div>
    </Fragment>
  );
};

export default Subscription;
