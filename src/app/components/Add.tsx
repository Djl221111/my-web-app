import {Todo} from "../todo/Todo";
import {Button} from"./Button";
import {useState} from"react";
interface AddArgs{
    todos: Todo[];
    setTodos: (todos: Todo[]) => void;
}
function Add({todos, setTodos}: AddArgs){
    const [title, setTitle] = useState("");
    const [date, setDate] = useState(0);
    function setTitleOnChange(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value);
        setTitle(e.target.value);
    }
    function setDateOnChange(e: React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value);
        const date = new Date(e.target.value);
        setDate(date.getTime());
    }
    function addTodo(){
        const nextTodoId = Todo.getNextId();
        const todo = new Todo(nextTodoId, title, date);
        todos.push(todo);
        setTodos(todos);
    }
    return(
        <div className="flex-1 p-4 flex">
            <div className="m-auto w-2/3 h-1/2 bg-white rounded-2xl shadow-lg flex flex-col justify-center items-center space-y-2">
            <input type="text" placeholder="请输入代办内容" className="p-2 border rounded-lg w-1/3"></input>
            <input type="date" className="p-2 border rounded-lg w-1/3"></input>
            <Button icon="✓" bgColor="bg-green-500" label="添加" ></Button>
            </div>
        </div>
    );
}
export{Add};