import React, { useState } from "react";

function ToDoList(){

     const [ tasks, setTasks] = useState([]);

     const [newTask, setNewTask] = useState(" ");

     function handleInputChange(event) {
          setNewTask(event.target.value);
     }

     function addTask(index) {
          setTasks(t => [ ...t, newTask]); 
          setNewTask("");
     }

     function deleteTask(index) {
          // deleteTask( d => [index])
     }

     function moveTaskUp(index) {

     }

     function moveTaskDown(index){

     }
     return(
          <div className="to-do-list">

               <h1>To-Do-List</h1>
               <div>
                    <input 
                    type="text" 
                    placeholder="Enter A Text..."
                    value={newTask}
                    onChange={handleInputChange}
                     />

                     <button className="add-button" onClick={addTask}>
                         Add
                     </button>

                     <ol>
                         {tasks.map((task,index)=> 
                              <li key={index}>
                                   <span className="text">{task} {' '}</span>
                                   <button className="delete-btn" onClick={()=>deleteTask(index)}>Delete</button>
                                   <button className="up-btn star" onClick={()=>moveTaskUp(index)}>Up</button>
                                   <button className="down-btn star" onClick={()=>moveTaskDown(index)}>Down</button>
                              </li>
                         )}
                     </ol>
               </div>
          </div>
     )
}

export default ToDoList;