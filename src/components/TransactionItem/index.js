import './index.css'

const TransactionItem = props => {
  const {transactionHistory, onDeleteTransaction} = props
  const {id, title, amount, type} = transactionHistory

  const deleteTransaction = () => {
    onDeleteTransaction(id)
  }

  return (
    <li className="list-container">
      <p className="text">{title}</p>
      <p className="text">Rs {amount}</p>
      <p className="text">{type}</p>
      <div className="delete-container">
        <button
          type="button"
          className="del-btn"
          onClick={deleteTransaction}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="del-img"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
