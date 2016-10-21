'use strict'

const filter = (array, func) => {
  const newArray = []
  for (let i = 0; i < array.length; i++) {
    if (func(array[i], i, array)) newArray.push(array[i])
  }
  return newArray
}

export default filter
