import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../Expensesfilter";
import "./Expenses.css";
import Card from "../UI/Card";

export default function Expenses({ expense }) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const handleYearChange = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onExpensesFilterUpdate={handleYearChange}
        />
        <ExpenseItem
          title={expense[0].title}
          amount={expense[0].amount}
          date={expense[0].date}
        />
        <ExpenseItem
          title={expense[1].title}
          amount={expense[1].amount}
          date={expense[1].date}
        />
        <ExpenseItem
          title={expense[2].title}
          amount={expense[2].amount}
          date={expense[2].date}
        />
        <ExpenseItem
          title={expense[3].title}
          amount={expense[3].amount}
          date={expense[3].date}
        />
        <ExpenseItem
          title={expense[4].title}
          amount={expense[4].amount}
          date={expense[4].date}
        />
      </Card>
    </div>
  );
}
