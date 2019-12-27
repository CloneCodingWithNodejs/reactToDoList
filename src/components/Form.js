import React from "react";
import "./Form.css";

const Form = ({value,onChange, onCreate, onKeyPress}) => {
    return (
        <div id="form">
            <input  value={value} onChange={onChange} onKeyPress={onkeypress} />
            <button id="add" type="button" className="btn btn-primary" onClick={onCreate}>추가하기</button> 
        </div>   
       
    );

};

export default Form;