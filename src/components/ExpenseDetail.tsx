import { useMemo } from "react"
import { categories } from "../data/categories"
import { formatDate } from "../helpers"
import { Expense } from "../type"
import AmountDisplay from "./AmountDisplay"
import DropdownMenu from "./DropdownMenu"

type ExpenseDetailProps = {
  expense: Expense
}

function ExpenseDetail({expense}: ExpenseDetailProps) {
  const categoryInfo = useMemo(() => categories.filter(cat => cat.id === expense.category)[0] ,[expense])

  return (
    <div className="bg-white shadow-lg mt-5 py-10 px-5 rounded-lg w-full border-b border-gray-200 flex gap-5 items-center">
      <div>
        <img 
          src={`/icono_${categoryInfo.icon}.svg`}
          alt="icono gasto"
          className="w-20"
        />
      </div>
      <div className="flex-1  space-y-2">
        <p className="text-sm font-bold uppercase text-slate-500">{categoryInfo.name}</p>
        <p>{expense.expenseName}</p>
        <p className="text-slate-600 text-sm">{formatDate( expense.date!.toString() )}</p>
      </div>

      <AmountDisplay amount={expense.amount}/>

      <DropdownMenu />

    </div>
  )
}

export default ExpenseDetail