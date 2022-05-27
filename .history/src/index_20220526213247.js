'use strict'

const numberBtn = document.querySelectorAll('.btn-number')
const dotBtn = document.querySelector('.btn-dot')
const operationBtn = document.querySelectorAll('.btn-operation')
const equalsBtn = document.querySelector('.equals-btn')
const deletBtn = document.querySelector('.btn-delete')
const clearAllBtn = document.querySelector('.btn-clear-all')
const calculationDisplay = document.querySelector('#calculation')
const resultDisplay = document.querySelector('#result')

// Numbers
numberBtn.forEach((item) => {
  item.addEventListener('click', () => {
    // console.log(item.textContent)
    calculationDisplay.value = calculationDisplay.value + item.textContent
    console.log(calculationDisplay.value)
  })
})

equalsBtn.addEventListener('click', () => {
  console.log(calculationDisplay.value)
})

// C Buttin
// clearAllBtn.addEventListener('click', () => {
//   calculationDisplay.value = ''
// })

// Dot
dotBtn.addEventListener('click', () => {

  if (calculationDisplay.value = '') {
    calculationDisplay.value = '0'
  }
})