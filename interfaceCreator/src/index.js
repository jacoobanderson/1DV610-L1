import { InterfaceCreator } from "./interface-creator.js";

// Test function 1
function testFuncOne (num1, num2) {
    console.log(num1 + num2)
}

// Test function 2
function testFuncTwo (num1, num2) {
    console.log(num1 - num2)
}

// Test function 3
function testFuncThree (num1, num2) {
    console.log(num1 * num2)
}

const ui = new InterfaceCreator()

ui.setMenu({
    1: 'Add scores',
    2: 'Calculate sum',
    3: 'Calculate average'
})

ui.setMenuFunctionality({
    1: () => testFuncOne(1, 5),
    2: () => testFuncTwo(5, 4),
    3: () => testFuncThree(5, 5)
})

ui.start()