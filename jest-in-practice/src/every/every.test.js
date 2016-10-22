'use strict'

import { expect } from 'chai'
import every from './every'

it('every should be a function', () => {
  expect(every).to.be.a('function')
})

it('every([], item => item) should return true', () => {
  expect(every([], item => item)).to.be.ok
})

it('every([1, 2], item => item) should return true', () => {
  expect(every([1, 2], item => item)).to.be.ok
})

it('every([5, 4, 3, 7], item => item > 9) should return false', () => {
  expect(every([5, 4, 3, 7], item => item > 9)).to.not.be.ok
})

it('every([5, 4, 3, 7], item => item > 2) should return true', () => {
  expect(every([5, 4, 3, 7], item => item > 2)).to.be.ok
})
