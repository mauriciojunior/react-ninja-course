'use strict'

import { expect } from 'chai'
import some from './some'

it('some should be a function', () => {
  expect(some).to.be.a('function')
})

it('some([], item => item) should return false', () => {
  expect(some([], item => item)).to.not.be.ok
})

it('some([1, 2, 3], item => item > 1) should return true', () => {
  expect(some([1, 2, 3], item => item > 1)).to.be.ok
})

it('some([1, 2, 3], item => item < 1) should return false', () => {
  expect(some([1, 2, 3], item => item < 1)).to.not.be.ok
})
