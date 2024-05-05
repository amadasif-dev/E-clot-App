import {REMOVE_WISH_LIST_ITEMS, WISH_LIST_ITEMS} from '../Constants/ActionConstants';

export function WishListItem(item) {
  return {
    type: WISH_LIST_ITEMS,
    payload: item,
  };
}

export function RemoveWishListItem(item){
    return{
        type:REMOVE_WISH_LIST_ITEMS,
        payload:item,
    }
}