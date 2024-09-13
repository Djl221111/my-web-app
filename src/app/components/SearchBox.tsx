import {useState} from "react";
import {TodoHandler} from "../todo/TodoHandler";

interface SearchBoxArgs{
    todos: TodoHandler[];
    setOpenModal: (openModal: boolean)=>void;
    setSearchedTodos: (searchedTodos: TodoHandler[]) => void;
}
function SearchBox({todos, setOpenModal, setSearchedTodos}: SearchBoxArgs){
    const [searchText, setSearchText] = useState("");
    return (
        <div className="flex items-center">
        <input type="text" placeholder="搜索" className="w-full px-3 py-2 rounded-lg"
        onChange={(e)=>setSearchText(e.target.value)}
        onKeyDown={(e)=>{
            if(e.key==="Enter"){
                const searchedTodos = todos.filter((todo)=>todo.getTitle().includes(searchText));
                setOpenModal(true);
                setSearchedTodos(searchedTodos);
            }
        }}
        >
        </input>
        </div>
    );
}

export {SearchBox};