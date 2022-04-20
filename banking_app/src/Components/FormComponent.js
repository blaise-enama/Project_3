import React from "react";
import "../CSS/FormComponent.css";

function FormComponent(props) {
    console.log('props', props)

    return(
        <div className = "FormComponent">

            <form onSubmit={props.handleForm}>

            <label> Username: </label>
            <input
            type = "text"
            value = {props.value}
            name = "Username"
            className="username"
            onChange={props.handleChange}

            />

            <label> Background color</label>
            <input
            type = "text"
            value = {props.value}
            name = "background color"
            onChange={props.handleChange}
            />

            <label> Text color</label>
            <input
            type = "text"
            value = {props.value}
            name =  "textColor"
            onChange={props.handleChange}
            />

            <button> submit </button> 
            

            </form>
        </div>
    );
}

export default FormComponent;
