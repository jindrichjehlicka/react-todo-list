import React, { ChangeEvent, useState, KeyboardEvent } from 'react';
import styles from 'components/CreateTodoItem/CreateTodoItemComponent.module.css';

interface ICreateTodoItem {
    onAddItem: (title: string) => void;
}

const CreateTodoItemComponent: React.FC<ICreateTodoItem> = ({onAddItem}) => {
    const [text, setText] = useState('');

    const updateTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const addItem = () => {
        if (!text) return;
        onAddItem(text);
        setText('');
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLFormElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addItem();
        }
    };

    return <form
        className={styles.CreateTodoItemComponent}
        onKeyPress={(e) => handleKeyPress(e)}
        autoComplete="off"
    >
        <div className="form-group row">
            <div className="col-sm-10">
                <input
                    type="text"
                    className="form-control"
                    id="newTask"
                    placeholder="Add new task..."
                    value={text}
                    onChange={(e) => updateTitle(e)}
                />
            </div>
            <div className="col-sm-2">
                <button
                    type={'button'}
                    onClick={addItem}
                    className="btn btn-block btn-primary mb-2"
                >
                    Add
                </button>
            </div>
        </div>
    </form>;
}


export default CreateTodoItemComponent;
