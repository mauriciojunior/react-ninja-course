'use strict'

const every = (array, func) => {
  return (function everyInternal (arrayInternal) {
    const [head, ...tail] = arrayInternal
    return !arrayInternal.length
      ? true
      : !func(head)
        ? false
        : everyInternal(tail)
  })(array)
}

export default every
