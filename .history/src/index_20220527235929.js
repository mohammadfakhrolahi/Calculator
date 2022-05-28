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
const plusMinusBtn = document.querySelector('.plus-minus')
const historyBtn = document.querySelector('.btn-history')
const historyDisplay = document.querySelector('#history')
const keypad = document.querySelector('#keypad')
const screen = document.querySelector('#screen')

// History
const history = []


// Numbers
numberBtn.forEach((item) => {
  item.addEventListener('click', () => calculationDisplay.value += item.textContent)
})

// Operator
operationBtn.forEach((item) => {
  item.addEventListener('click', () => calculationDisplay.value += item.value)
})

// Equal Button
equalsBtn.addEventListener('click', () => {
  resultDisplay.textContent = eval(calculationDisplay.value)
  history.push(`${calculationDisplay.value} = ${resultDisplay.textContent}`)
  console.log(history)
})

// C Button
clearAllBtn.addEventListener('click', () => {
  calculationDisplay.value = ''
  resultDisplay.textContent = ''
  parenthesisBtn.value = ')'
  plusMinusBtn.value = ''
})

// Dot
// dotBtn.addEventListener('click', () => {
// })

// Delete Button
const deleteBtnFunc = () => calculationDisplay.value = calculationDisplay.value.toString().split('').slice(0, -1).join('')

deleteBtn.addEventListener('click', () => deleteBtnFunc())

// Parenthesis Button
const parenthesis = () => {
  if (parenthesisBtn.value === '(') {
    parenthesisBtn.value = ')'
  } else if (parenthesisBtn.value === ')' ) {
    parenthesisBtn.value = '('
  }
}

parenthesisBtn.addEventListener('click', () => calculationDisplay.value += parenthesisBtn.value)

// Plus/Minus Button
const plusMinus = () => {
  if (plusMinusBtn.value === '') {
    plusMinusBtn.value = '-'
  } else if (plusMinusBtn.value === '-') {
    plusMinusBtn.value = ''
    
    let plusMinusClear = calculationDisplay.value.toString().slice(-1)
    if (plusMinusClear === '-') {
      deleteBtnFunc()
    }
  }
}

plusMinusBtn.addEventListener('click', () => calculationDisplay.value += plusMinusBtn.value)

// History Button
historyBtn.addEventListener('click', () => {
  // button.forEach((item) => {
  //   if (item.style.visibility === 'visible') {
  //     item.style.visibility = 'hidden'
  //   } else {
  //     item.style.visibility = 'visible'
  //   }
  // })
  // historyDisplay

  if (keypad.style.display === 'grid') {
    keypad.style.display = 'none'
  } else {
    keypad.style.display = 'grid'
  }
  
  console.log('sss')
})