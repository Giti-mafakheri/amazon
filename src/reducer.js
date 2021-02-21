export const initialState = {
  basket: [],
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        //this pushes the item into basket
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};
export default reducer;
