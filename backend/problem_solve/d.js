const first = "One of the recommended food from japan is Sushi"
const second = "Indonesian doesn’t eat Sushi"


function takeWord (str, word) {
  str.split(" ").map((c) => {if(c !="" && c == word) console.log(word)})
  const withoutWord = str.replaceAll(word, "")
  console.log(withoutWord)
}


takeWord(first, "Sushi")
takeWord(second, "Sushi")
