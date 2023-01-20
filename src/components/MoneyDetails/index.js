import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props

  return (
    <li className="balance-container">
      <div className="display-container your-balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image"
        />
        <div>
          <p className="balance-text">Your Balance</p>
          <p className="amount" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="display-container your-income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image"
        />
        <div>
          <p className="balance-text">Your Income</p>
          <p className="amount" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="display-container your-expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image"
        />
        <div>
          <p className="balance-text">Your Expenses</p>
          <p className="amount" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </li>
  )
}

export default MoneyDetails
