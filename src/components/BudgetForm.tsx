import { ChangeEvent, FormEvent, useMemo, useState } from "react"
import { useBudget } from "../hooks/useBudget"

function BudgetForm() {
  const [budget, setBudget] = useState(0)
  const {dispatch} = useBudget()

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setBudget(ev.target.valueAsNumber)
  }

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    dispatch({type: 'add-budget', payload: {budget}})
  }

  const isValid = useMemo(() => {
    return isNaN(budget) || budget <= 0
  }, [budget])

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="flex flex-col space-y-5">
        <label htmlFor="budget" className="text-4xl font-bold text-blue-600 text-center">Definir Presupuesto</label>
        <input 
          type="number" 
          id="budget" 
          name="budget"
          className="w-full bg-white border border-gray-200 p-2"
          placeholder="Type your budget" 
          value={budget}
          onChange={handleChange}
        />
      </div>

      <input 
        type="submit" 
        value="Definir Presupuesto"
        className="w-full cursor-pointer p-2 font-bold bg-blue-600 hover:bg-blue-700 text-white uppercase disabled:opacity-30"
        disabled={isValid}
      />
    </form>
  )
}

export default BudgetForm