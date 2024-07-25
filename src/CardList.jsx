import { Card } from './Card';
import './CardList.css';

export const CardList = ({
  list,
  inputRef,
  onItemTitleChange,
  onItemToggle,
  onItemDelete,
}) => {
  return (
    <ul className="card-list">
      {list.map(({ id, title, done }) => {
        return (
          <li key={id} className="card-list__item">
            <Card
              id={id}
              title={title}
              inputRef={inputRef}
              done={done}
              onTitleChange={onItemTitleChange}
              onToggle={onItemToggle}
              onDelete={onItemDelete}
            />
          </li>
        );
      })}
    </ul>
  );
};
