import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense({ onAddExpense }) {
  const [menu, setMenu] = useState(true);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  let toggleForm = () => {
    setMenu(!menu);
  };

  if (menu) {
    return (
      <div className="new-expense">
        <button onClick={toggleForm}>Add Expense</button>
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onToggleMenu={toggleForm}
        />
      </div>
    );
  }
}
