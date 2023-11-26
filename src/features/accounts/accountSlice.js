import { createSlice } from "@reduxjs/toolkit";

const initialAccountState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState: initialAccountState,
  reducer: {
    deposit: (state, action) => {
      return (state.balance += action.payload);
    },
    withdraw: (state, action) => {
      return (state.balance -= action.payload);
    },
    requestLoan: {
      prepare: (amount, purpose) => {
        return { payload: { amount, purpose } };
      },
      reducer: (state, action) => {
        return (state.balance += action.payload);
      },
    },
    payLoan: (state, action) => {
      return (state.balance += action.payload);
    },
  },
});

export const { deposit, withdraw, requestLoan, payLoan } = accountSlice.actions;

export const accountReducer = accountSlice.reducer;

// export const accountReducer = (state = initialAccountState, action) => {
//   switch (action.type) {
//     case "account/deposit":
//       return {
//         ...state,
//         balance: state.balance + action.payload,
//         isLoading: true,
//       };
//     case "account/withdraw":
//       return { ...state, balance: state.balance - action.payload };
//     case "account/requestLoan":
//       if (state.loan > 0) return state;
//       return {
//         ...state,
//         loan: action.payload.amount,
//         loanPurpose: action.payload.purpose,
//         balance: state.balance + action.payload.amount,
//       };
//     case "account/payLoan":
//       return {
//         ...state,
//         balance: state.balance - state.loan,
//         loanPurpose: "",
//         loan: 0,
//       };
//     case "account/convertingCurrency":
//       return {
//         ...state,
//         isLoading: true,
//       };
//     default:
//       return state;
//   }
// };

// export const deposit = (amount, currency) => {
//   if (currency === "USD") return { type: "account/deposit", payload: amount };
//   return async (dispatch, getState) => {
//     dispatch({ type: "account/convertingCurrency" });
//     const host = "api.frankfurter.app";
//     const res = await fetch(
//       `https://${host}/latest?amount=${amount}&from=${currency}&to=USD`
//     );
//     const data = await res.json();
//     const convertedAmount = data.rates.USD;
//     console.log(data);
//     dispatch({ type: "account/deposit", payload: convertedAmount });
//   };
// };
// export const withdraw = (amount) => {
//   return { type: "account/withdraw", payload: amount };
// };
// export const requestLoan = (amount, purpose) => {
//   return { type: "account/requestLoan", payload: { amount, purpose } };
// };
// export const payLoan = () => {
//   return { type: "account/payLoan" };
// };
