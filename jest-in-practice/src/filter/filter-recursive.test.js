'use strict'

import { expect } from 'chai'
import filter from './filter-recursive'

it('filter should be a function', () => {
  expect(filter).to.be.a('function')
})

it('filter([2, 3], item => item) should return [2, 3]', () => {
  expect(filter([2, 3], item => item)).to.be.deep.equal([2, 3])
})

it('filter([2, 3], item => item > 2) should return [3]', () => {
  expect(filter([2, 3], item => item > 2)).to.be.deep.equal([3])
})

it('filter([2, 3], (item, index) => index) should return [3]', () => {
  expect(filter([2, 3], (item, index) => index)).to.be.deep.equal([3])
})

it('filter([2, 3], (item, index, array) => array) should return [2, 3]', () => {
  expect(filter([2, 3], (item, index, array) => array)).to.be.deep.equal([2, 3])
})

it('filter([2, 3, 5, 6, 4, 3, 2, 5], (item, index, array) => index === array.indexOf(item)) should return [2, 3, 5, 6, 4]', () => {
  expect(filter([2, 3, 5, 6, 4, 3, 2, 5], (item, index, array) => index === array.indexOf(item))).to.be.deep.equal([2, 3, 5, 6, 4])
})
