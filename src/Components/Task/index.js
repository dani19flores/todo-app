import React from "react";
import { RemoveButton, TaskContainer, TaskText } from "./styles";

const Task = () => {
    return(
        <TaskContainer>
            <input type="checkbox"/>
            <TaskText>Tarea de ejemplo</TaskText>
            <RemoveButton>Romove</RemoveButton>
        </TaskContainer>
    )
}

export default Task;