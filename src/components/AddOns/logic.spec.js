import { updateAddon } from './logic';

describe('updateAddOns logic', () => {
  it('to return an empty array when an addon is toggled and removed', () => {

    const addOn = "Custom IP";
    const activeAddOns = [
      "Custom IP"
    ]

    const result = updateAddon(addOn, activeAddOns);
    expect(result).toHaveLength(0);
  })

  it('to return an array when an addon is toggled and added', () => {

    const addOn = "Priority support";
    const activeAddOns = [
      "Custom IP"
    ]

    const result = updateAddon(addOn, activeAddOns);
    expect(result).toHaveLength(2);
    expect(result[0]).toEqual("Custom IP");
    expect(result[1]).toEqual(addOn);
  })
})