'use client';
import { Todo } from "../todo/Todo";
interface TodayArgs{
    todos: Todo[];
}
function Today({todos} : TodayArgs){
    return (
        <div className="flex-1 p-4">
            <h1 className="text-blue-600 font-bold text-4xl mb-6"> 今天 </h1>
            <div className="bg-white flex h-5/6 shadow-md rounded-xl divide-x divide-dashed">
             <div className="w-1/3 text-2xl"> 
                上午 
                {
                    todos.map((todo, index) => {
                        return(
                            <div key={index}>{todo.getTitle()}{todo.getExpireDate()}</div>
                        )
                    })

             }
             </div>
             <div className="w-1/3 text-2xl"> 下午 </div>
             <div className="w-1/3 text-2xl"> 晚上 </div>
            </div>
        </div>
    );
}
export {Today};