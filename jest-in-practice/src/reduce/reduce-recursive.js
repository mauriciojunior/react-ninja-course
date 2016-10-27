'use strict'

const isUndefined = (value) => value === undefined

const reduce = (array, func, initialValue) => {
  const isInitialValueUndefined = isUndefined(initialValue)
  const value = isInitialValueUndefined ? array[0] : initialValue
  const arrayCopy = isInitialValueUndefined ? array.slice(1) : array

  return (function reduceInternal (arrayCopyInternal, valueInternal, counter) {
    const [head, ...tail] = arrayCopyInternal
    const accNext = () => func(valueInternal, head, counter, arrayCopy)

    return !arrayCopyInternal.length
      ? valueInternal
      : reduceInternal(tail, accNext(), counter + 1)
  })(arrayCopy, value, 0)
}

export default reduce
