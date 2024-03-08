export const day = Array.from({ length: 31 }, (_, i) => ({
  label: i + 1,
  value: i + 1,
}));

export const month = Array.from({ length: 12 }, (_, i) => ({
  label: i + 1,
  value: i + 1,
}));

export const years = Array.from({ length: 100 }, (_, i) => ({
  label: new Date().getFullYear() - i,
  value: new Date().getFullYear() - i,
}));

export const genderData = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
  { label: "Rather not say", value: "None" },
];

export const category = [
  {
    label: "Individual",
    value: "individual",
  },
  {
    label: "Company",
    value: "company",
  },
];

export const banks = [
  {
    label: "Wema bank",
    value: "Wema bank",
  },

  {
    label: "First bank",
    value: "First bank",
  },

  {
    label: "Stanbic bank",
    value: "Stanbic bank",
  },
];

export const advertCategory = [
  {
    label: "unknown",
    value: "unknown",
  },

  {
    label: "unknown",
    value: "unknown",
  },

  {
    label: "unknown",
    value: "unknown",
  },

  {
    label: "unknown",
    value: "unknown",
  },
];

export const formatDate = (date) => {
  const options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
  };

  return new Date(date).toLocaleString("en-US", options);
};

export const formatBusinessAvailabilityTime = (timesInCollection) => {
  const open_from = timesInCollection[0].split(" ")[0];
  const close_at = timesInCollection[1].split(" ")[0];

  return {
    open_from,
    close_at,
  };
};
