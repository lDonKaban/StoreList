import {useState} from 'react'
export function useList() {
  const [list, setList] = useState([
    {
      id: 1,
      title: 'Огурцы',
      done: false
    },
    {
      id: 2,
      title: 'Помидоры',
      done: false
    }
  ])
  /** Создать новый элемент. */
  const createItem = () => {};

  /**
   * Установить заголовок элемента.
   *
   * @param id - ID элемента.
   * @param title - Заголовок элемента.
   */
  const setItemTitle = (id, title) => {};

  /**
   * Переключить выполненность элемента.
   *
   * @param id - ID элемента.
   */
  const toggleItem = (id) => {
    setList((products) => {
      return products.map(product => (
          {
            ...product,
            done: product.id === id ? !product.done : product.done
          }
      ))
    });
  };

  /**
   * Удалить элемент.
   *
   * @param id - ID элемента.
   */
  const deleteItem = (id) => {};

  return {
    list,
    createItem,
    setItemTitle,
    toggleItem,
    deleteItem,
  };
}
