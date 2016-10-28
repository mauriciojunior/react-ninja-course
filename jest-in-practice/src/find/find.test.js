'use strict'

import { expect } from 'chai'
import find from './find'

it('find should be a function', () => {
  expect(find).to.be.a('function')
})

it('find([1, 2], item => item) should return 1', () => {
  expect(find([1, 2], item => item)).to.be.equal(1)
})

it('find([1, 2], item => item === 2) should return 2', () => {
  expect(find([1, 2], item => item === 2)).to.be.equal(2)
})

it('find([1, 2], item => item === 6) should return 2', () => {
  expect(find([1, 2], item => item === 6)).to.be.equal(undefined)
})

it('find([1, 2], (item, index) => index === 1) should return 2', () => {
  expect(find([1, 2], (item, index) => index === 1)).to.be.equal(2)
})

it('find([1, 2], (item, index, array) => array[index] === 2) should return 2', () => {
  expect(find([1, 2], (item, index, array) => array[index] === 2)).to.be.equal(2)
})
