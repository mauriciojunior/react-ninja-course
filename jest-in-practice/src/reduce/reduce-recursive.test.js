'use strict'

import { expect } from 'chai'
import reduce from './reduce-recursive'

it('reduce should be a function', () => {
  expect(reduce).to.be.a('function')
})

it('reduce([1, 2, 3], (acc, item) => acc + item, 0) should return 6', () => {
  expect(reduce([1, 2, 3], (acc, item) => acc + item, 0)).to.be.equal(6)
})

it('reduce([1, 2, 3, 5], (acc, item) => acc + item, 0) should return 11', () => {
  expect(reduce([1, 2, 3, 5], (acc, item) => acc + item, 0)).to.be.equal(11)
})

it('reduce([1, 2, 3, 5], (acc, item) => acc + item) should return 11', () => {
  expect(reduce([1, 2, 3, 5], (acc, item) => acc + item)).to.be.equal(11)
})

it('reduce([4, 5], (acc, item, index) => acc + index, 0) should return 1', () => {
  expect(reduce([4, 5], (acc, item, index) => acc + index, 0)).to.be.equal(1)
})

it('reduce([4, 5], (acc, item, index) => { acc[index] = item; return acc }, {}) should return { 0: 4, 1: 5 }', () => {
  expect(reduce([4, 5], (acc, item, index) => { acc[index] = item; return acc }, {})).to.be.deep.equal({ 0: 4, 1: 5 })
})

it('reduce([4, 5], (acc, item, index, arr) => acc + arr[index], 0) should return 9', () => {
  expect(reduce([4, 5], (acc, item, index, arr) => acc + arr[index], 0)).to.be.equal(9)
})
