import React from "react";
import TodoItem from "./TodoItem";
function Todolist({ todo, ...props }) {
    return (

        todo.map((item, index) => (
            <TodoItem key={index} index={index} task={item.task} />
        ))

    );
}
export default Todolist;