'use strict'

const reduce = (array, func, initialValue) => {
  let value = initialValue,
      arrayCopy = array

  if (initialValue === undefined) {
    value = array[0]
    arrayCopy = array.slice(1)
  }

  for (let i = 0; i < arrayCopy.length; i++) {
    value = func(value, arrayCopy[i], i, arrayCopy)
  }
  return value
}

export default reduce
