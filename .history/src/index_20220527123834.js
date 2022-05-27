'use strict'

const numberBtn = document.querySelectorAll('.btn-number')
const dotBtn = document.querySelector('.btn-dot')
const operationBtn = document.querySelectorAll('.btn-operation')
const equalsBtn = document.querySelector('.equals-btn')
const deleteBtn = document.querySelector('.btn-delete')
const clearAllBtn = document.querySelector('.btn-clear-all')
const calculationDisplay = document.querySelector('#calculation')
const resultDisplay = document.querySelector('#result')

// Numbers
numberBtn.forEach((item) => {
  item.addEventListener('click', () => {
    calculationDisplay.value += item.textContent
    // console.log(calculationDisplay.value)
  })
})

// Equal Button
equalsBtn.addEventListener('click', () => {
  console.log(calculationDisplay.value)
})

// C Button
clearAllBtn.addEventListener('click', () => {
  calculationDisplay.value = ''
})

// Dot
// dotBtn.addEventListener('click', () => {
// })

// Delete Button
deleteBtn.addEventListener('click', () => {
  let numbers = calculationDisplay.value
  console.log(numbers.length - 1)
  let numbersB = numbers.substring(numbers.length - 1)
  console.log(numbersB)
})

//
let x = 123456
const y = x.toString().split('').slice(0, -1).join('')
const newNum = Number(y)

console.log(newNum)


//
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[0]);
// expected output: "fox"