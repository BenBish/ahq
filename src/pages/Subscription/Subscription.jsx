import React, { Fragment, useState } from "react";

import SubscriptionContext from "../../context/SubscriptionContext";

import BackButton from "../../components/BackButton/BackButton";
import Plans from "../../components/Plans/Plans";
import AddOns from "../../components/AddOns/AddOns";

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

  const [addOns] = useState([
    {
      name: "Priority support",
      price: "$199/month"
    },
    {
      name: "Salesforce CRM integration",
      price: "$199/month"
    },
    {
      name: "Custom IP",
      price: "$149/month"
    },
    {
      name: "Activity streams",
      price: "$149/month"
    }
  ]);

  const [activePlan, setActivePlan] = useState("Platinum+");
  const [activeAddOns, setActiveAddOns] = useState(["Priority support"]);

  return (
    <Fragment>
      <BackButton />
      <h1 className="mb-4">Change subscription</h1>

      <div className="row">
        <SubscriptionContext.Provider
          value={{
            plans,
            activePlan,
            setActivePlan,
            addOns,
            activeAddOns,
            setActiveAddOns
          }}
        >
          <div className="col-xs-12 col-lg-6">
            <Plans />
            <AddOns />
          </div>
          <div className="col-xs-12 col-lg-6">Summary</div>
        </SubscriptionContext.Provider>
      </div>
    </Fragment>
  );
};

export default Subscription;
