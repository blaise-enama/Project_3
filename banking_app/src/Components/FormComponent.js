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
            type = "color"
            value = {props.value}
            name = "background color"
            onChange={props.handleChange}
            />

            <label> Text color</label>
            <input
            type = "color"
            value = {props.value}
            name =  "text color"
            onChange={props.handleChange}
            />

            <input
            type = "submit"
            value = "submit"
            />

            </form>
        </div>
    );
}

export default FormComponent;
