/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Fragment, useState } from "react";

import SubscriptionContext from "../../context/SubscriptionContext";
import {
  plans as dataPlans,
  addOns as dataAddOns
} from "../../data/plansAndAddOns.json";

import BackButton from "../../components/BackButton/BackButton";
import Plans from "../../components/Plans/Plans";
import AddOns from "../../components/AddOns/AddOns";
import Summary from "../../components/Summary/Summary";

const Subscription = () => {
  const [plans] = useState(dataPlans);
  const [addOns] = useState(dataAddOns);

  const [activePlan, setActivePlan] = useState("Platinum+");
  const [activeAddOns, setActiveAddOns] = useState(["Priority support"]);

  return (
    <Fragment>
      <BackButton />
      <h1
        css={css`
          margin-bottom: 36px;
        `}
      >
        Change subscription
      </h1>

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
          <div className="col-xs-12 col-md-7">
            <Plans />
            <AddOns />
          </div>
          <div className="col-xs-12 col-md-5">
            <Summary />
          </div>
        </SubscriptionContext.Provider>
      </div>
    </Fragment>
  );
};

export default Subscription;
