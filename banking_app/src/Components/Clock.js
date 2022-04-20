import React from 'react';
import ButtonComponent from "./ButtonComponent"


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date(),
      Username : " " ,
      backgroundColor : " ",
      textColor : " "};

  }


  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
    handleChange = (e) =>{
        this.setState({
           [e.target.name] : e.target.value
        })
        console.log(e.target.value)
    }

    handleForm = (e) =>{ //stops the page from refreshing the form
        console.log("Formm")
        e.preventDefault()
    }



  render(){
    return (
      <div>
        <ButtonComponent handleChange={this.handleChange} handleForm={this.handleForm}/>
        <h1>Hello, {this.state.Username}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

export default Clock;
