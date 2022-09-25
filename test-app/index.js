import { InterfaceCreator } from '@jacoobanderson/interface-creator'
import prompt from "prompt-sync"

const ui = new InterfaceCreator()

let user

function promptUser() {
  const readInput = prompt()
  return readInput()
}

async function form() {
  return new Promise((resolve) => {
    const userAnswers = ui.createForm([
      'What is your name?',
      'How old are you?',
      {
        'Which country do you live in?': ['Sweden', 'Norway', 'Denmark']
      },
      {
        'What is your favorit pet?': ['Dog', 'Cat']
      },
    ])
    resolve(userAnswers)
    user = userAnswers
  })
}

async function showUser() {
  const resolvedUser = await user
  if (resolvedUser) {
    console.log('Name: ' + Object.values(resolvedUser)[0])
    console.log('Age: ' + Object.values(resolvedUser)[1])
    console.log('Country: ' + Object.values(resolvedUser)[2])
    console.log('Favorite pet: ' + Object.values(resolvedUser)[3])
  } else {
    console.log('No current user')
  }
  ui.start()
}


function addAThousand () {
  console.log('Enter your number:')
  const numberOne = promptUser()
  console.log(parseInt(numberOne) + 1000)
}

function subtractByAThousand () {
  console.log('Enter your number:')
  const numberOne = promptUser()
  console.log(parseInt(numberOne) - 1000)
}

function multiplyByAThousand () {
  console.log('Enter your number:')
  const numberOne = promptUser()
  console.log(parseInt(numberOne) * 1000)
}

ui.createPrompt('What is your name?', (user) => console.log('Welcome, ' + user + '\n'), 'blue')

ui.addExitOption()

ui.setMainMenu({
  1: 'Register user',
  2: 'Calculator',
  3: 'Show current user'
})

const view = {
  1: 'Add',
  2: 'Subtract',
  3: 'Multiply'
}

const functionality = {
  1: () => addAThousand(),
  2: () => subtractByAThousand(),
  3: () => multiplyByAThousand()
}

ui.assignMainMenuFunctionality({
  1: async () => await form(),
  2: () => ui.createSubMenu(view, functionality),
  3: async () => await showUser()
})

ui.setColor('menu', 'red')
ui.setColor('exit', 'cyan')
ui.setColor('returnToMenu', 'blue')
ui.setColor('form', 'blue')

ui.addReturnToMenuOption()

ui.start()
