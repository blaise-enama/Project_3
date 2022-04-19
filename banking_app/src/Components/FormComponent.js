import React from "react";

function FormComponent(props) { 
    console.log('props', props)

    return(
        <div className = "FormComponent">
            <form >

            <label> Username: </label>
            <input 
            type = "text"
            value = {props.value}
            name = "Username"
            />

            <label> Background color</label>
            <input 
            type = "color"
            value = {props.value} 
            name = "background color"
            />

            <label> Text color</label>
            <input 
            type = "color"
            value = {props.value} 
            name =  "text color"
            />

            <input 
            type = "submit"
            />

            </form>
        </div>
        
    );
}

export default FormComponent; 