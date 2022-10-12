## Description

This is a nodeJS module that is used to simplify the process of creating a menu and interface in the terminal. It creates the structure of a menu and allows the developer to easily configure that menu to what is needed. There are functionality to create fully customizable main menu, sub menus, forms, add exit and return options as well as changing colors of each section.

## Installation and Usage

This is a [Node.js](https://nodejs.org/en/) module that is installed using:

```console
$ npm i @jacoobanderson/interface-creator
```

Import the module and initialize a new interface creator by writing:

```javascript
import { InterfaceCreator } from '@jacoobanderson/interface-creator'

const ui = new InterfaceCreator()
```

You can then call the methods on the ui by:

```javascript
const ui = new InterfaceCreator()

ui.setColor('menu', 'red')
```
## Methods

This is a list of the different methods that are offered:

| Method               | Description                                  |
| -------------------  | ---------------------------------------------|
| **createPrompt(string, function, color)**                     |  Creates a string/question and also prompts the user and allows for the user's input to be handled. </br></br> `string` is a string that shows before the user prompt.</br>`function` is a function that takes the input as a parameter and handles the input.</br>`color` is the color that the first parameter string should be. </br>                                         |
| **addExitOption()**    |  Adds an exit option in the main menu.                                            |
| **setMainMenu(menuOptions)**                      | Sets the main menu view. </br></br>`menuOptions` is a object that should contain numbered keys starting from 1 with values set to the strings that wants to be shown in the menu.</br>                                             |
| **assignMainMenuFunctionality(menuFunctionality)**                     |  Assigns the functionality needed for the main menu view </br></br>`menuFunctionality` is an object that should contain numbered keys starting from 1 and correlate to the menuOptions, the values should be functions which will be called when the correspondent menuOption is chosen. </br>                                             |
| **createSubMenu(view, functionality)**                     |  This method is supposed to be used in another menu, i.e in the main menu as a value of the menuFunctionality object or in another submenu functionality object. </br></br> `view` is a object that should contain numbered keys starting from 1 with values set to the strings that wants to be shown in the submenu. </br>  `functionality` is an object that should contain numbered keys starting from 1 and correlate to the view, the values should be functions which will be called when the correspondent view option is chosen. </br>                                          |
| **addReturnToMenuOption()**                     |        Adds a return to menu option in sub menus or after main menu functionality has been called.                                      |
|  **createForm(questions)**                    |       Used to create a form which supports both regular questions with written answers and multichoice questions. **createForm needs to be put inside an async function, should be returned to extract the answers** </br></br> `questions` is an array that contains strings for regular questions with written answers and an object with the question as the key and and array of multichoice answers as the value for multichoice questions.                                        |
|   **start()**                   |       Is the method that initializes the user interface and is supposed to be put after all other methods in the code. This method is essential for it all to work.                                       |
|   **setColor(section, color)**                   | Sets the color of a certain section in the user interface </br></br> `section` is the section that the color should apply to.</br> `color` is the color that the section should have. </br> All the available colors and sections are shown down below.                                          |

## Available color sections

`menu` The main menu. </br>
`exit` The exit message. </br>
`returnToMenu` The return to menu message. </br>
`form` The form. </br>

## Available colors

`red`
`green`
`yellow`
`blue`
`cyan`

## Method examples

```javascript
    ui.createPrompt('What is your name?', (user) => console.log('Welcome, ' + user + '\n'), 'blue')  
```

```console
  What is your name?

  Jacob

  Welcome, Jacob
```
"Welcome, Jacob" Would be shown in blue.

```javascript
    ui.setMainMenu({
        1: 'Go to sub menu',
        2: 'Divide values',
        3: 'Multiply values'
    })
```

```javascript
    const view = {
        1: 'Add values',
        2: 'Form',
        3: 'Subtract values'
    }

    const functionality = {
        1: () => addValues(1, 3),
        2: async () => await functionWithCreateForm(),
        3: () => subtractValues(23, 34)
    }


    ui.assignMainMenuFunctionality({
        1: () => ui.createSubMenu(view, functionality),
        2: () => divideValues(),
        3: () => multiplyValues()
    })
    
    ui.start()
```

Main menu:
```console
  1. Go to sub menu
  2. Divide values
  3. Multiply values
  $ 1
```

Sub menu (When the number 1 is entered):
```console
  1. Add values
  2. Form
  3. Subtract values
```

```javascript
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

const data = await form()
// Shows the form data.
console.log(data)

```

Sub menu (When the number 1 is entered):
```console
  What is your name?
  $ Jacob
  What is your cats name?
  $ Cat
  Which country do you live in?
  1. Sweden
  2. Norway
  3. Denmark
  $ 1
```

```javascript
    ui.setColor('form', 'blue') 
```

## Test-app

To start the test application clone the test-app folder and run:

```console
$ npm install
$ npm start
```

in the console.
