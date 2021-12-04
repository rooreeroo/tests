import React from "react";
import propTypes from 'prop-types';
import './styles.css';
import Card from "../card";

const Basket = ({active, setActive, card, sum, counter}) => {
    console.log('items',card);
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <div className="modal__content-header">
                    <div className="modal__content-card">
                        <h1>Корзина</h1>
                        <button className="btn-close" onClick={() => setActive(false)}>Закрыть</button>
                    </div>
                </div>
                <div className='List-items-card'>{card.map(item =>
                    <div className='List__item-card' key={item.code}>
                        <Card code={item.code}
                              title={item.title}
                              price={item.price}
                              counter={item.counter}
                              basket={card}/>
                    </div>
                )}
                </div>
                <div className="card-full-price">
                    <div className="full">Итого</div>
                    <div className="full-price">{sum.toString(10).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ') + ' ₽ '} </div>
                    <div className="full-counter">{counter + ' ' + 'шт'}</div>
                </div>
            </div>
        </div>
    );
};
export default React.memo(Basket);