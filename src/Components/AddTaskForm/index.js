import React from "react";
import { Button, FormContainer, Input } from "./styles";

const AddTaskForm = () => {
    return(
        <FormContainer>
            <form>
                <Input type="text" placeholder="Ingresa una tarea"></Input>
                <Button type="submit">Agregar Tarea</Button>
            </form>
        </FormContainer>
    )
}

export default AddTaskForm;