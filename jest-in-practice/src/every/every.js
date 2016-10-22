'use strict'

const every = (array, func) => {
  for (var index = 0; index < array.length; index++) {
    if (!func(array[index])) return false
  }

  return true
}

export default every
