import { InterfaceCreator } from '@jacoobanderson/interface-creator'

const ui = new InterfaceCreator()

function testFuncOne (num1, num2) {
  console.log(num1 + num2)
}

// Creates form and returns answers
async function form() {
  return await ui.createForm([
    'What is your name?',
    'What is your cats name?',
    // Question with multi choice answers.
    {
      'Which country do you live in?': ['Sweden', 'Norway', 'Denmark']
    }
  ])
}

function testFuncThree (num1, num2) {
  console.log(num1 * num2)
}

function testFuncOneSub (num1, num2) {
  console.log(num1 + num2)
}

function testFuncTwoSub (num1, num2) {
  console.log(num1 - num2)
}

function testFuncThreeSub (num1, num2) {
  console.log(num1 * num2)
}

ui.createPrompt('What is your name?', (user) => console.log('Welcome, ' + user + '\n'), 'blue')

// ASYNC NEEDS AWAIT
const data = await form()
// Shows the form data.
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
  1: () => testFuncOneSub(1, 3),
  2: async () => await testFuncTwo(),
  3: () => testFuncThreeSub(23, 34)
}

ui.assignMainMenuFunctionality({
  1: () => ui.createSubMenu(view, functionality),
  2: async () => await testFuncTwo(),
  3: () => testFuncThree(5, 5)
})

ui.setColor('menu', 'red')
ui.setColor('exit', 'cyan')
ui.setColor('returnToMenu', 'blue')
ui.setColor('form', 'blue')

ui.addReturnToMenuOption()

ui.start()
