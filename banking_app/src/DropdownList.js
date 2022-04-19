import { React, Component} from "react";
import axios from "axios";



class DropdownList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      credit: [],
      debit: [],
      choice: false,
      value: '',

    }
  }

  //life cycle
  async componentDidMount() {
    try {
      const debitUrl = 'https://moj-api.herokuapp.com/debits'
      const creditUrl = 'https://moj-api.herokuapp.com/credits'

      const debitData = await axios.get(debitUrl);
      const creditData = await axios.get(creditUrl);
      console.log("debit data ", debitData.data)
      console.log("credit data", creditData.data)

      this.setState({ debit: debitData.data, credit: creditData.data })
    } catch (error) {
      console.log("Hey... try again, bud", error);
    }
  }

  handleForm = async (e) => {
    e.preventDefault()
    console.log(`don't refresh!!!`)
    // try {
    //   const debitUrl = 'https://moj-api.herokuapp.com/debits'
    //   const creditUrl = 'https://moj-api.herokuapp.com/credits'

    //   const debitData = await axios.get(debitUrl);
    //   const creditData = await axios.get(creditUrl);
    //   console.log("debit data ", debitData.data)
    //   console.log("credit data", creditData.data)

    //   this.setState({ debitList: debitData.data, creditList: creditData.data })
    // } catch (error) {
    //   console.log("Hey... try again, bud", error);
    // }
  }

  handleSelect = (e) =>{
    this.setState({
      value: e.target.value,
      choice: true
    })
    console.log(e.target.value)
  }

  render() {
    const { debit, credit, value, choice } = this.state
    return (
      <div className="list">
        
        <div className="menu">
          <form onSubmit={this.handleForm}>
            <select onChange={this.handleSelect} value={value}>
              <option>----</option>
              <option value='debit' >debit</option>
              <option value='credit'>credit</option>
            </select>
          </form>
          <div>
          {value === 'debit' && value !== '----' ?
                debit.map(account => {
                  return (
                    <div>
                      <h3>{account.description}</h3>
                      <h4>{account.amount}</h4>
                      <p>{account.date}</p>

                    </div>
                  )
                }) : (credit.map(account  => {
                  return (
                    <div>
                      <p>{account.description}</p>
                      <p>{account.amount}</p>
                      <p>{account.date}</p>


                    </div>
                  )
                }))
  }
          </div>

        </div>
      </div>
    )
  }
}

export default DropdownList;
