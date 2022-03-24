import React from "react";

function TodoItem({ task }) {
    return (
        <li>
            <input type="radio"></input> {task}
        </li>
    )
}
export default TodoItem;