import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../Expensesfilter";
import "./Expenses.css";
import Card from "../UI/Card";

export default function Expenses({ expenses }) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const handleYearChange = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onYearChange={handleYearChange}
        />
        {expensesContent}
      </Card>
    </div>
  );
}
