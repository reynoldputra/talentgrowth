const first = ["a", "b", "c"]
const second = [1, 2, 3]

function mergeArray(first, second) {
  return [...first, ...second]
}

const result = mergeArray(first, second)

console.log(result)
