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
  const createItem = (e) => {
    setList(products => (
        [
            ...products,
          {
            id: products.length+1,
            title: '',
            done: false
          }
        ]
    ))
  };

  /**
   * Установить заголовок элемента.
   *
   * @param id - ID элемента.
   * @param title - Заголовок элемента.
   */
  const setItemTitle = (id, title) => {
    setList(products => {
      return products.map(product => {
        if (product.id === id) {
          return {
            ...product,
            title
          }
        }
        return product
      })
    })
  };

  /**
   * Переключить выполненность элемента.
   *
   * @param id - ID элемента.
   */
  const toggleItem = (id) => {
    setList((products) => {
      return products.map(product => {
        if (product.id === id) {
          return {
          ...product,
          done: !product.done
          }
        }
        return product
      })
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
