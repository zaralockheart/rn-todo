import React from 'react'
import {isNotEmpty, returnFilter} from '../src/util/main'

it('if empty return string', () => {
  expect(isNotEmpty('')).toBe('Required')
})

it('if empty return given string', () => {
  expect(isNotEmpty('', 'Please fill in')).toBe('Please fill in')
})

it('if not empty return undefined', () => {
  expect(isNotEmpty('hoho')).toBe(undefined)
})

it('should be empty object is selection is Same', () => {
  const currentSelected = {
    1: 'Monday'
  }

  const newSelected = returnFilter(currentSelected, 1, 'Monday')

  expect(newSelected).toStrictEqual({})
})

it('should be more object is selection is not the same', () => {
  const currentSelected = {
    1: 'Monday'
  }

  const newSelected = returnFilter(currentSelected, 2, 'Tuesday')

  expect(newSelected).toStrictEqual({
    1: 'Monday',
    2: 'Tuesday'
  })
})
