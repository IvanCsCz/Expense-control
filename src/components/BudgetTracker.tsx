import { useBudget } from "../hooks/useBudget"
import AmountDisplay from "./AmountDisplay"

function BudgetTracker() {
  const {state, totalExpenses, remainingBudget} = useBudget()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center">
        <img src="/grafico.jpg" alt="Gráfica de gastos" />
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