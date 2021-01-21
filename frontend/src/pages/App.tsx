import React, { useEffect } from 'react';
import Styles from './App.scss';
import Button from '../components/button/Button';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import { connect } from 'react-redux';
import { addValue, changeValue, decreaseValue, getList, saveValue } from '../store/actions/beer';
import { Item } from 'interfaces/Item';

interface Props {
  List: Item[];
  getList(): void;
  change(_id: string, value: number): void;
  decrement(_id: string): void;
  increment(_id: string): void;
  saveValue(_id: string): void;
}

const App: React.FC<Props> = ({ List, change, decrement, increment, getList, saveValue }) => {

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <Header />
      <section className={Styles.sectionBody}>
        {List.map((item: any, index: number) => (
          <div className={Styles.card} key={index}>
            <div className={Styles.cardHeader}>
              <img src={item.image_url} alt={item.title} />
            </div>
            <div className={Styles.cardBody}>
              <div>
                <h1 className={Styles.cardBodyTitle}>{item.title}</h1>
                <p>{item.size}</p>
                <h3 style={{ fontSize: "1rem" }}>{`RD$${item.price.toFixed(2)}/Unit`}</h3>
                <p className={Styles.description}>{item.sale}</p>
                <Link to={`/edit/${item._id}`}>
                  <p className={Styles.details}>View details</p>
                </Link>
              </div>
              <div className={Styles.cardButtons}>
                <div style={{ display: "flex", alignItems: "baseline" }}>
                  <Button content="-" onClick={() => decrement(item._id)} circle />
                  <input 
                    type="number" 
                    value={item.quantity} 
                    onChange={event => change(item._id, +event.target.value)}
                  />
                  <Button content="+" onClick={() => increment(item._id)} circle />
                </div>
                <div>
                  <Button content="UPDATE" onClick={() => saveValue(item._id)} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      <Link to="/createItem" className={Styles.createItem}>
        <Button content="INCLUDE ITEM" onClick={() => {}} />
      </Link>
    </>
  )
}

const mapStateToProps = (state: { beerList: Item[] }): {} => ({ List: state.beerList });

const mapDispatchToProps = (dispatch: any) => ({ 
  getList: () => dispatch(getList()),
  change: (_id: string, value: number) => dispatch(changeValue(_id, value)),
  increment: (_id: string) => dispatch(addValue(_id)),
  decrement: (_id: string) => dispatch(decreaseValue(_id)),
  saveValue: (_id: string) => dispatch(saveValue(_id))
});

const app = connect(mapStateToProps, mapDispatchToProps)(App);

export default app;