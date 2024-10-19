import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"
import ExpenseDetail from "./ExpenseDetail"

function ExpenseList() {
  const {state} = useBudget()

  const filteredExpenses = useMemo(() => state.currentCategory ? state.expenses.filter(expense => (
    expense.category === state.currentCategory
  )) : state.expenses , [state.currentCategory, state.expenses])
  
  const isEmpty = useMemo(() => filteredExpenses.length === 0 ,[filteredExpenses])

  return (
    <div className="mt-10">
      {isEmpty ? <p className="text-gray-600 font-bold text-2xl">No hay gastos</p> : (
        <>
          <p className="text-gray-600 font-bold text-2xl">Listado de gastos</p>
          {filteredExpenses.map(expense => (
            <ExpenseDetail key={expense.id} expense={expense} />
          ))}
        </>
      )}
    </div>
  )
}

export default ExpenseList