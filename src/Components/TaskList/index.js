import React, { useEffect } from "react";
import { ListContainer } from "./styles";
import Task from "../Task";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, removeTask, toggleTask } from "../../state/stasks.slice";
import { FAILED, IDLE, LOADING, SUCCEEDED } from "../../state/status";

const TaskList = () =>{
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks.tasks);
    const status = useSelector(state => state.tasks.status);

    useEffect(() => {
        status === IDLE && dispatch(fetchTasks());
    }, [dispatch, status])

    const handleTaskRemove = (id) => {
        dispatch(removeTask(id));
        
    }

    const handleToggle = id =>{
        dispatch(toggleTask(id));
    }

    return(
        <ListContainer>
            {
                (tasks && status === SUCCEEDED) && tasks.map(task =>(
                    <Task 
                        key={task.id}
                        task={task}
                        onRemove={() => handleTaskRemove(task.id)}
                        onToggle={() => handleToggle(task.id)}
                    />
                ))
            }
            {
                status === LOADING && <p>Cargando tareas ....</p>
            }

            {
                status === FAILED && <p>Ha habido un problema</p>
            }
        </ListContainer>
    )
}

export default TaskList;