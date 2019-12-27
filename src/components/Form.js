import React from "react";
import "./Form.css";

const Form = ({value,onChange, onCreate, onKeyPress,color}) => {
    return (
        <div id="form">
            <input  value={value} onChange={onChange} onKeyPress={onKeyPress} style={{color : color}} />
            <button id="add" type="button" className="btn btn-primary" onClick={onCreate}>추가하기</button> 
        </div>   
       
    );

};

export default Form;