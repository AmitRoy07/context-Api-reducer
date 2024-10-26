export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, card: [...state.card, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        card: state.card.filter((c) => c.id !== action.payload.id),
      };
    default:
      return state;
  }
};
