const display = document.querySelector(".cal_display")
const calculator = document.querySelector(".container")
const keys = document.querySelector(".cal_keys")

keys.addEventListener("click", e => {
    if(e.target.matches("button")){
        const key = e.target
        var keyVal = key.textContent
        const action = key.dataset.action
        var displayNum = display.textContent
        const previousKeyType = calculator.dataset.previousKeyType
        Array.from(key.parentNode.children).forEach(k => k.classList.remove("isdepressed"))
        if(!action){
            if(displayNum === '0' || previousKeyType === 'operator'){
            display.textContent = keyVal
            calculator.dataset.previousKeyType = " "
            }
            else{
                display.textContent = displayNum + keyVal
                calculator.dataset.previousKeyType = "num"
            }    
        }
        if(action == "add" || action == "multiply" || action == "divide"
        || action == "subtract"){
            key.classList.add("isdepressed")
            calculator.dataset.previousKeyType = 'operator'
            calculator.dataset.firstValue = displayNum
            calculator.dataset.operator = action

        }
        if(action == "calculate"){
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayNum

            display.textContent = answer(firstValue, operator, secondValue)
        }
        if(action == "clear"){
            display.textContent = "0"
            calculator.dataset.firstValue = "0"
        }
        if(action == "decimal"){
            display.textContent = displayNum + "."
            if(previousKeyType === "operator")
            {
                display.textContent = "0" + "."
                calculator.dataset.previousKeyType = "decimal"
            }
        }
    }
})


function answer(firstValue, operator, secondValue){
    if(operator === "add"){
        return parseFloat(firstValue) + parseFloat(secondValue)
    }
    if(operator === "subtract"){
        return parseFloat(firstValue) - parseFloat(secondValue)
    }    
    if(operator === "multiply"){
        return parseFloat(firstValue) * parseFloat(secondValue)
    }    
    if(operator === "divide"){
        return parseFloat(firstValue) / parseFloat(secondValue)
    }
}

