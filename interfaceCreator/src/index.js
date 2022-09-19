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

// ui.setInitialMessage('MESSAGE', true) Sets the message and if true it prompts for username and Greets the user.
// ui.createPrompt('', function)

ui.createPrompt('What is your name?', (user) => console.log('Welcome, ' + user), 'blue')

ui.addExitOption()

ui.setMenu({
    1: 'Add scores',
    2: 'Calculate sum',
    3: 'Calculate average'
})

ui.assignMenuFunctionality({
    1: () => testFuncOne(1, 5),
    2: () => testFuncTwo(5, 4),
    3: () => testFuncThree(5, 5)
})

ui.setColor('menu', 'red')
ui.setColor('exit', 'cyan')

ui.start()