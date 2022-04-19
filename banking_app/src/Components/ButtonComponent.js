import { React, Component } from "react";
import FormComponent from "./FormComponent"
import "../CSS/ButtonComponent.css";

class ButtonComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            click: false,
            show: false, 
            username : " " , 
            backgroundColor : " ", 
            textColor : " "
        }
    }


    handleClick= () => {
        console.log ("click")
        this.setState({
            click: true,
        })
        // return (<FormComponent handleSubmit = {this.handleForm} show={this.state.show}/>)
    }

    handleForm = (e) =>{ //stops the page from refreshing the form 
        console.log("Formm")
        e.preventDefault() 
    }

    handleChange = (e) =>{
        this.setState({
           [e.target.name] : e.target.value 
        })
        console.log(e.target.value) 
    } 

    render() {
        const { click , value} = this.state
        return (
            <div className= 'button'>
                <button onClick = {this.handleClick} click={click}>Customize Profile </button>
                {click ? <FormComponent handleSubmit = {this.handleForm}  show={this.state.show} handleChange = {this.handleChange}  /> : null}  
                {}
            </div>
        );
    }

}

export default ButtonComponent;