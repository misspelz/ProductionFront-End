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

export const handleAntdTimeSplit = (timeString, position = 0) => {
  return timeString[position].split(":").join(":");
};

export const userLocalStorageInfo = () => {
  return JSON.parse(localStorage.getItem("2gedaUserInfo"));
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};
