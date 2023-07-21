const first = 'I like to drink water'
const second = 'I Like Too Drink Water'

function compareByChar(first, second) {
  return first.toLowerCase() === second.toLowerCase()
}

function compare(first, second) {
  return first === second
}

const res = compareByChar(first, second)
const res2 = compare(first, second)

console.log("By char : ", res)
console.log("String only : ", res2)
