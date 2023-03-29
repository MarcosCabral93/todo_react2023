
import { useState } from "react";
import {Task} from '../Task'
export const TaskCard=()=>{

    const tastItems = [
        { name: "Lavar a louça", isCompleted: true },
        { name: "Compar comida", isCompleted: false },
        { name: "Passear com o dog", isCompleted: false },
    ];
const [task, setTask]=useState(tastItems)

return (

    <div>
        <ul>

     
        {
            task.map((item)=>{
                 
                <Task tarefa={item.name} isComplet={item.isCompleted}/>
            })
        }
   </ul>
    </div>
)

}