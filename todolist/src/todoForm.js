import React from "react";

class ToDoForm extends React.Component{
    render(){
        return(
            <div>
                <div className="todo type1">
                    <form className="input-wrapper">
                        <input id="todoInput" type="text" className="add-todo" />
                    </form>
                </div>
                <button type="button" className="add-btn"></button>
            </div>
        );
    }
}

export default ToDoForm