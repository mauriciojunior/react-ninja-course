'use strict'

const some = (array, func) => {
  for (var index = 0; index < array.length; index++) {
    if (func(array[index])) return true
  }

  return false
}

export default some
