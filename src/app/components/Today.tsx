'use client';
import { TodoHandler} from "../todo/TodoHandler";
import {Todo as TodoComponent} from "./Todo";
import { TodoStatus } from "../todo/TodoHandler";
import build from "next/dist/build";
interface TodayArgs{
    todos: TodoHandler[];
    setTodo: (todo: TodoHandler) =>void;
}
function Today({todos, setTodo} : TodayArgs){
    function buildPredicate(daysLater: number) {
        return (todo: TodoHandler, index: number) => {
            const dateTodo = new Date(todo.getExpireDate());
            const dateToday = new Date(Date.now()+daysLater);
            return dateTodo.toDateString() === dateToday.toDateString() && todo.getStatus() === TodoStatus.ONGO;
        }
    }
    const todosToday = todos.filter(buildPredicate(0));
    const todosTomorrow = todos.filter(buildPredicate(1));
    const todosTheDayAfterTomorrow = todos.filter(buildPredicate(2));
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
                                <TodoComponent key={index} title={todo.getTitle()} 
                                expireDate={todo.getExpireDate()} status={todo.getStatus()}
                                id={todo.getId()}
                                setTodo={setTodo}
                                />
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
                                <TodoComponent key={index} title={todo.getTitle()} 
                                expireDate={todo.getExpireDate()} status={todo.getStatus()}
                                id={todo.getId()}
                                setTodo={setTodo}
                                />
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
                                <TodoComponent key={index} title={todo.getTitle()} 
                                expireDate={todo.getExpireDate()} status={todo.getStatus()}
                                id={todo.getId()}
                                setTodo={setTodo}
                                />
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