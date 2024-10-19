import { v4 as uuidv4 } from 'uuid'
import { DraftExpense, Expense } from "../type"

export type BudgetActions = 
{  type: 'add-budget', payload: {budget: number} } |
{  type: 'add-expense', payload: {expense: DraftExpense} } |
{  type: 'update-expense', payload: {expense: Expense} } |
{  type: 'delete-expense', payload: {id: string} } |
{  type: 'set-selectedId', payload: {selectedId: string} } |
{  type: 'reset-app' } |
{  type: 'show-modal' } |
{  type: 'close-modal' }

export type BudgetState = {
  budget: number,
  modal: boolean,
  expenses: Expense[],
  selectedId: string
}

const initialBudget = () : number => {
  const localStorageBudget = localStorage.getItem('budget')
  return localStorageBudget ? Number(localStorageBudget) : 0
}

const initialExpenses = () : Expense[] => {
  const localStorageBudget = localStorage.getItem('expenses')
  return localStorageBudget ? JSON.parse(localStorageBudget) : []
}

export const initialState: BudgetState = {
  budget: initialBudget(),
  modal: false,
  expenses: initialExpenses(),
  selectedId: ''
}

const createExpense = (draftExpense: DraftExpense): Expense => {
  return{
    id: uuidv4(),
    ...draftExpense
  }
}

export const budgetReducer = (
    state: BudgetState = initialState,
    action: BudgetActions
  ) => {

  if(action.type === 'add-budget'){
    return {
      ...state,
      budget: action.payload.budget
    }
  }

  if(action.type === 'add-expense'){
    const expense = createExpense(action.payload.expense)

    return {
      ...state,
      expenses: [...state.expenses, {...expense}],
      modal: false
    }
  }

  if(action.type === 'update-expense'){
    const filteredExpenses = state.expenses.map(expense => {
      if(expense.id === action.payload.expense.id){
        const newExpense = {
          ...action.payload.expense
        }
        return newExpense
      }
      return expense
    })

    return {
      ...state,
      modal: false,
      expenses: [...filteredExpenses],
    }
  }

  if(action.type === 'delete-expense'){
    const filteredExpenses = state.expenses.filter(expense => expense.id !== action.payload.id)

    return {
      ...state,
      expenses: [...filteredExpenses]
    }
  }

  if(action.type === 'set-selectedId'){

    return{
      ...state,
      selectedId: action.payload.selectedId
    }
  }

  if(action.type === 'show-modal'){
    return{
      ...state,
      modal: true
    }
  }

  if(action.type === 'close-modal'){
    return{
      ...state,
      modal: false,
      selectedId: ''
    }
  }

  if(action.type === 'reset-app'){
    return{
      ...state,
      budget: 0,
      expenses: []
    }
  }

  return state
}
