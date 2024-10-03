import { TodoHandler, TodoStatus } from "../todo/TodoHandler";

interface TodoArgs{
    title: string,
    expireDate: number,
    id: number,
    status: TodoStatus,
    setTodo: (todo: TodoHandler) => void
}
function convertTimestampToDateString(timestamp: number){
    let date = new Date(timestamp);
    return `${date.toDateString()}`;
}
function Todo({id, title, expireDate, status, setTodo} : TodoArgs){
    function handleDoubleClick(){
        if(status === TodoStatus.ONGO) {
            const todo = new TodoHandler(id, title, expireDate);
            todo.setStatus(TodoStatus.FINISHED);
            setTodo(todo);
        }
        else if (status === TodoStatus.FINISHED || status=== TodoStatus.EXPIRED){
            const todo = new TodoHandler(id, title, expireDate);
            todo.setStatus(TodoStatus.TO_BE_DELETED);
            setTodo(todo)
        }
    }
    const BASE_COLOR = "from-indigo-500 via-purple-500 to-pink-500";
    const FINISHED_COLOR = "from-red-500 to-orange-500";
    return (
        <div className={`border rounded-md shadow-md
        bg-gradient-to-r ${status === TodoStatus.FINISHED ? FINISHED_COLOR : BASE_COLOR}
        text-white font-bold p-3 hover:opacity-80 h-24`}
        onDoubleClick={handleDoubleClick}
        >
        <div> {title} </div>
        <div className="text-sm font-light"> {convertTimestampToDateString(expireDate)} </div> 
    </div>
    );
}
export {Todo};