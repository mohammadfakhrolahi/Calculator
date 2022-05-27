'use strict'

const numberBtn = document.querySelectorAll('.number')
const operationBtn = document.querySelectorAll('.btn-operation')
const equalsBtn = document.querySelectorAll('.equals-btn')
const deletBtn = document.querySelectorAll('.btn-delete')
const clearAllBtn = document.querySelectorAll('.btn-clear-all')
const calculationDisplay = document.querySelector('#calculation')
const resultDisplay = document.querySelector('#result')

class Calculator {
  constructor(calculationDisplay, resultDisplay) {
    this.calculationDisplay = calculationDisplay
    this.resultDisplay = resultDisplay
    this.clear()
  }
  
  clear() {}
}
