import { ChangeEvent, useMemo, useState } from "react"

function BudgetForm() {
  const [budget, setBudget] = useState(0)

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setBudget(ev.target.valueAsNumber)
  }

  const isValid = useMemo(() => {
    return isNaN(budget) || budget <= 0
  }, [budget])

  return (
    <form className="space-y-5">
      <div className="flex flex-col space-y-5">
        <label htmlFor="budget" className="text-4xl font-bold text-blue-600 text-center">Define budget</label>
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
        value="Define budget"
        className="w-full cursor-pointer p-2 font-bold bg-blue-600 hover:bg-blue-700 text-white uppercase disabled:opacity-30"
        disabled={isValid}
      />
    </form>
  )
}

export default BudgetForm