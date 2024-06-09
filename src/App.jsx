import {useReducer, useRef, useState} from 'react'

import './App.css'
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

const mockData = [
    {
        id : 0,
        isDone:false,
        content : "React 공부하기",
        date : new Date().getTime(),
    },
    {
        id : 1,
        isDone:false,
        content : "빨래하기",
        date : new Date().getTime(),
    },
    {
        id : 2,
        isDone:false,
        content : "노래 연습하기",
        date : new Date().getTime(),
    }
]

function reducer(state, action){
    switch(action.type){
        case 'CREATE' : return [action.data , ...state];
        case 'UPDATE' :
            return state.map((item)=>item.id===action.targetId? {...item, isDone : !item.isDone} : item);
        case "DELETE" :
            return state.filter((todo)=>todo.id !== action.targetId)
        default : return state;
    }
}

function App() {
    const [todos, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

  const onUpdate = (targetId) =>{
      dispatch({
          type : "UPDATE",
          targetId : targetId
      })
      // //Todos State 값들 중에 targetId 같은거 isDone 바꾸기
      // setTodos(todos.map((todo)=>
      //     todo.id === targetId
      //         ? { ...todo, isDone : !todo.isDone}
      //         : todo
      // )
      // )
  }

  const onDelete = (targetId) =>{
        //Todos State 값들 중에 targetId 같은거 isDone 바꾸기
      dispatch({
          type : "DELETE",
          targetId : targetId
      })
        // setTodos(todos.filter((todo)=>todo.id !== targetId))
    }

  const onCreate = (content) =>{
      dispatch({
          type :"CREATE",
          data : {
              id : idRef.current++,
              isDone: false,
              content : content,
              date : new Date().getTime(),
          },
      });
      // const newTodo = {
      //     id : idRef.current++,
      //     isDone : false,
      //     content : content,
      //     date : new Date().getTime()
      // }
      //
      // setTodos( [newTodo, ...todos])
  }


  return (
    <div className={"App"}>
      <Header/>
      <Editor onCreate={onCreate}/>
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App
