let userText = prompt('Введите текст').trim()
let wordFromText = prompt('Введи слово из текста').trim()
let indexOfWord = userText.indexOf(wordFromText)

alert(`Результат: ${userText.slice(0, indexOfWord)}`)
