import { React, Component } from "react";
import FormComponent from "./FormComponent"
import "../CSS/ButtonComponent.css";


class ButtonComponent extends Component {

    constructor(props) {
        
        super(props)
        this.state = {
            click: false,
            show: false,

        }
    }


    handleClick= () => {
      console.log (this.props)
        console.log ("click")
        this.setState({
            click: true,
        })
        // return (<FormComponent handleSubmit = {this.handleForm} show={this.state.show}/>)
    }



    render() {
        const { click , value} = this.state
        return (
            <div className= 'button'>
                <button onClick = {this.handleClick} click={click}>Customize Profile </button>
                {click ? <FormComponent handleForm = {this.props.handleForm}  show={this.state.show} handleChange = {this.props.handleChange}  /> : null}
                {}
            </div>
        );
    }

}

export default ButtonComponent;
