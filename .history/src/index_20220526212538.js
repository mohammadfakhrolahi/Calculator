'use strict'

const numberBtn = document.querySelectorAll('.btn-number')
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
clearAllBtn.addEventListener('click' => {
  
})