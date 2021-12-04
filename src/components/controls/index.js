import React, {useState} from "react";
import propTypes from 'prop-types';
import './styles.css';
import Basket from "../basket";
import plural from "plural-ru";




function Controls({card, sum, counter}){
  const [modalActive, setModalActive] = useState(false);
  return (
  <div>
    <div className='Controls'>В корзине:
      <div className="card"> {

        card.length === 0 ?
            'пусто' :
            (counter + ' ' +
                plural(counter, 'товар', 'товара', 'товаров') + ' / ' +
                sum.toString(10).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ') + ' ₽ ')
      }
      </div>
      <button onClick={() => setModalActive(true)}> Показать</button>
    </div>
    <Basket active={modalActive} setActive={setModalActive} card={card} sum={sum} counter={counter}> </Basket>
  </div>
  )
}

Controls.propTypes = {
}

Controls.defaultProps = {
}

export default React.memo(Controls);