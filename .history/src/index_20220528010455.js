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
const themeToggle = document.querySelector('.btn-theme-toggle')
const historyDisplay = document.querySelector('#history')
const historyItem = document.querySelector('.history__item')
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
  // History
  history.push(`${calculationDisplay.value} = ${resultDisplay.textContent}`)
  history.forEach((item) => {
    historyDisplay.innerHTML += `<span class="history__item">${item}</span>`
  })
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
  if (keypad.style.display === 'grid') {
    resultDisplay.style.display = 'none'
    calculationDisplay.style.display = 'none'
    historyDisplay.style.display = 'flex'
    keypad.style.display = 'none'
  } else {
    resultDisplay.style.display = 'flex'
    calculationDisplay.style.display = 'flex'
    historyDisplay.style.display = 'none'
    keypad.style.display = 'grid'
  }
})

// Theme Toggle
const themeToggle = ()
  const el = document.body
  el.classList.toggle('light-theme')
