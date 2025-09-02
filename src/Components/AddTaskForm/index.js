import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, FormContainer, Input } from "../AddTaskForm/styles";
import { addTaks } from "../../state/stasks.slice";

const AddTaskForm = () => {
    const [formTask, setFormTask] = useState('');
    const dispatch = useDispatch();

    const handleTaskChange = e =>{
        setFormTask(e.target.value);
    }

    const handleSubmit = e =>{
        e.preventDefault();
        if(formTask.trim() === '') return;

        const newTask = {
            id: Date.now(),
            title:formTask,
            completed: false,
        }
        
        dispatch(addTaks(newTask));
        setFormTask('');

    }

    return(
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <Input 
                    type="text" 
                    placeholder="Ingresa una tarea" 
                    onChange={handleTaskChange} 
                    value={formTask}
                />
                <Button type="submit">Agregar Tarea</Button>
            </form>
        </FormContainer>
    )
}

export default AddTaskForm;