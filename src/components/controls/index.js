import React, {useState} from "react";
import propTypes from 'prop-types';
import './styles.css';
import Basket from "../basket";




function Controls(card, fullPrice){
  console.log(card, fullPrice);
  const [modalActive, setModalActive] = useState(false);
  return (
  <div>
    <div className='Controls'>В корзине:
      <div className="card"> { console.log(fullPrice)   // вот сюда хочу вывести общую стоимость и количество


        // store.state.basket.counter === 0 ?
        //     'пусто' :
        //     (store.state.basket.counter + ' ' +
        //     plural(store.state.basket.counter, 'товар', 'товара', 'товаров') + ' / ' +
        //     store.state.basket.price.toString(10).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ') + ' ₽ ')
      }
      </div>
      <button onClick={() => setModalActive(true)}> Показать</button>
    </div>
    <Basket active={modalActive} setActive={setModalActive}> </Basket>
  </div>
  )}

Controls.propTypes = {
}

Controls.defaultProps = {
}

export default React.memo(Controls);