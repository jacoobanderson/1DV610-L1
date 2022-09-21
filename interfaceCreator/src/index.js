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

// SUBMENU
// Test function 1
function testFuncOneSub (num1, num2) {
    console.log(num1 + num2)
}

// Test function 2
function testFuncTwoSub (num1, num2) {
    console.log(num1 - num2)
}

// Test function 3
function testFuncThreeSub (num1, num2) {
    console.log(num1 * num2)
}

const ui = new InterfaceCreator()

// ui.setInitialMessage('MESSAGE', true) Sets the message and if true it prompts for username and Greets the user.
// ui.createPrompt('', function)

ui.createPrompt('What is your name?', (user) => console.log('Welcome, ' + user + '\n'), 'blue')

ui.addExitOption()

ui.setMenu({
    1: 'Add scores',
    2: 'Calculate sum',
    3: 'Calculate average'
})


const view = {
    1: 'Register values',
    2: 'Calculate mean',
    3: 'Calculate median'
}

const functionality = {
    1: () => testFuncOneSub(1, 3),
    2: () => testFuncTwoSub(5, 9),
    3: () => testFuncThreeSub(23, 34)
}

ui.assignMenuFunctionality({
    1: () => ui.createSubMenu(view, functionality),
    2: () => testFuncTwo(5, 4),
    3: () => testFuncThree(5, 5)
})

ui.setColor('menu', 'red')
ui.setColor('exit', 'cyan')
ui.setColor('returnToMenu', 'blue')

ui.addReturnToMenuOption()
ui.start()