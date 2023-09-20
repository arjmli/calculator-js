const root = document.getElementById('root')

const input = document.createElement('div')
input.style.height = '38px'
input.classList.add('input')
root.appendChild(input)

const result = document.createElement('div')
result.style.height = '38px'
result.style.border = '1px solid black'
root.appendChild(result)

let output = ''

const numbers = Array.from(Array(10).keys())

numbers.forEach(el => {
    const button = document.createElement('button')
    button.textContent = el
    root.appendChild(button)

    button.addEventListener('click', e => {
        input.textContent += button.textContent
    })
})

const operators = ['+', '-', '*', '/','.']

operators.forEach((el) => {
    const button = document.createElement('button')
    button.textContent = el
    root.appendChild(button)

    button.addEventListener('click', e => {
        input.textContent += button.textContent
    })
})

function sum(...args) {
    const nums = args.reduce((acc, current) => acc + +current)
    
    return result.textContent = nums
}

function sub(...args) {
    const nums = args.reduce((acc, current) => acc - +current )
    
    return result.textContent = nums
}

function mul(...args) {
    const nums = args.reduce((acc, current) => acc * +current)
    
    return result.textContent = nums
}

function divide(...args) {
    const nums = args.reduce((acc, current) => acc / +current)
    
    return result.textContent = +nums
}

const equal = document.createElement('button')
equal.textContent = '='
root.appendChild(equal)


equal.addEventListener('click', e => {
    if (input.textContent.includes('+')) {
        output = input.textContent.split('+')
        sum(...output)
        input.textContent = ''
    } else if (input.textContent.includes('-')) {
        output = input.textContent.split('-')
        sub(...output)
        input.textContent = ''
    } else if (input.textContent.includes('*')) {
        output = input.textContent.split('*')
        mul(...output)
        input.textContent = ''
    } else if (input.textContent.includes('/')) {
        output = input.textContent.split('/')
        divide(...output)
        input.textContent = ''
    } else  {
        result.textContent = 'invalid'
    }
})

const clear = document.createElement('button')
clear.textContent = 'C'
root.appendChild(clear)

clear.addEventListener('click', e => {
    input.textContent = input.textContent.substring(0, input.textContent.length - 1)
})

const allClear = document.createElement('button')
allClear.textContent = 'AC'
root.appendChild(allClear)

allClear.addEventListener('click', e => {
    input.textContent = ''
    result.textContent = ''
})

