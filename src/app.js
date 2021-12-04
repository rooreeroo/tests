import React, {useCallback, useState} from 'react';
import Controls from "./components/controls";
import List from "./components/list";
import Layout from "./components/layout";
import Basket from "./components/basket";
import './style.css'

/**
 * Приложение
 * @param store {Store} Состояние с действиями
 */
function App({store}) {
  console.log('App');

  const callbacks = {
    onCreateItem: useCallback(() => store.createItem(), [store]),
    onSelectItem: useCallback((code) => store.selectItem(code), [store]),
    onDeleteItem: useCallback((code) => store.deleteItem(code), [store]),
    onAddItem: useCallback((code) => store.onAddItem(code), [store]),
    fullPrice: useCallback(() => store.fullPrice(), [store])
  }

  return (
    <Layout head={<h1>Приложение на чистом JS</h1>}>

      <Controls card = {store.getState().card}  fullPrice = {callbacks.fullPrice} />

      <List items={store.getState().items}
            // onSelectItem={callbacks.onSelectItem}
            // onDeleteItem={callbacks.onDeleteItem}
            onAddItem={callbacks.onAddItem}/>

    </Layout>

  );
}

export default App;