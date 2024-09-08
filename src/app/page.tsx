'use client';
import { Add } from "./components/Add";
import { All } from "./components/All";
import { Finished } from "./components/Finished";
import { SideBar } from "./components/SideBar";
import{ Today} from "./components/Today";
import { useState } from "react";
import {TodoHandler, useTodos} from "./todo/TodoHandler";
enum Page{
  TODAY,
  ALL,
  FINISHED,
  ADD
}

export default function Home() {
  const [page, setPage] = useState(Page.TODAY);
  const [todos, setTodos] = useTodos();
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
          <SideBar setPageToAll={setPageToAll} setPageToToday={setPageToToday} setPageToFinished={setPageToFinished} setPageToAdd={setPageToAdd}/>
          {page === Page.TODAY && <Today todos={todos}/>}
          {page === Page.ALL && <All/>}
          {page === Page.FINISHED && <Finished/>}
          {page === Page.ADD && <Add todos={todos} setTodos={setTodos}/>}
        </div>
      </div>
    </main>
  );
}
