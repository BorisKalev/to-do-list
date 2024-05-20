import React,{useState} from "react"

function ToDoList(){
    const [task, setTask] = useState(["Do bed","Eat BreakFast", "Brushing teeth"])
    const [newTask, setNewTask] = useState("");

    function handleInputChange (event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim("")){
            setTask([...task, newTask]);
        setNewTask("");
        }
        
    }

    function deleteTask(index){
        setTask(task.filter((_task, i) => index!==i));
    }

    function moveTaskUp(index){
        if(index === 0){
            
        }else{
            const updatedTasks = [...task];
            [updatedTasks[index] , updatedTasks[index-1]] = 
            [updatedTasks[index-1] , updatedTasks[index]];
            setTask(updatedTasks);
        }

    }

    function moveTaskDown(index){
        if(index === task.length -1){

        }else{
            const updatedTasks = [...task];
            [updatedTasks[index] , updatedTasks[index+1]] = 
            [updatedTasks[index+1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    }

    return(<>
    <div className="to-do-list">
         <div>
        <h1 className="title">To-Do-List</h1>
        <input type="text" placeholder="Enter a task..." className="input-task" value={newTask}
          onChange={handleInputChange}/>
        <button className="add-button" onClick={addTask}>Add</button>
    </div>
        <ol>
        {task.map((el, index)=> (
            <li key={index}>
            <span className="text">{el}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>☝️</button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>👇</button>
            </li>
            ))}
    </ol>
    </div>
   
    </>);
}
export default ToDoList