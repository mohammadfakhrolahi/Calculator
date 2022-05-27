'use strict'

const numberBtn = document.querySelectorAll('.btn-number')
const dotBtn = document.querySelector('.btn-dot')
const operationBtn = document.querySelectorAll('.btn-operation')
const operationBtnB = document.querySelectorAll('.btn-operationB')
const equalsBtn = document.querySelector('.equals-btn')
const deleteBtn = document.querySelector('.btn-delete')
const clearAllBtn = document.querySelector('.btn-clear-all')
const calculationDisplay = document.querySelector('#calculation')
const resultDisplay = document.querySelector('#result')
const button = document.querySelectorAll('.btn')
const parenthesisBtn = document.querySelector('.parenthesis')
const plus-minus = document.querySelector('.plus-minus')

// History
const history = []

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
    calculationDisplay.value += item.value
  })
})

// operationBtnB.forEach((item) => {
//   item.addEventListener('click', () => {
//     calculationDisplay.value += item.textContent
//   })
// })


// Equal Button
equalsBtn.addEventListener('click', () => {
  resultDisplay.textContent = eval(calculationDisplay.value)
  // let evalRes = eval(calculationDisplay.value.toString())
  // console.log(evalRes)

})

// C Button
clearAllBtn.addEventListener('click', () => {
  calculationDisplay.value = ''
  resultDisplay.textContent = ''
  parenthesisBtn.value = ')'
})

// Dot
// dotBtn.addEventListener('click', () => {
// })

// Delete Button
deleteBtn.addEventListener('click', () => {
  calculationDisplay.value = calculationDisplay.value.toString().split('').slice(0, -1).join('')
  // console.log(calculationDisplay.value)
})

// 
// console.log(eval('9*9'))

// Result Display
// button.forEach((item) => {

// })

// Parenthesis Toggle
const parenthesis = () => {
  if (parenthesisBtn.value === '(') {
    parenthesisBtn.value = ')'
  } else if (parenthesisBtn.value === ')') {
    parenthesisBtn.value = '('
  }

}

parenthesisBtn.addEventListener('click', () => {
  calculationDisplay.value += parenthesisBtn.value
})
