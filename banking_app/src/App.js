import { React, Component } from 'react'
import './App.css';
//import Clock from './components/Clock';
//import Form from './components/Form'
//import Content from './components/Form';
import Clock from './Components/Clock';
import DropdownList from './DropdownList';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "Guest",
    }
  }
  changeUser = (e) => {
    e.preventDefault();
    const currUser = e.target[0].value;
    //console.log(currUser);
    this.setState({user: currUser})
  }
  render() {
    return (
      <div>
        {/* <Clock user= {this.state.user} />
        <Content /> */}
        <Clock/>

        <DropdownList/>
        {/* <Form changeUser = {this.changeUser} /> */}
      </div>
    );
  }

}

export default App;
