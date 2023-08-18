import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";

let DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Desk",
    amount: 324,
    date: new Date(2023, 1, 13),
  },
  {
    id: "e2",
    title: "Computer",
    amount: 1299,
    date: new Date(2020, 4, 11),
  },
  {
    id: "e3",
    title: "Speaker",
    amount: 60,
    date: new Date(2022, 12, 1),
  },
  {
    id: "e4",
    title: "Mute",
    amount: 120,
    date: new Date(2021, 1, 10),
  },
  {
    id: "e5",
    title: "Fountain Pen",
    amount: 20,
    date: new Date(2021, 8, 1),
  },
];

export default function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </>
  );
}
