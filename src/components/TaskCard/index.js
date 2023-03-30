
import { useState } from "react";
import { Task } from '../Task'

export const TaskCard = () => {


    const [tasks, setTasks] = useState([
        { name: "Lavar a louça", isCompleted: true },
        { name: "Compar comida", isCompleted: false },
        { name: "Passear com o dog", isCompleted: false },
    ])
    const [newTask, setNewTask] = useState('')

    const ChangeTasks = (event, item) => {

        setTasks(tasks.map(i => {
            if (i.name === item.name) {
                return {
                    ...i,
                    isCompleted: event.target.checked
                }
            }

            return i;
        }))
    }

    const saveNewTask = (e) => {
        e.preventDefault()
        if (tasks.find(e => e.name === newTask)) {
            return alert("Tarefa já criada")
        }
        setNewTask('')
        setTasks([...tasks, { name: newTask, isCompleted: false }])

    }

    return (
        <section className="d-flex justify-content-center align-items-center" style={{ height: "80vh"}}>
            <div className="col-xl-6 ">
                <div className=" col-xl-10  m-auto">

                    <form onSubmit={saveNewTask} >

                        <div class="input-group">
                            <input type="text" value={newTask}
                                onChange={(event) => setNewTask(event.target.value)}
                                className="form-control"
                                placeholder="Adicionar Tarefa"
                                aria-label="Adicionar Tarefa"
                                aria-describedby="button-addon2" />
                            <button class="btn  btn-primary" type="submit" id="">Adicionar tarefa</button>
                        </div>

                    </form>
                </div>


            </div>
            <div className="col-xl-6    ">
                <h3 className="text-center">
                    {tasks.filter(e => e.isCompleted).length} Tarefas concluídas
                </h3>
                <br />
                <ul className='list-group col-10  m-auto'>
                    {
                        tasks.map((item) => {
                            return <Task item={item} onChangeTask={ChangeTasks} />
                        })
                    }
                </ul>
            </div>
        </section>
    )

}