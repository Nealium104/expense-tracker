import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense() {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExapenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
