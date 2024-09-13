import {TodoHandler} from "../todo/TodoHandler";
interface FinishedArgs{
    todos: TodoHandler[];
}

function Finished({todos}: FinishedArgs){
    const finishedTodos = todos.filter((todo)=>todo.getExpireDate()<Date.now());
    return(
        <div>
            Finished
        </div>
    );
}
export{Finished};