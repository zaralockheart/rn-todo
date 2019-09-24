import {Actions, todo, todoState} from '../../src/redux'
import {TodoProps} from '../../src/redux'

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
})
