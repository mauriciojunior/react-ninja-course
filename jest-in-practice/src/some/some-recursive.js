'use strict'

const some = (array, func) => {
  return (function someInternal (arrayInternal) {
    const [head, ...tail] = arrayInternal
    return !arrayInternal.length
      ? false
      : func(head)
        ? true
        : someInternal(tail)
  })(array)
}

export default some
