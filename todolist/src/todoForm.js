import React from "react";

class ToDoForm extends React.Component{
    constructor(){
        super();
        this.addTask = this.addTask.bind(this);
    }
    addTask(e){
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
                    <form className="input-wrapper" onSubmit={e => this.addTask(e)}>
                        <input id="todoInput" type="text" className="add-todo" />
                    </form>
                </div>
                <button type="button" className="add-btn" onClick={e => this.addTask(e)}></button>
            </div>
        );
    }
}

export default ToDoForm