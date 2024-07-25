import {useEffect, useRef, useState} from 'react'
export function useList() {
  const [list, setList] = useState(restoreProductList())
  const inputRef = useRef(null)

  const saveProductList = (products) => {
    localStorage.setItem('productList', JSON.stringify(products))
  }

  function restoreProductList () {
    const rawProductList = localStorage.getItem('productList')

    if (!rawProductList) return []

    return (JSON.parse(rawProductList))
  }

  useEffect(() => {
    inputRef?.current?.focus()
  }, [list.length]);

  useEffect(() => {
    saveProductList(list)
  }, [list]);

  /** Создать новый элемент. */
  const createItem = () => {
    setList(products => (
        [
            ...products,
          {
            id: Date.now(),
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
  const deleteItem = (id) => {
    setList(products => products.filter(product => product.id !== id))
  };

  return {
    list,
    inputRef,
    createItem,
    setItemTitle,
    toggleItem,
    deleteItem,
  };
}
