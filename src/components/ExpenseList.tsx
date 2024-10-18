import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"
import ExpenseDetail from "./ExpenseDetail"

function ExpenseList() {
  const {state} = useBudget()

  const isEmpty = useMemo(() => state.expenses.length === 0 ,[state.expenses])

  return (
    <div className="mt-10">
      {isEmpty ? <p className="text-gray-600 font-bold text-2xl">No hay gastos</p> : (
        <>
          <p className="text-gray-600 font-bold text-2xl">Listado de gastos</p>
          {state.expenses.map(expense => (
            <ExpenseDetail key={expense.id} expense={expense} />
          ))}
        </>
      )}
    </div>
  )
}

export default ExpenseList