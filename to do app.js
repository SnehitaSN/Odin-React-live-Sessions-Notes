// import {useState, useReducer} from 'react';

//  const initialval=0;

//  //reducer : logicals
//  const reducer=(state,action)=>{
//   switch (action.type){
//     case 'inc':
//       return state +1
//       default:
//         return state
//   }
//  }

// function App() {
//   const [count, dispatch ] = useReducer(reducer,initialval);

//   //const[count,setCount]=useState(0);
//   //const inc = ()=>{
//   // setCount(count+1)
//   //}
//   return (
//     <>
//     <div className="App">
//       <center>
//       <h1 className="text-white mt-5T">Counter {count}</h1>
//       <button className='btn btn-warning mt-3'>Increament</button>
//       </center>
     
//     </div>
//     </>
//   );
// }

// export default App;





import React, { useState } from 'react';
//mock data
import data from "./data.json";
//components
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';

function App() {
  
  const [ toDoList, setToDoList ] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <ToDoForm addTask={addTask}/>
    </div>
  );
}

export default App;