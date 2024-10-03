'use client';
import { Add } from "./components/Add";
import { All } from "./components/All";
import { Finished } from "./components/Finished";
import { SideBar } from "./components/SideBar";
import{ Today} from "./components/Today";
import { useState } from "react";
import {TodoHandler, useTodos} from "./todo/TodoHandler";
import { SearchResults } from "./components/SearchResults";
import { TodoStatus } from "./todo/TodoHandler";
enum Page{
  TODAY,
  ALL,
  FINISHED,
  ADD
}

export default function Home() {
  const [page, setPage] = useState(Page.TODAY);
  const [todos, setTodos] = useTodos();
  const [openModal, setOpenModal] = useState(false);
  const [searchedTodos, setSearchedTodos] = useState<TodoHandler[]>([]);
  function setTodo(todo: TodoHandler){
    const todosExcluteTodo = todos.filter((t) => t.getId() !== todo.getId());
    if (todo.getStatus()===TodoStatus.TO_BE_DELETED){
      todo.delete();
    }
    else{
      todosExcluteTodo.push(todo);
    }
    setTodos(todosExcluteTodo);
  }
  function setPageToAll(){
    setPage(Page.ALL);
  }
  function setPageToToday(){
    setPage(Page.TODAY);
  }
  function setPageToFinished(){
    setPage(Page.FINISHED);
  }
  function setPageToAdd(){
    setPage(Page.ADD);
  }
  return (
    <main>
      <div className="bg-gray-100">
        <div className="flex h-screen">
          <SideBar todos={todos} setPageToAll={setPageToAll} setPageToToday={setPageToToday} 
          setPageToFinished={setPageToFinished} setPageToAdd={setPageToAdd} 
          setOpenModal={setOpenModal} setSearchedTodos={setSearchedTodos}/>

          {page === Page.TODAY && <Today todos={todos} setTodo={setTodo}/>}
          {page === Page.ALL && <All todos={todos} setTodo={setTodo}/>}
          {page === Page.FINISHED && <Finished todos={todos} setTodo={setTodo}/>}
          {page === Page.ADD && <Add todos={todos} setTodos={setTodos}/>}
          <SearchResults openModal={openModal} setOpenModal={setOpenModal} searchedTodos={searchedTodos} setTodo={setTodo}/>
        </div>
      </div>
    </main>
  );
}
