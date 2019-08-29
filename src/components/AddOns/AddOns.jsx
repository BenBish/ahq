import React, { Fragment, useContext } from "react";

import SubscriptionContext from "../../context/SubscriptionContext";

const AddOns = () => {
  const { addOns, activeAddOns, setActiveAddOns } = useContext(
    SubscriptionContext
  );

  const toggleAddon = e => {
    const addOnToToggle = e.target.value;
    const removeAddOn = activeAddOns.includes(addOnToToggle);

    if (removeAddOn) {
      const filteredAddons = activeAddOns.filter(addOn => {
        return addOn !== addOnToToggle;
      });
      setActiveAddOns([...filteredAddons]);
    } else {
      setActiveAddOns([...activeAddOns, addOnToToggle]);
    }
  };

  return (
    <Fragment>
      <h2>Add-ons</h2>
      <div className="form-group">
        {addOns.map((addOn, index) => (
          <div className="form-check" key={index}>
            <input
              checked={activeAddOns.includes(addOn.name) ? true : false}
              className="form-check-input"
              id={addOn.name.replace(" ", "")}
              onChange={toggleAddon}
              type="checkbox"
              value={addOn.name}
            />
            <label
              className="form-check-label"
              htmlFor={addOn.name.replace(" ", "")}
            >
              {addOn.name}
            </label>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default AddOns;
