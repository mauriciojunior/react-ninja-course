'use strict'

const filter = (array, func) => {
  return (function filterInternal (arrayInternal, counter) {
    const [head, ...tail] = arrayInternal
    return !arrayInternal.length ? []
      : func(head, counter, array)
        ? [head, ...filterInternal(tail, counter + 1)]
        : filterInternal(tail, counter + 1)
  })(array, 0)
}

export default filter
