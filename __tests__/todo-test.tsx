import {Actions, addTodo, editTodo, removeTodo, todo, todoState} from '../src/redux'
import {TodoProps} from '../src/redux'

jest.mock('uuid/v5', () => {
	return (_: any, __: any) => 'some_id'
})

describe('todos reducer', () => {
	it('should return the initial state', () => {
		const action: Actions<TodoProps> = {
			type: 'test',
			payload: {
				subtitle: '',
				title: '',
				days: '',
				id: ''
			}
		}

		const outputState: todoState = {
			ids: [],
			todo: {}
		}

		expect(todo(undefined, action)).toEqual(outputState)
	})

	it('add todo will make the output has value', () => {
		const action: Actions<TodoProps> = {
			type: 'ADD_TODO',
			payload: {
				title: 'title',
				subtitle: 'subtitle',
				days: {
					1: 'Monday'
				},
				id: 'some_id'
			}
		}

		const outputState: todoState = {
			ids: ['some_id'],
			todo: {
				some_id: {
					title: 'title',
					id: 'some_id',
					subtitle: 'subtitle',
					days: {
						1: 'Monday'
					}
				}
			}
		}

		expect(todo(undefined, action)).toEqual(outputState)
	})

	it('Remove todo if the id is found', () => {
		const action: Actions<TodoProps> = {
			type: 'REMOVE_TODO',
			payload: {
				title: 'title',
				subtitle: 'subtitle',
				days: {
					1: 'Monday'
				},
				id: 'some_id'
			}
		}

		const outputState: todoState = {
			ids: [],
			todo: {}
		}

		const currentState: todoState = {
			ids: ['some_id'],
			todo: {
				some_id: {
					title: 'title',
					id: 'some_id',
					subtitle: 'subtitle',
					days: {
						1: 'Monday'
					}
				}
			}
		}

		expect(todo(currentState, action)).toEqual(outputState)
	})

	it('Edit todo will change the value base on the id', () => {
		const action: Actions<TodoProps> = {
			type: 'EDIT_TODO',
			payload: {
				title: 'new title',
				subtitle: 'new subtitle',
				days: {
					1: 'Monday',
					2: 'Monday',
				},
				id: 'another_id'
			}
		}

		const outputState: todoState = {
			ids: ['some_id', 'another_id'],
			todo: {
				some_id: {
					title: 'title',
					id: 'some_id',
					subtitle: 'subtitle',
					days: {
						1: 'Monday'
					}
				},
				another_id: {
					title: 'new title',
					subtitle: 'new subtitle',
					days: {
						1: 'Monday',
						2: 'Monday',
					},
					id: 'another_id'
				}
			}
		}

		const currentState: todoState = {
			ids: ['some_id', 'another_id'],
			todo: {
				some_id: {
					title: 'title',
					id: 'some_id',
					subtitle: 'subtitle',
					days: {
						1: 'Monday'
					}
				},
				another_id: {
					title: 'old title',
					subtitle: 'old subtitle',
					days: {
						1: 'Monday',
					},
					id: 'another_id'
				}
			}
		}

		expect(todo(currentState, action)).toEqual(outputState)
	})

	it('For the sake of coverage', () => {

		addTodo({
			days: {
				1: 'Monday',
			},
			title: 'title',
			subtitle: 'subtitle'
		})

		editTodo({
			days: {
				1: 'Monday',
			},
			title: 'title',
			subtitle: 'subtitle',
			id: 'some_id'
		})

		removeTodo({
			id: 'some_id'
		})
	})
})
