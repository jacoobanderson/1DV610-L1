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
| **createPrompt(string, function, color)**                     |  `string` is a string that shows before the user prompt.</br>`function` is a function that takes the input as a parameter and handles the input.</br>`color` is the color that the first parameter string should be.                                         |
| **addExitOption()**    |  Adds an exit option in the main menu                                            |
| **setMainMenu(menuOptions)**                      | `menuOptions` is a object that should contain numbered keys starting from 1 with values set to the strings that wants to be shown in the menu.                                             |
| **assignMainMenuFunctionality(menuFunctionality)**                     |  `menuOptions`                                            |
|                      |                                              |
|                      |                                              |

## Available colors

All colors are used within a string.

`red`
`green`
`yellow`
`blue`
`cyan`
