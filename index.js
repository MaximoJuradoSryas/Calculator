let number1 = null;
let number2 = null;
let operations = null;


// // console.log(number1 + number2)
// // console.log(number1 - number2)
// // console.log(number1 * number2)
// // console.log(number1 / number2)
// console.log( number1 % number2)
// console.log(number1 ** 2)
// console.log( number1!== number2)

// console.log(Math.round(123.78883))
// console.log(123.788989878.toFixed(3))



// console.log(document.getElementById('1'))
// console.log(document.querySelectorAll(".number"))
let numberButtons = document.querySelectorAll(".number")
let operationButtons = document.querySelectorAll(".operator")
let screen = document.getElementById("screen")

numberButtons.forEach((number) =>{
    number.addEventListener("click",()=>{
        // console.log(number.innerHTML)
        // console.log(number.innerText)
        // number1 = number.innerText
        if(number1){
            number1 = number1+ number.innerText
        }else{
            number1=number.innerText
        }
        // console.log(number1)
        screen.innerText=number1
    })
})

operationButtons.forEach((operator) =>{
    operator.addEventListener("click",()=>{
    if(operator.id !== "equal"){
        screen.innerText = 0
        number2 = number1
        number1 = null
        operations = operator.id
    }else{
        if (operations == "add"){
            screen.innerText=(parseInt(number2) + parseInt(number1))
        }
        if (operations == "sub"){
            screen.innerText=(parseInt(number2) - parseInt(number1))
        }
        if (operations == "mul"){
            screen.innerText=(parseInt(number2) * parseInt(number1))
        }
        if (operations == "div"){
            screen.innerText=(parseInt(number2) / parseInt(number1))
        }
    }
    })
})