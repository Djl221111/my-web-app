import Modal from "react-modal";
import {TodoHandler} from "../todo/TodoHandler";
import {Todo} from "./Todo";
interface SearchResultsArgs {
    searchedTodos: TodoHandler[];
    openModal: boolean;
    setOpenModal: (openModal: boolean) => void;
}
function SearchResults({searchedTodos, openModal, setOpenModal}: SearchResultsArgs){
    return (
        <div onClick={()=>setOpenModal(false)}>
            <Modal isOpen={openModal}>
                <div className="flex-1 p-4">
                    <h1 className="text-red-600 font-bold text-4xl mb-6"> 搜索结果 </h1>
                    <div className="bg-white grid grid-cols-4 gap-4 h-5/6 shadow-md rounded-xl overflow-y-auto p-4">
                    {
                        searchedTodos.map((todo, index)=>{
                            return (
                                <Todo key={index} title={todo.getTitle()} expireDate={todo.getExpireDate()}/>
                            );
                        })
                    }
                    </div>
                </div>
            </Modal>
        </div>
    );
}
export {SearchResults};