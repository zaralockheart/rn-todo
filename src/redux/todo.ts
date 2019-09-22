import {Dispatch} from "redux"

// Action Names
const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'

// Actions
interface AddTodoProps {
	title: string
	subtitle?: string
	days: Map<number, String>
}

export const addTodo = (data: AddTodoProps) => (dispatch: Dispatch) => {
	dispatch({
		type: ADD_TODO,
		payload: data
	})
}

interface RemoveTodoProps {
	id: string
}

export const removeTodo = (data: RemoveTodoProps) => (dispatch: Dispatch) => {
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
	subtitle: string
	days: Map<number, String>
}

const initialState = {
	todo: {} as { [key: string]: TodoObject },
	ids: [] as string[]
}

export type TodoState = typeof initialState

export const signInDetailsReducer = (state = initialState, action: Action<TodoProps>) => {
	switch (action.type) {
		case ADD_TODO:
			break;
		default:
	}
}
