import {Component} from 'react'
import {v4} from 'uuid'

import './index.css'

import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionsList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  onDeleteTransaction = id => {
    const {transactionsList} = this.state
    const updatedList = transactionsList.filter(each => id !== each.id)

    this.setState({transactionsList: updatedList})
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const selectOption = transactionTypeOptions.find(
      each => optionId === each.optionId,
    )
    const {displayText} = selectOption
    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }
    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onChangeOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  getExpensesAmount = () => {
    const {transactionsList} = this.state
    let expenses = 0

    transactionsList.forEach(element => {
      if (element.type === transactionTypeOptions[1].displayText) {
        expenses += element.amount
      }
    })
    return expenses
  }

  getIncomeAmount = () => {
    const {transactionsList} = this.state
    let income = 0

    transactionsList.forEach(element => {
      if (element.type === transactionTypeOptions[0].displayText) {
        income += element.amount
      }
    })
    return income
  }

  getBalanceAmount = () => {
    const {transactionsList} = this.state
    let balance = 0
    let income = 0
    let expenses = 0

    transactionsList.forEach(element => {
      if (element.type === transactionTypeOptions[0].displayText) {
        income += element.amount
      } else {
        expenses += element.amount
      }
    })
    balance = income - expenses

    return balance
  }

  render() {
    const {titleInput, amountInput, optionId, transactionsList} = this.state
    return (
      <div className="bg-container">
        <div className="profile-container">
          <h1 className="head-name">Hi, Richard</h1>
          <p className="welcome-text">
            Welcome back to your <span className="app-name">Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          balance={this.getBalanceAmount()}
          income={this.getIncomeAmount()}
          expenses={this.getExpensesAmount()}
        />
        <div className="add-transaction-container">
          <form className="form-container" onSubmit={this.onAddTransaction}>
            <h1 className="heading">Add Transaction</h1>
            <label className="input-label" htmlFor="title">
              TITLE
            </label>
            <input
              type="text"
              id="title"
              value={titleInput}
              onChange={this.onChangeTitle}
              className="input"
              placeholder="TITLE"
            />
            <label className="input-label" htmlFor="amount">
              AMOUNT
            </label>
            <input
              type="text"
              id="amount"
              onChange={this.onChangeAmount}
              className="input"
              value={amountInput}
              placeholder="AMOUNT"
            />
            <label className="input-label" htmlFor="type">
              TYPE
            </label>
            <select
              id="type"
              className="input"
              value={optionId}
              onChange={this.onChangeOptionId}
            >
              {transactionTypeOptions.map(each => (
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>
            <button type="submit" className="button">
              Add
            </button>
          </form>
          <div className="history-transactions">
            <h1 className="heading">History</h1>
            <ul className="history-container">
              <li className="head-container">
                <p className="table-head">Title</p>
                <p className="table-head">Amount</p>
                <p className="table-head">Type</p>
              </li>
              {transactionsList.map(each => (
                <TransactionItem
                  key={each.id}
                  transactionHistory={each}
                  onDeleteTransaction={this.onDeleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
