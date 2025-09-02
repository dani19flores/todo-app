import styled from "styled-components";

const TaskContainer = styled.section`
    display: flex;
    align-items: center;
    padding: 12px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 5px;
    margin-bottom: 10px;
`;

const TaskText = styled.p`
  flex-grow: 1;
  text-decoration: ${({ $completed }) => ($completed ? "line-through" : "none")};
`;

const RemoveButton = styled.button`
    padding: 5px;
    background-color: #999;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

export { TaskContainer, TaskText, RemoveButton }