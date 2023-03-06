
import { BlueButton, InputField } from "./styled-components";

import MyTasks from "./MyTasks";
const AddToDoSection = ({
    addTodo, setLocalStorage, printTodos, toDos, deleteTodo, handlecheck
}) => {
    let searchvalue = "";
    const changesearchvalue = (e) => { searchvalue = e.target.value; }
    return (
        <div className="AddToDoSection">
            <InputField onChange={changesearchvalue} />
            <BlueButton onClick={
                () => { addTodo(searchvalue) }
            }>Add</BlueButton>
        </div >
    );
}
export default AddToDoSection;