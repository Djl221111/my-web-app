import { useEffect, useState } from "react";

class TodoHandler {
    private id: number
    private title: string
    private expireDate: number

    constructor(id: number, title: string, expireDate: number) {
        this.id = id;
        this.title = title;
        this.expireDate = expireDate;
    }

    getTitle() {
        return this.title;
    }

    getExpireDate() {
        return this.expireDate;
    }

    setTitle(title: string) {
        this.title = title;
        this.save();
    }

    setExpireDate(expireDate: number) {
        this.expireDate = expireDate;
        this.save();
    }

    save() {
        TodoHandler.addExistingId(this.id);
        typeof window !== 'undefined' ? window.localStorage.setItem(`todo/${this.id}`, JSON.stringify(this)) : null;
    }

    delete() {
        TodoHandler.deleteExistingId(this.id);
        typeof window !== 'undefined' ? window.localStorage.removeItem(`todo/${this.id}`) : null;
    }

    static getById(id: number) {
        const todo = typeof window !== 'undefined' ? window.localStorage.getItem(`todo/${id}`) : null;
        if (todo === null) {
            return null;
        }
        const parsedTodo = JSON.parse(todo) as TodoHandler;
        return new TodoHandler(parsedTodo.id, parsedTodo.title, parsedTodo.expireDate);
    }
    static getNextId() {
        let latestId = typeof window !== 'undefined' ? window.localStorage.getItem("todo/latestId") : null;
        if (latestId === null) {
            typeof window !== 'undefined' ? window.localStorage.setItem("todo/latestId", "0") : null;
            return 0;
        }
        else {
            const nextId = Number.parseInt(latestId) + 1;
            typeof window !== 'undefined' ? window.localStorage.setItem("todo/latestId", JSON.stringify(nextId)) : null;
            return nextId;
        }
    }

    static getExistingIds(): number[] {
        const existingIds = typeof window !== 'undefined' ? window.localStorage.getItem("todo/ids") : null;
        if (existingIds === null) {
            return [];
        }
        return JSON.parse(existingIds);
    }

    static addExistingId(id: number) {
        const existingIds = typeof window !== 'undefined' ? window.localStorage.getItem("todo/ids") : null;
        if (existingIds === null) {
            typeof window !== 'undefined' ? window.localStorage.setItem("todo/ids", JSON.stringify([id])) : null;
            return;
        }
        const existingIdsArray = JSON.parse(existingIds);
        if (existingIdsArray.includes(id)) {
            return;
        }
        existingIdsArray.push(id);
        typeof window !== 'undefined' ? window.localStorage.setItem("todo/ids", JSON.stringify(existingIdsArray as number[])) : null;
    }

    static deleteExistingId(idToDelete: number) {
        const existingIds = typeof window !== 'undefined' ? window.localStorage.getItem("todo/ids") : null;
        if (existingIds === null) {
            return;
        }
        let existingIdsArray = JSON.parse(existingIds) as number[];
        existingIdsArray = existingIdsArray.filter((id, index) => id !== idToDelete);
        typeof window !== 'undefined' ? window.localStorage.setItem("todo/ids", JSON.stringify(existingIdsArray)) : null;
    }

}

function useTodos(): [TodoHandler[], (todos: TodoHandler[]) => void] {
    const [todos, setTodos] = useState<TodoHandler[]>([]);

    useEffect(() => {
        const existingIds = TodoHandler.getExistingIds();
        const initialTodos = existingIds.map(id => TodoHandler.getById(id)).filter((todo): todo is TodoHandler => todo !== null);
        setTodos(initialTodos);
    }, []);

    const updateTodos = (newTodos: TodoHandler[]) => {
        setTodos(newTodos);
        newTodos.forEach(todo => todo.save());
    };

    // console.log(JSON.stringify(todos));
    return [todos, updateTodos];
}


export { TodoHandler, useTodos };