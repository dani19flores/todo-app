import React from "react";
import { RemoveButton, TaskContainer, TaskText } from "./styles";

const Task = ({ task, onRemove, onToggle }) => {
    return (
        <TaskContainer>
            <input type="checkbox" onChange={onToggle} />
            <TaskText $completed={task?.completed}>{task?.title}</TaskText>
            <RemoveButton onClick={onRemove}>Remove</RemoveButton>
        </TaskContainer>
    )
}

export default Task;