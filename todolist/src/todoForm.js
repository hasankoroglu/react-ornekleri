import React from "react";

class ToDoForm extends React.Component{
    addTask = (e) => {
        e.preventDefault();
        const inp = document.getElementById("todoInput");
        const val = inp.value;
        inp.value = '';
        this.props.addTask(val);
    }
    render(){
        return(
            <div>
                <div className="todo type1">
                    <form className="input-wrapper" onSubmit={this.addTask}>
<<<<<<< HEAD
                        <input id="todoInput" type="text" className="add-todo" />
=======
                        <input id="todoInput" type="text" className="add-todo" autoComplete="off" />
>>>>>>> 8e47e721cb5c40b2bd4359060f929993dfe3d8f3
                    </form>
                </div>
                <button type="button" className="add-btn" onClick={this.addTask}></button>
            </div>
        );
    }
}

export default ToDoForm