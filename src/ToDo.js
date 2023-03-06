import styledComponents from "styled-components";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import AddToDoSection from "./AddToDoSection";
import MyTasks from "./MyTasks";
import { BlueButton } from "./styled-components";

const ToDo = () => {

    const [toDos, setToDos] = useState([]);
    const [filter, setFilter] = useState("all");
    let searchvalue = "";
    const changesearchvalue = (e) => { searchvalue = e.target.value; }


    useEffect(() => {
        const localData = localStorage.getItem('to-dos');
        if (localData) {
            setToDos(JSON.parse(localData));
        } else {
            fetch('https://6325a6b74cd1a2834c41e69e.mockapi.io/todo-list/todos')
                .then(response => response.json())
                .then(data => {
                    setToDos(data);
                    localStorage.setItem('to-dos', JSON.stringify(data));
                })
                .catch(error => console.error(error));
        }
    }, []);



    const setLocalStorage = () => { localStorage.setItem('to-dos', JSON.stringify(toDos)); }
    const addTodo = (val) => {
        // event.preventDefault();
        // console.log(val)

        // event.preventdefault();
        const newToDo = {
            title: val,
            is_active: false,
            id: uuidv4(),

        };
        setToDos([...toDos, newToDo]);
        // console.log(toDos);
    }
    const changeFilter = (filterName) => { setFilter(filterName); }

    const deleteTodo = (id) => {
        setToDos(toDos.filter(item => item.id !== id));
    };
    const handlecheck = (id) => {
        setToDos(toDos.map(item => {
            if (item.id === id) {
                return { ...item, is_active: !item.is_active }
            }
            return item;
        }))
    }
    const printTodos = () => { console.log(toDos) }

    return (
        <div className="ToDo">
            <h1>ToDo List</h1>
            <div className="filter">
                <BlueButton onClick={() => { changeFilter('all') }}>All</BlueButton>
                <BlueButton onClick={() => { changeFilter('active') }}>Active</BlueButton>
                <BlueButton onClick={() => { changeFilter('completed') }}>Completed</BlueButton></div>
            <div className="save"><h2>Create To-dos</h2></div>
            <AddToDoSection handlecheck={handlecheck} addTodo={addTodo} setLocalStorage={setLocalStorage} printTodos={printTodos} toDos={toDos} deleteTodo={deleteTodo} />
            <MyTasks toDos={toDos} deleteTodo={deleteTodo} handlecheck={handlecheck} filter={filter}/>
            <div className="save"><BlueButton onClick={setLocalStorage}>Save</BlueButton> </div>

        </div >
    );
}

export default ToDo;