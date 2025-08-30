import React from "react";
import { ListContainer } from "./styles";
import Task from "../Task";
import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../../actions";

const TaskList = () =>{
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks.tasks);

    const handleTaskRemove = (id) => {
        dispatch(removeTask(id));
        
    }

    return(
        <ListContainer>
            {
                tasks.map(task =>(
                    <Task 
                        key={task.id}
                        task={task.task}
                        onRemove={() => handleTaskRemove(task.id)}
                    />
                ))
            }
            <Task/>
        </ListContainer>
    )
}

export default TaskList;