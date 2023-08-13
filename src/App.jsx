import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";

export default function App() {
  let expense = [
    {
      title: "Desk",
      amount: 324,
      date: new Date(2023, 1, 13),
    },
    {
      title: "Computer",
      amount: 1299,
      date: new Date(2023, 4, 11),
    },
    {
      title: "Speaker",
      amount: 60,
      date: new Date(2022, 12, 1),
    },
    {
      title: "Mute",
      amount: 120,
      date: new Date(2023, 1, 10),
    },
    {
      title: "Fountain Pen",
      amount: 20,
      date: new Date(2023, 8, 1),
    },
  ];

  return (
    <>
      <NewExpense />
      <Expenses expense={expense} />
    </>
  );
}
