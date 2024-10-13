import {useState} from "react";
import {TodoHandler} from "../todo/TodoHandler";

interface SearchBoxArgs{
    todos: TodoHandler[];
    setOpenModal: (openModal: boolean)=>void;
    setSearchedTodos: (searchedTodos: TodoHandler[]) => void;
}
function SearchBox({todos, setOpenModal, setSearchedTodos}: SearchBoxArgs) {
    const [searchText, setSearchText] = useState("");
    return (
        <div className="flex items-center">
            <input 
                type="text" 
                placeholder="搜索" 
                className="w-full px-3 py-2 rounded-lg"
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        const searchedTodos = todos.filter((todo) => {
                            const title = todo.getTitle().toLowerCase();
                            const searchLower = searchText.toLowerCase();
                            return title.includes(searchLower);
                        });
                        setOpenModal(true);
                        setSearchedTodos(searchedTodos);
                    }
                }}
            />
        </div>
    );
}

export {SearchBox};