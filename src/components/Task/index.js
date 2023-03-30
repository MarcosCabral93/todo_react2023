
export const Task = ({item, onChangeTask }) => {
    return (
        <li className="list-group-item">
            <input 
                type="checkbox"
                checked={item.isCompleted}
                onChange={(event) => onChangeTask(event, item)}
            />
            {item.name}
        </li>
    );
};