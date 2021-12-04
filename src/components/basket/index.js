import React from "react";
import propTypes from 'prop-types';
import './styles.css';

const Basket = ({active, setActive}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <div className="modal__content-card">
                    <h1>Корзина</h1>
                    <button className="btn-close" onClick={() => setActive(false)}>Закрыть</button>
                </div>
            </div>
        </div>
    );
};
export default React.memo(Basket);