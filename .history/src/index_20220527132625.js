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

// Operator
operationBtn.forEach((item) => {
  item.addEventListener('click', () => {
    calculationDisplay.value += item.textContent
  })
})


// Equal Button
equalsBtn.addEventListener('click', () => {
  let evalStr = calculationDisplay.value.toString()
  console.log(eval(evalStr))
  // console.log(calculationDisplay.value)

  // let evalRes = eval(calculationDisplay.value.toString())
  // console.log(evalRes)
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
  calculationDisplay.value
  calculationDisplay.value = calculationDisplay.value.toString().split('').slice(0, -1).join('')
  // console.log(calculationDisplay.value)
})

// 
// console.log(eval('2 * 3'))