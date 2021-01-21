import { Item } from '../../interfaces/Item';

export default function(state: Item[] = [], action: any) {
        
    switch (action.type) {
        case 'GET_LIST': {
            return action.payload;
        }
        case 'CHANGE_VALUE': {
            return action.payload;
        }
        case 'DECREASE_VALUE': {
            const clone = state.map((item: Item) => {
                if (item._id === action.payload) {
                    item.quantity = item.quantity < 0 || item.quantity === 0 ? 0 : item.quantity - 1;
                    return item;
                }
                return item;
            });

            return clone;
        }
        case 'ADD_VALUE': {
            const clone = state.map((item: Item) => {
                if (item._id === action.payload) {
                    item.quantity += 1;
                    return item;
                }
                return item;
            });

            return clone;
        }
        default: return state
    }

}