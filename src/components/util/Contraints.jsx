const requestFormConstraints = {
  description: {
    presence: { allowEmpty: false, message: "^Description is required" },
    length: {
      minimum: 10,
      message: "^Description must be at least 10 characters",
    },
  },
  selectedCategory: {
    presence: { message: "^Please select a category" },
  },
  budget: {
    numericality: {
      greaterThan: 0,
      message: "^Budget must be a positive number",
    },
  },
};

export default requestFormConstraints;
