export const updateAddon = (addOnToToggle, activeAddOns) => {
  const removeAddOn = activeAddOns.includes(addOnToToggle);

  if (removeAddOn) {
    const filteredAddons = activeAddOns.filter(addOn => {
      return addOn !== addOnToToggle;
    });
    return [...filteredAddons];
  } else {
    return [...activeAddOns, addOnToToggle];
  }
};