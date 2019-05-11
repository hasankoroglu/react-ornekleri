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
                        <input id="todoInput" type="text" className="add-todo" autoComplete="off" />
                    </form>
                </div>
                <button type="button" className="add-btn" onClick={this.addTask}></button>
            </div>
        );
    }
}

export default ToDoForm