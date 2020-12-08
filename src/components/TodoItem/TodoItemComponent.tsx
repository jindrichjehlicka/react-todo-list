import React, { useContext } from 'react';
import styles from 'components/TodoItem/TodoItemComponent.module.css';
import { TodoItem } from "model/TodoItem";
import FontAwesome from "react-fontawesome";
import { TodoActionsContext } from "components/TodoList/TodoListComponent";

interface ITodoItem {
    item: TodoItem;
}

const TodoItemComponent = ({item}: ITodoItem) => {
    const itemClasses = `${styles.TodoItemComponent} list-group-item d-flex justify-content-between ${item.finished ? 'bg-light' : ''}`;
    const checkClasses = `mr-4 pointer ${item.finished ? 'text-success' : 'text-muted'}`;
    const deleteClasses = `pointer text-danger`;
    const todoContext= useContext(TodoActionsContext);
    return <div
        key={item.id}
        className={itemClasses}
    >
        <div>{item.text}</div>
        <div>
            <FontAwesome
                name={'check'}
                className={checkClasses}
                onClick={() => todoContext.onFinish(item)}
            />
            <FontAwesome
                name={'trash'}
                className={deleteClasses}
                onClick={() => todoContext.onDelete(item)}
            />
        </div>
    </div>;
};

export default TodoItemComponent;


//EXAMPLE OF React.FC
// const TodoItemComponent: React.FC<{ item: TodoItem }> = ({children, item}) => {
//     const classes = styles.TodoItem.concat(' list-group-item');
//
//     return  <li
//          key={item.id}
//          className={classes}
//      >
//          {item.text}
//      </li>;
// };
