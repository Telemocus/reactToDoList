import React, { useState } from "react";

function ToDoList(){

     const [ tasks, setTasks] = useState([]);

     const [newTask, setNewTask] = useState(" ");

     // handleClick Function 
     function handleInputChange(event) {
          setNewTask(event.target.value);
     }

     // Add function
     function addTask(index) {
          setTasks(t => [ ...t, newTask]); 
          setNewTask("");
     }
     // Delete function
     function deleteTask(index) {
          const updatedTasks = tasks.filter((_, i) => i !== index);
          setTasks(updatedTasks);
     }
     
     // Move the list up
     function moveTaskUp(index) {
          if(index > 0 ){
               const updatedTasks = [...tasks];
               [updatedTasks[index], updatedTasks[index - 1]] =
               [updatedTasks[index - 1], updatedTasks[index]];
               setTasks(updatedTasks);
          }
     }

     // Move the list down
     function moveTaskDown(index){
           if(index < tasks.length - 1 ){
               const updatedTasks = [...tasks];
               [updatedTasks[index], updatedTasks[index + 1]] =
               [updatedTasks[index + 1], updatedTasks[index]];
               setTasks(updatedTasks);
          }
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