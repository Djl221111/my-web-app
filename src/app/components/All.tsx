import {Todo} from "./Todo";
import {TodoHandler} from "../todo/TodoHandler";
interface AllArgs{
    todos: TodoHandler[];
    setTodo: (todo: TodoHandler) => void;
}
function All({todos, setTodo}: AllArgs){
    return(
        <div className="flex-1 p-4">
            <h1 className="text-gray-600 font-bold text-4xl mb-6"> 全部 </h1>
            <div className="bg-white grid grid-cols-4 gap-4 h-5/6 shadow-md rounded-xl overflow-y-auto p-4">
                {
                    todos.map((todo, index)=>{
                        return (
                            <Todo key={index} title={todo.getTitle()} 
                            expireDate={todo.getExpireDate()} status={todo.getStatus()}
                            id={todo.getId()}
                            setTodo={setTodo}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}
export{All};