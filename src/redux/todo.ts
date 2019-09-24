import {Dispatch} from 'redux'
import uuidv5 from 'uuid/v5'

import {Actions} from './main'

// Action Names
const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const EDIT_TODO = 'EDIT_TODO'

// Actions
interface AddTodoProps {
  title: string
  subtitle?: string | undefined
  days: {[key: number]: string}
}

const addTodo = (data: AddTodoProps) => (dispatch: Dispatch) => {
  dispatch({
    type: ADD_TODO,
    payload: data
  })
}

interface EditTodoProps extends AddTodoProps {
  id: string
}

const editTodo = (data: EditTodoProps) => (dispatch: Dispatch) => {
  dispatch({
    type: EDIT_TODO,
    payload: data
  })
}

interface RemoveTodoProps {
  id: string
}

const removeTodo = (data: RemoveTodoProps) => (dispatch: Dispatch) => {
  dispatch({
    type: REMOVE_TODO,
    payload: data
  })
}

// All Props
type TodoProps = AddTodoProps & RemoveTodoProps

// Initial State
interface TodoObject {
  id: string
  title: string
  subtitle: string | undefined
  days: {[key: number]: string}
}

const initialState = {
  todo: {} as {[key: string]: TodoObject},
  ids: [] as string[]
}

type todoState = typeof initialState

const todo = (state = initialState, action: Actions<TodoProps>) => {
  switch (action.type) {
    case ADD_TODO: {
      const newId = !!state.ids ? state.ids.slice() : []
      let createdId = uuidv5(Date.now().toLocaleString(), uuidv5.DNS)
      newId.push(createdId)
      const newTodo: {[key: string]: TodoObject} = {
        ...state.todo
      }

      newTodo[createdId] = {
        id: createdId,
        subtitle: action.payload.subtitle,
        title: action.payload.title,
        days: action.payload.days
      }

      const newState: todoState = {
        ids: newId,
        todo: newTodo
      }
      return newState
    }
    case REMOVE_TODO: {
      const newIds = state.ids.slice().filter(i => i !== action.payload.id)

      const newTodo = {
        ...state.todo
      }

      delete newTodo[action.payload.id]
      const newState: todoState = {
        ids: newIds,
        todo: newTodo
      }
      return newState
    }
    case EDIT_TODO: {
      const newTodo = {
        ...state.todo
      }

      newTodo[action.payload.id] = {
        id: action.payload.id,
        title: action.payload.title,
        subtitle: action.payload.subtitle,
        days: action.payload.days
      }

      const newState: todoState = {
        ids: state.ids,
        todo: newTodo
      }

      return newState
    }
    default:
      return state
  }
}

export {TodoProps, TodoObject, todoState, todo, addTodo, removeTodo, editTodo}
