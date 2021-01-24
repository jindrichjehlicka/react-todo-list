import React from 'react';
import { TodoItem } from "model/TodoItem";
import TodoItemComponent from "components/TodoItem/TodoItemComponent";

interface ITodoItems {
    paginated: TodoItem[],
}

const TodoItems: React.FC<ITodoItems> = ({paginated}: ITodoItems) => (
    <ul className="list-group mb-2">
        {paginated.map((item: TodoItem) =>
            <TodoItemComponent
                key={item.id}
                item={item}
            />
        )}
    </ul>
);

export default  TodoItems;
