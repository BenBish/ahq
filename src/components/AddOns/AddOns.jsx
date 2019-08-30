/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { Fragment, useContext } from "react";

import SubscriptionContext from "../../context/SubscriptionContext";
import { updateAddon } from "./logic";

const AddOns = () => {
  const { addOns, activeAddOns, setActiveAddOns } = useContext(
    SubscriptionContext
  );

  const CustomCheckbox = styled.input`
    &:checked ~ .custom-control-label::before {
      border-color: #1bdbb8;
      background-color: #1bdbb8;
    }
  `;

  const toggleAddon = e => {
    const updatedAddOns = updateAddon(e.target.value, activeAddOns);
    setActiveAddOns(updatedAddOns);
  };

  return (
    <Fragment>
      <h2>Add-ons</h2>
      <div className="form-group">
        {addOns.map((addOn, index) => (
          <div className="custom-control custom-checkbox mb-2" key={index}>
            <CustomCheckbox
              checked={activeAddOns.includes(addOn.name) ? true : false}
              className="custom-control-input"
              id={addOn.name.replace(" ", "")}
              onChange={toggleAddon}
              type="checkbox"
              value={addOn.name}
            />
            <label
              className="custom-control-label"
              htmlFor={addOn.name.replace(" ", "")}
              onChange={toggleAddon}
              css={css`
                line-height: 23px;
                margin: 5px 0 1px;
              `}
            >
              {addOn.name} - {addOn.price}
            </label>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default AddOns;
