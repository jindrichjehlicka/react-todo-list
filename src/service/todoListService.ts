import { TodoItem } from "model/TodoItem";

const defaultListItems: TodoItem[] = [
    {
        id: 1,
        text: 'Walk the Dog',
        createdAt: '21/11/2020',
        finished: false
    },
    {
        id: 2,
        text: 'Get Groceries',
        createdAt: '19/11/2020',
        finished: false
    }, {
        id: 3,
        text: 'Call Mom',
        createdAt: '18/11/2020',
        finished: false
    },
    {
        id: 4,
        text: 'Pay the internet bill',
        createdAt: '18/11/2020',
        finished: true
    },

];

export function getTodoItems(): TodoItem[] {
    //todo get from local storage
    return defaultListItems;
}
