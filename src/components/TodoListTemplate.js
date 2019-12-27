import React from "react";
import "./TodoListTemplate.css";

const TodoListTemplate = ({form,children,pallet}) =>{
    return (
        <div  className="container">
            <div className="row">
                 <div id="header" className="col">
                    <span id="title">해야할 일 리스트 with React.js</span>
                    
                 </div>
                 
            </div>
            <div className="row">
                <div id="pallet" className="col">
                   {pallet}
                </div>
            </div>

            <div className="row">
                 <div id="middle" className="col">
                   {form}
                 </div>

            </div>

            <div className="row">
                <div id="bottom" className="col">
                    {children}
                </div>

            </div>
        </div>

    );
};

export default TodoListTemplate;