import axios from "axios";
import { Item } from "../../interfaces/Item";

const getList = () => async (dispatch: any) => {
    return await axios.get('http://localhost:3333/beer')
        .then(({ data }) => {
            dispatch({ type: 'GET_LIST', payload: data }); // Action Creator
        })
        .catch(() => {
            dispatch({ type: 'GET_LIST' });
        });
}

const changeValue = (_id: string, newValue: number) => (dispatch: any, getState: any) => {
    let { beerList: state } = getState();
    let clone = state.map((item: Item) => {
        if (item._id === _id) {
            item.quantity = newValue <= 0 ? 0 : newValue;
            return item
        }
        return item
    });

    dispatch({ type: 'CHANGE_VALUE', payload: clone });
    dispatch(getList());
}

const decreaseValue = (_id: string) => ({ type: 'DECREASE_VALUE', payload: _id });
const addValue = (_id: string) => ({ type: 'ADD_VALUE', payload: _id });

const saveValue = (_id: string) => async (dispatch: any, getState: any) => {
    let { beerList: state } = getState();

    let clone = state.filter((item: Item) => {
        if (item._id === _id) {
            return item
        }
        return false
    });

    return await axios.put(`http://localhost:3333/beer/${_id}`, clone[0])
        .then(() => {
            getList();
        })
        .catch(err => {
            console.error(err);
        });
    }
    
const createItem = (item: Item) => async (dispatch: any) => {
    return await axios.post('http://localhost:3333/beer', item)
        .then(() => {
            getList();
            alert('Beer created with success!!');
        })
        .catch(err => {
            console.error(err);
        });
}

const update = (item: Item) => async (dispatch: any) => {
    return await axios.put(`http://localhost:3333/beer/${item._id}`, item)
        .then(() => {
            getList();
            alert('Beer updated with success!!');
        })
        .catch(err => {
            console.error(err);
        });
    }
    
const remove = (_id: string) => async (dispatch: any) => {
    return await axios.delete(`http://localhost:3333/beer/${_id}`)
        .then(() => {
            getList();
            alert('Beer deleted with success!!');
        })
        .catch(err => {
            console.error(err);
        });  
}

export { getList, decreaseValue, addValue, changeValue, saveValue, createItem, update, remove };