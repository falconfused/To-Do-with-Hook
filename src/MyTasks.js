import styled from "styled-components";
import "./App.css"
import { TodoTitle } from "./styled-components";
import { useEffect, useState } from "react";
const MyTasks = ({ toDos, deleteTodo, handlecheck, filter }) => {
    let isChecked = false;
    console.log(filter)
    let filteredArray = toDos;
    if (filter === "active") {
        filteredArray = toDos.filter(item => item.is_active === false);
    }
    if (filter === "completed") {
        filteredArray = toDos.filter(item => item.is_active === true);
    }
    return (
        <div className="MyTasks">
            <div className="save"><h2>My Tasks</h2></div>
            {filteredArray.map((item) => (
                <div className="todo" key={item.id}>
                    <input type="checkbox" onChange={() => {
                        handlecheck(item.id)
                        isChecked = item.is_active
                    }
                    } checked={item.is_active} />
                    <div className="deletediv"><TodoTitle is_active={item.is_active} >{item.title}</TodoTitle>



                        <i className="fa-solid fa-trash" onClick={() => deleteTodo(item.id)} ></i>
                    </div>

                </div>
            ))
            }
        </div >
    );
}
export default MyTasks;