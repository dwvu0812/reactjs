const initialCustomerState = {
  fullName: "",
  nationalID: "",
  createAt: "",
};

export const customerReducer = (state = initialCustomerState, action) => {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createAt: action.payload.createAt,
      };
    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload,
      };

    default:
      return state;
  }
};

export const createCustomer = (fullName, nationalID, createAt) => {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createAt },
  };
};

export const updateName = (fullName) => {
  return {
    type: "customer/updateName",
    payload: fullName,
  };
};
