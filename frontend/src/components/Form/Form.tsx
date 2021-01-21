import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Item } from '../../interfaces/Item';
import Styles from './Form.scss';
import axios from 'axios';
import Button from '../button/Button';
import { createItem, remove, update } from '../../store/actions/beer';
import { Link } from 'react-router-dom';

interface Props {
    _id?: string;
    saveItem(item: Item): {};
    updateItem(item: Item): {};
    removeItem(_id: string): {};
}

const Form: React.FC<Props> = ({ _id, saveItem, updateItem, removeItem }) => {
    const [item, setItem] = useState<any>({
        image_url: '',
        title: '',
        size: '',
        price: 0,
        sale: '',
        quantity: 0,
    });

    useEffect(() => {
        if (_id) {
            axios.get(`http://localhost:3333/beer/${_id}`)
                .then(({ data }) => {
                    console.log(data);
                    setItem(data);
                });
        }
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, attr: string) => {
        setItem({ ...item, [attr]: event.target.value });
    }

    return (
        <section className={Styles.card}>
            <div className={Styles.cardHeader}>
                <h1 className={Styles.title}>Create Product Beer</h1>
            </div>
            <div className={Styles.cardBody}>
                <div>
                    <label htmlFor="">Image URL</label>
                    <input type="text" value={item.image_url} onChange={event => handleChange(event, 'image_url')} />
                </div>
                <div>
                    <label htmlFor="">Product Title</label>
                    <input type="text" value={item.title} onChange={event => handleChange(event, 'title')} />
                </div>
                <div>
                    <label htmlFor="">Product Size</label>
                    <input type="text" value={item.size} onChange={event => handleChange(event, 'size')} />
                </div>
                <div>
                    <label htmlFor="">Value</label>
                    <input type="number" value={item.price} onChange={event => handleChange(event, 'price')} />
                </div>
                <div>
                    <label htmlFor="">Product Sale</label>
                    <input type="text" value={item.sale} onChange={event => handleChange(event, 'sale')} />
                </div>
                <div>
                    <label htmlFor="">Quantity</label>
                    <input type="number" value={item.quantity} onChange={event => handleChange(event, 'quantity')} />
                </div>
            </div>
            <div className={Styles.cardFooter}>
                <Link to="/">
                    <Button content="Back" onClick={() => {}} />
                </Link>
                {_id 
                    ? (<>
                        <Button content="Remove" onClick={() => removeItem(item._id)} /> 
                        <Button content="Update" onClick={() => updateItem(item)} /> 
                    </>)
                    : <Button content="Save" onClick={() => saveItem(item)} />
                }
            </div>
        </section>
    );
}

const mapDispatchToProps = (dispatch: any) => ({
    saveItem: (item: Item) => dispatch(createItem(item)),
    updateItem: (item: Item) => dispatch(update(item)),
    removeItem: (_id: string) => dispatch(remove(_id)),
});

const form = connect(null, mapDispatchToProps)(Form);

export default form;