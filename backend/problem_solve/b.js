function mergeArray (first, second) {
  const maxLength = first.length > second.length ? first.length : second.length
  const res = []
  for (let i = 0; i < maxLength; i++) {
    if(first[i]) res.push(first[i])
    if(second[i]) res.push(second[i])
  }
  return res
}

const first = ["a", "b", "c"]
const second = [1, 2, 3]

const result = mergeArray(first, second)

console.log(result)
