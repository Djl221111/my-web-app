'use client';
import { TodoHandler} from "../todo/TodoHandler";
import {Todo as TodoComponent} from "./Todo";
interface TodayArgs{
    todos: TodoHandler[];
}
function Today({todos} : TodayArgs){
    const todosToday = todos.filter((todo,index)=>{
        const date = new Date(todo.getExpireDate());
        const now = new Date(Date.now());
        if (date.getFullYear()===now.getFullYear()&&
            date.getMonth()===now.getMonth()&&
            date.getDay()===now.getDay()){
                return todo;
        }
    });
    return (
        <div className="flex-1 p-4">
            <h1 className="text-blue-600 font-bold text-4xl mb-6"> 今天 </h1>
            <div className="bg-white flex h-5/6 shadow-md rounded-xl divide-x divide-dashed">
                <div className="w-1/3 text-2xl"> 
                上午 
                <div className="space-y-2 p-2">
                    {
                        todosToday.map((todo, index) => {
                            return(
                                <TodoComponent key={index} title={todo.getTitle()} expireDate={todo.getExpireDate()}/>
                            );
                        })
                    }
                </div>
                </div>
                <div className="w-1/3 text-2xl"> 明天 </div>
                <div className="w-1/3 text-2xl"> 后天 </div>
            </div>
        </div>
    );
}
export {Today};