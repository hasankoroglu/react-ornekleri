import React from 'react';

class TodoList extends React.Component{
    render(){
        const items_left = 0;
        const items = this.props.myTasks.map((elem,i)=>{
            return(
                <li>
                    <span className="id">{i+1}</span>
                    <span className="title">{elem}</span>
                    <span className="type" />
                    <span className="delete" />
                </li>
            );
        });
        return(
            <div>
                <div className="todo-list">
                    <ul>
                        {items}
                    </ul>
                </div>
                <div className="todo-filter">
                    <div className="left">
                        <span>{items_left} items left</span>
                    </div>
                    <div className="right">
                        <ul>
                            <li><span className="active">All</span></li>
                            <li><span>Active</span></li>
                            <li><span>Completed</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoList;