import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import { categories } from "../data/categories";
import { useBudget } from '../hooks/useBudget';
import { DraftExpense, Value } from '../type';
import ErrorMessage from './ErrorMessage';

function ExpenseForm() {
  const [expense, setExpense] = useState<DraftExpense>({
    amount: 0,
    expenseName: '',
    category: '',
    date: new Date()
  });
  const [error, setError] = useState('')

  const {dispatch, state} = useBudget()

  const isSelectedId = useMemo(() =>  !!state.selectedId , [state.selectedId])

  useEffect(() => {
    if(isSelectedId){
      console.log('entro')
      const selectedExpense = state.expenses.filter(expense => expense.id === state.selectedId)[0]

      setExpense({
        amount: selectedExpense.amount,
        expenseName: selectedExpense.expenseName,
        category: selectedExpense.category,
        date: new Date(`${selectedExpense.date}`)
      })
    }
  },[isSelectedId, state])

  const handleChangeDate = (value: Value) => {
    setExpense({
      ...expense,
      date: value
    })
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    const {name, value} = e.target
    const isAmountField = ['amount'].includes(name)

    setExpense({
      ...expense,
      [name]: isAmountField ? Number(value) : value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault()

    if(Object.values(expense).includes('') || expense.amount === 0){
      setError('Todos los campos son obligatorios')
      return
    }

    setError('')

    if(state.selectedId){
      dispatch({
        type: 'update-expense', 
        payload: {expense: {id: state.selectedId ,...expense}}
      })
      dispatch({
        type: 'set-selectedId', 
        payload: {selectedId: ''}
      })
      return
    }

    dispatch({
      type: 'add-expense', 
      payload: {expense}
    })

  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <legend
        className="uppecase text-center text-2xl font-black border-b-4 border-blue-400 py-2"
      >{isSelectedId ? 'Actualizar Gasto' : 'Nuevo Gasto'}</legend>

      <div className="flex flex-col gap-2">
        <label htmlFor="expenseName" className="text-xl">Nombre Gasto:</label>
        <input 
          id="expenseName" 
          name="expenseName"
          type="text" 
          placeholder="Añade el nombre del gasto"
          className="bg-slate-100 rounded-lg p-2"
          value={expense.expenseName}
          onChange={handleChange}
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
          value={expense.amount}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="category" className="text-xl">Categoría:</label>
        <select 
          id="category" 
          name="category" 
          className="bg-slate-100 rounded-lg p-2"
          value={expense.category}
          onChange={handleChange}
        >
          <option value="">-- Seleccione --</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="amountDate" className="text-xl">Fecha del Gasto:</label>
        <DatePicker onChange={handleChangeDate} value={expense.date} />
      </div>

      <input 
        type="submit"
        className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
        value={isSelectedId ? 'Actualizar Gasto' : 'Registrar Gasto'}
      />

      {error && <ErrorMessage message={error} />}

    </form>

  )
}

export default ExpenseForm