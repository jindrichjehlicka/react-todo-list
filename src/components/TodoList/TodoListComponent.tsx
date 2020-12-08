import React, { createContext, useEffect, useState } from 'react';
import { TodoItem } from "model/TodoItem";
import { getTodoItems } from "service/todoListService";
import CreateTodoItemComponent from "components/CreateTodoItem/CreateTodoItemComponent";
import { v4 as uuid } from 'uuid';
import { paginate } from "helper/paginate";
import Pagination from "components/Pagination/Pagination";
import TodoItems from "components/TodoItems/TodoItems";
import useDocumentTitle from "hook/use-document-title";
import { PAGE } from "const/page";
import { ModalContext } from "context/modal-context";

const TodoListComponent: React.FC = () => {
    const [todoItems, setTodoItems] = useState<TodoItem[]>([]);

    const [unfinishedTodoItems, setUnfinishedTodoItems] = useState<TodoItem[]>([]);
    const [finishedTodoItems, setFinishedTodoItems] = useState<TodoItem[]>([]);
    const [unfinishedPaginated, setUnfinishedPaginated] = useState<TodoItem[]>([]);
    const [finishedPaginated, setFinishedPaginated] = useState<TodoItem[]>([]);

    const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
    const [itemToDelete, setItemToDelete] = useState<TodoItem | null>(null);
    const title = `(${unfinishedTodoItems.length}) Unfinished Tasks`;


    useEffect(() => {
        setTodoItems(getTodoItems);
    }, []);

    useEffect(() => {
        setUnfinishedTodoItems(todoItems.filter(p => !p.finished));
        setFinishedTodoItems(todoItems.filter(p => p.finished));

    }, [todoItems, currentPageNumber]);

    useEffect(() => {
        setUnfinishedPaginated(paginate(unfinishedTodoItems, currentPageNumber, PAGE.SIZE));
        setFinishedPaginated(paginate(finishedTodoItems, currentPageNumber, PAGE.SIZE));
    }, [unfinishedTodoItems, finishedTodoItems, currentPageNumber]);

    useEffect(() => {
        if (itemToDelete) {
            handleModal({
                title: `Delete task ${itemToDelete.text}`,
                message: <div>Are you sure you want to delete <strong>{itemToDelete.text}</strong>?</div>,
                context: 'test context',
                onCancel: cancelDelete,
                onBackdropClick: cancelDelete,
                onConfirm: confirmDelete
            });
        }
    }, [itemToDelete])
    //custom hook to dynamically set document title
    useDocumentTitle(title);

    const handleCreateItem = (newItemText: string) => {
        const newItem: TodoItem = {
            id: uuid(),
            text: newItemText,
            createdAt: Date(),
            finished: false,
        };

        const updatedItems = [newItem, ...todoItems];
        setTodoItems(updatedItems);
    };

    const handleDeleteItem = (todoItem: TodoItem) => {
        setItemToDelete(todoItem);
    };

    const handleFinishItem = (todoItem: TodoItem) => {
        const updatedItemIndex = todoItems.findIndex(i => i.id === todoItem.id);
        const updatedTodoItems = [...todoItems];
        updatedTodoItems[updatedItemIndex].finished = !updatedTodoItems[updatedItemIndex].finished;
        setTodoItems(updatedTodoItems);
    };

    const handlePageChange = (pageNumber: number) => {
        setCurrentPageNumber(pageNumber);
    };

    const cancelDelete = () => {
        setItemToDelete(null);
        handleModal();

    };
    const confirmDelete = () => {
        const updatedItems = todoItems.filter(i => i.id !== itemToDelete?.id);
        setTodoItems(updatedItems);
        handleModal();
        setItemToDelete(null);
    };

    const {handleModal} = React.useContext(ModalContext);


    return <>
        <div className="row mt-3">
            <div className="col-lg-8 offset-2">
                <CreateTodoItemComponent
                    onAddItem={handleCreateItem}
                />
                <TodoActionsContext.Provider value={{
                    onDelete: handleDeleteItem,
                    onFinish: handleFinishItem
                }}>
                    <TodoItems paginated={unfinishedPaginated}/>
                </TodoActionsContext.Provider>

                <Pagination
                    itemsCount={unfinishedTodoItems.length}
                    pageSize={PAGE.SIZE}
                    currentPage={currentPageNumber}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
        {!!finishedTodoItems.length && <div className="row mt-3">
            <div className="col-lg-8 offset-2">
                <p>Finished tasks</p>
                <TodoActionsContext.Provider value={{
                    onDelete: handleDeleteItem,
                    onFinish: handleFinishItem
                }}>
                    <TodoItems paginated={finishedPaginated}/>
                </TodoActionsContext.Provider>

                <Pagination
                    itemsCount={finishedTodoItems.length}
                    pageSize={PAGE.SIZE}
                    currentPage={currentPageNumber}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>}

    </>;
};


//todo; move to a separate file
export const TodoActionsContext = createContext({
    onDelete: (todoItem: TodoItem) => {
    },
    onFinish: (todoItem: TodoItem) => {
    }
});

export default TodoListComponent;
