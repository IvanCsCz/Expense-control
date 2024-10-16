import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import { categories } from "../data/categories";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function ExpenseForm() {
  const [value, onChange] = useState<Value>(new Date());


  return (
    <form className="space-y-5">
      <legend
        className="uppecase text-center text-2xl font-black border-b-4 border-blue-400 py-2"
      >Nuevo Gasto</legend>

      <div className="flex flex-col gap-2">
        <label htmlFor="expenseName" className="text-xl">Nombre Gasto:</label>
        <input 
          id="expenseName" 
          name="expenseName"
          type="text" 
          placeholder="Añade el nombre del gasto"
          className="bg-slate-100 rounded-lg p-2"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="amount" className="text-xl">Cantidad:</label>
        <input 
          id="amount" 
          name="amount"
          type="number" 
          placeholder="Añade la cantidad del gasto"
          className="bg-slate-100 rounded-lg p-2"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="category" className="text-xl">Categoría:</label>
        <select 
          id="category" 
          name="category" 
          className="bg-slate-100 rounded-lg p-2"
        >
          <option value="">-- Seleccione --</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
      </div>


      <div className="flex flex-col gap-2">
        <label htmlFor="amountDate" className="text-xl">Fecha del Gasto:</label>
        <DatePicker onChange={onChange} value={value} />
      </div>

      <input 
        type="submit"
        className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
        value='Registrar Gasto'
      />
    </form>
  )
}

export default ExpenseForm