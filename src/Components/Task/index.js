import React from "react";
import { RemoveButton, TaskContainer, TaskText } from "./styles";

const Task = ({task, onRemove}) =>{
    return(
        <TaskContainer>
            <input type="checkbox"/>
            <TaskText>{task}</TaskText>
            <RemoveButton onClick={onRemove}>Remove</RemoveButton>
        </TaskContainer>
    )
}

export default Task;