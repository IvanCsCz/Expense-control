import { buildStyles, CircularProgressbar } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css'
import { useBudget } from "../hooks/useBudget"
import AmountDisplay from "./AmountDisplay"

function BudgetTracker() {
  const {state, totalExpenses, remainingBudget} = useBudget()

  const percentage = Number(((totalExpenses / state.budget) * 100).toFixed(2))

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center">
        <CircularProgressbar 
          value={percentage}
          styles={buildStyles({
            pathColor: percentage > 90 ? '#dc2626' : '#3b82f6',
            trailColor: '#f5f5f5',
            textColor: percentage > 90 ? '#dc2626' : '#3b82f6',
            textSize: 8
          })}
          text={`${percentage}% Gastado`}
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-8 ">
        <button className="bg-pink-500 w-full p-2 text-white uppercase font-bold rounded-lg">
          Reiniciar App
        </button>

        <AmountDisplay 
          label="Presupuesto"  
          amount={state.budget}
        />
        <AmountDisplay 
          label="Disponible"  
          amount={remainingBudget}
        />
        <AmountDisplay 
          label="Gasto"  
          amount={totalExpenses}
        />
      </div>
      
    </div>
  )
}

export default BudgetTracker