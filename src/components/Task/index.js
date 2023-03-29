
//     const [taskValue, setTaskValue] = useState("");

//     const handleTaskSubmit = (event) => {
//         if (items.find(i => i.name === taskValue)) {
//             event.preventDefault();
//             return;
//         }

//         setItems([...items, { name: taskValue, isCompleted: false }])
//         setTaskValue('')

//         event.preventDefault();
//     }

//     const handleOnTaskChanged = (event, item) => {
//         setItems(items.map(i => {
//             if (i.name === item.name) {
//                 return {
//                     ...i,
//                     isCompleted: event.target.checked
//                 }
//             }

//             return i;
//         }))
//     }

//     return (
//         <div className="todo-list-container">
//             <p>Você conclui um total de {items.filter(i => i.isCompleted).length} tarefas</p>
//             <form onSubmit={handleTaskSubmit}>
//                 <input
//                     type="text"
//                     placeholder="Adicione uma nova tarefa"
//                     value={taskValue}
//                     onChange={(event) => setTaskValue(event.target.value)}
//                 />
//                 <button type="submit">Adicionar tarefa</button>
//             </form>
//             <ul>
//                 {items.map((item) => (
//                     <TodoListItem onTaskChanged={handleOnTaskChanged} item={item} />
//                 ))}
//             </ul>
//         </div>
//     );
// };
export const Task = ({tarefa,isComplet,onTaskChanged }) => {
    return (
        <li>
            <input
                type="checkbox"
                checked={isComplet}
                onChange={(event) => onTaskChanged(event, tarefa,isComplet)}
            />
            {tarefa}
        </li>
    );
};