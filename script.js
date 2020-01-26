const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        console.log(event.target.value)
    })
})

const calculatorScreen = document.querySelector('.calculator-screen')

 const updateScreen = (number) => {
     calculatorScreen.value = number
 }

 numbers.forEach((number) => {
     number.addEventListener("click", (event) => {
         updateScreen(event.target.value)
     })
 })

   let prevInput ='0'
   let calculationOperator = ''
   let currentInput = '0'

    const inputNumber = (number) => {
        currentInput = number
    }

     numbers.forEach((number) => {
         number.addEventListener(("click"),  (event) => {
             inputNumber(event.target.value)
             updateScreen(currentInput)
         })
     })

  

