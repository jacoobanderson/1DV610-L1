import { InterfaceCreator } from '@jacoobanderson/interface-creator'

const ui = new InterfaceCreator()
// Test function 1
/**
 *
 * @param num1
 * @param num2
 */
function testFuncOne (num1, num2) {
  console.log(num1 + num2)
}

// Test function 2
/**
 *
 */
async function testFuncTwo () {
  return await ui.createForm([
    'What is your name?',
    'What is your cats name?',
    {
      'Which country do you live in?': ['Sweden', 'Norway', 'Denmark']
    }
  ])
}

// Test function 3
/**
 *
 * @param num1
 * @param num2
 */
function testFuncThree (num1, num2) {
  console.log(num1 * num2)
}

// SUBMENU
// Test function 1
/**
 *
 * @param num1
 * @param num2
 */
function testFuncOneSub (num1, num2) {
  console.log(num1 + num2)
}

// Test function 2
/**
 *
 * @param num1
 * @param num2
 */
function testFuncTwoSub (num1, num2) {
  console.log(num1 - num2)
}

// Test function 3
/**
 *
 * @param num1
 * @param num2
 */
function testFuncThreeSub (num1, num2) {
  console.log(num1 * num2)
}

// ui.setInitialMessage('MESSAGE', true) Sets the message and if true it prompts for username and Greets the user.
// ui.createPrompt('', function)

ui.createPrompt('What is your name?', (user) => console.log('Welcome, ' + user + '\n'), 'blue')

// ASYNC NEEDS AWAIT
const data = await testFuncTwo()
console.log(data)

ui.addExitOption()

ui.setMainMenu({
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
  /**
   *
   */
  1: () => testFuncOneSub(1, 3),
  /**
   *
   */
  2: async () => await testFuncTwo(),
  /**
   *
   */
  3: () => testFuncThreeSub(23, 34)
}

ui.assignMainMenuFunctionality({
  /**
   *
   */
  1: () => ui.createSubMenu(view, functionality),
  /**
   *
   */
  2: async () => await testFuncTwo(),
  /**
   *
   */
  3: () => testFuncThree(5, 5)
})

ui.setColor('menu', 'red')
ui.setColor('exit', 'cyan')
ui.setColor('returnToMenu', 'blue')
ui.setColor('form', 'blue')

ui.addReturnToMenuOption()

ui.start()
