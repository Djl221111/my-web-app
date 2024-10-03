import {TodoHandler} from "../todo/TodoHandler";
import { TodoStatus } from "../todo/TodoHandler";
import { Todo } from "./Todo";
interface FinishedArgs{
    todos: TodoHandler[];
    setTodo: (todo: TodoHandler) => void;
}

function Finished({todos, setTodo}: FinishedArgs){
    const finishedTodos = todos.filter((todo)=>todo.getStatus()===TodoStatus.FINISHED);
    return(
        <div className="flex-1 p-4">
            <h1 className="text-red-600 font-bold text-4xl mb-6"> 已完成 </h1>
            <div className="bg-white grid grid-cols-4 gap-4 h-5/6 shadow-md rounded-xl overflow-y-auto p-4">
            {
                finishedTodos.map((todo, index)=>{
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
export{Finished};