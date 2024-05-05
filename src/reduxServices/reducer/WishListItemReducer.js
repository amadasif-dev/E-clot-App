import { REMOVE_WISH_LIST_ITEMS, WISH_LIST_ITEMS } from "../Constants/ActionConstants";

const initialState = {
  items: []
}

const wishListItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case WISH_LIST_ITEMS:
      // console.log(action.payload)
      const data = [...state.items, action.payload]
      return {
        ...state,
        items: data
      };
    case REMOVE_WISH_LIST_ITEMS:
      const filteredList = state.items.filter(
        items => items.id !== action.payload.id,
      );
      console.log(filteredList);
      return {
        ...state,
        items: filteredList,
      };
    default:
      return state;
  }
};

export default wishListItemReducer;