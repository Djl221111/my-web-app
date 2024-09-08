'use client';
import { TodoHandler} from "../todo/TodoHandler";
import {Todo as TodoComponent} from "./Todo";
interface TodayArgs{
    todos: TodoHandler[];
}
function Today({todos} : TodayArgs){
    const todosToday = todos.filter((todo, index)=>{
        const dateTodo = new Date(todo.getExpireDate());
        const dateToday = new Date(Date.now());
        return dateTodo.toDateString()===dateToday.toDateString();
    });
    const todosTomorrow = todos.filter((todo, index)=>{
        const dateTodo = new Date(todo.getExpireDate());
        const dateToday = new Date(Date.now());
        dateToday.setDate(dateToday.getDate()+1);
        return dateTodo.toDateString()===dateToday.toDateString();
    });
    const todosTheDayAfterTomorrow = todos.filter((todo, index)=>{
        const dateTodo = new Date(todo.getExpireDate());
        const dateToday = new Date(Date.now());
        dateToday.setDate(dateToday.getDate()+2);
        return dateTodo.toDateString()===dateToday.toDateString();
    });
    return (
        <div className="flex-1 p-4">
            <h1 className="text-blue-600 font-bold text-4xl mb-6"> 今天 </h1>
            <div className="bg-white flex h-5/6 shadow-md rounded-xl divide-x divide-dashed">
                <div className="w-1/3 text-2xl overflow-scroll p-4 space-y-2"> 
                今天 
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
                <div className="w-1/3 text-2xl overflow-scroll p-4 space-y-2"> 明天 
                <div>
                    {
                        todosTomorrow.map((todo,index)=>{
                            return (
                                <TodoComponent key={index} title={todo.getTitle()} expireDate={todo.getExpireDate()}/>
                            );
                        })
                    }
                </div>
                </div>
                <div className="w-1/3 text-2xl overflow-scroll p-4 space-y-2"> 后天 
                <div>
                    {
                        todosTheDayAfterTomorrow.map((todo,index)=>{
                            return (
                                <TodoComponent key={index} title={todo.getTitle()} expireDate={todo.getExpireDate()}/>
                            );
                        })
                    }
                </div>
                </div>
            </div>
        </div>
    );
}
export {Today};